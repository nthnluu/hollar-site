const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const axios = require('axios');
const geofire = require('geofire');

// On sign up.
exports.processSignUp = functions.auth.user().onCreate(user => {
    const customClaims = {
        "https://hasura.io/jwt/claims": {
            "x-hasura-default-role": "user",
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-user-id": user.uid
        }
    };

    return admin
        .auth()
        .setCustomUserClaims(user.uid, customClaims)
        .then(() => {
            // Update real-time database to notify client to force refresh.
            const metadataRef = admin.database().ref("metadata/" + user.uid);
            // Set the refresh time to the current UTC timestamp.
            // This will be captured on the client to force a token refresh.
            return metadataRef.set({refreshTime: new Date().getTime()});
        })
        .catch(error => {
            console.log(error);
        });
});

// Take the data passed to this HTTP endpoint and insert business object into Hasura
exports.createBusiness = functions.https.onCall((data, context) => {
    const {name, address, city, state, zipCode, lat, long} = data
    const mutation = `mutation InsertBusiness($name: String!, $address: String!, $city: String!, $state: String!, $zip_code: String!, $created_by: String!, $lat: numeric!, $long: numeric!) {
  insert_business(objects: [{name: $name, city: $city, state: $state, zip_code: $zip_code, street_address: $address, lat: $lat, long: $long, created_by: $created_by}]) {
    returning {
      id
    }
  }
}`

    return axios({
        method: 'post',
        url: 'https://hollar-api.herokuapp.com/v1/graphql',
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': functions.config().hasura.secret
        },
        data: {
            query: mutation,
            variables: {
                created_by: context.auth.uid,
                name: name,
                address: address,
                city: city,
                state: state,
                zip_code: zipCode,
                lat: lat,
                long: long
            }
        }
    })
        .then((res) => {
            // Add newly created business to location index
            const newBusinessID = res.data.data['insert_business'].returning[0].id
            const firebaseRef = admin.database().ref('businessLocations');
            let geoFire = new geofire.GeoFire(firebaseRef);
            geoFire.set(newBusinessID, [lat, long])
                .then(() => {
                    console.log("Provided key has been added to GeoFire");
                })
                .catch((error) => console.log(`Error: ${error}`))
            return newBusinessID
        })
        .catch(error => console.log(error))
});
