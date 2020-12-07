import '../styles/globals.css'
import {useEffect, useState} from "react";
import fb from "../lib/firebase-config";
import SessionContext from "../lib/SessionContext";
import WithGraphQL from "../lib/with-graphql";

function MyApp({Component, pageProps}) {
    const [session, setSession] = useState({status: 'LOADING', userProfile: {}, token: ""})

    useEffect(() => {
        return fb.auth().onAuthStateChanged(async user => {
            if (user) {
                const token = await user.getIdToken();
                const idTokenResult = await user.getIdTokenResult();
                const hasuraClaim =
                    idTokenResult.claims["https://hasura.io/jwt/claims"];

                if (hasuraClaim) {
                    setSession({ status: "AUTHENTICATED", userProfile: user, token: token });
                } else {
                    // Check if refresh is required.
                    const metadataRef = fb
                        .database()
                        .ref("metadata/" + user.uid + "/refreshTime");

                    metadataRef.on("value", async (data) => {
                        if(!data.exists) return
                        // Force refresh to pick up the latest custom claims changes.
                        const token = await user.getIdToken(true);
                        setSession({ status: "AUTHENTICATED", userProfile: user, token: token });
                    });
                }
            } else {
                setSession({ status: "ANON", userProfile: undefined, token: undefined  });
            }
        })
    }, [])

    if (session.status === "LOADING") return null

    return <SessionContext.Provider value={session}>
        <WithGraphQL token={session.token}>
            <Component {...pageProps} />
        </WithGraphQL>
    </SessionContext.Provider>
}

export default MyApp
