import {useState, useEffect} from 'react';
import fb from "./firebase-config";

// A hook that adds a listener on the current Firebase session
export default function useSession() {
    const [session, setSession] = useState({status: 'LOADING', userProfile: {}, token: ""})

    useEffect(() => {
        return fb.auth().onAuthStateChanged(async user => {
            if (user) {
                const token = await user.getIdToken();
                const idTokenResult = await user.getIdTokenResult();
                const hasuraClaim =
                    idTokenResult.claims["https://hasura.io/jwt/claims"];

                if (hasuraClaim) {
                    setSession({status: "AUTHENTICATED", userProfile: user, token: token});
                } else {
                    // Check if refresh is required.
                    const metadataRef = fb
                        .database()
                        .ref("metadata/" + user.uid + "/refreshTime");

                    metadataRef.on("value", async (data) => {
                        if (!data.exists) return
                        // Force refresh to pick up the latest custom claims changes.
                        const token = await user.getIdToken(true);
                        setSession({status: "AUTHENTICATED", userProfile: user, token: token});
                    });
                }
            } else {
                setSession({status: "ANON", userProfile: undefined, token: undefined});
            }
        })
    }, [])

    return session
}