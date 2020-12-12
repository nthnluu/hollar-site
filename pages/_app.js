import '../styles/globals.css'
import useSession from "../lib/useSession";
import SessionContext from "../lib/SessionContext";

function MyApp({Component, pageProps}) {
    const session = useSession()

    return <SessionContext.Provider value={session}>
        <Component {...pageProps} />
    </SessionContext.Provider>

}

export default MyApp
