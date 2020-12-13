import '../styles/globals.css'
import useSession from "../lib/useSession";
import SessionContext from "../lib/SessionContext";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    const session = useSession()

    return <SessionContext.Provider value={session}>
        <Head>
            <title>Hollar</title>
        </Head>
        <Component {...pageProps} />
    </SessionContext.Provider>

}

export default MyApp
