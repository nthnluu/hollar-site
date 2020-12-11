import Navbar from "./Navbar";
import {useState} from "react";
import SessionContext from "../../lib/SessionContext";
import {useRouter} from "next/router";
import WithGraphQL from "../../lib/with-graphql";
import useSession from "../../lib/useSession";
import FullscreenLoader from "../visual/FullscreenLoader";
import Sidebar from "./Sidebar";

const PageContent = ({session, sidebar, content}) => {
    const [isLoading, toggleIsLoading] = useState(false)
    return <SessionContext.Provider value={session}>
        <WithGraphQL token={session.token}>
            <div className="bg-gray-100">
                <Navbar loading={isLoading}/>
                <main
                    className={`max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8 ${isLoading && "opacity-25 pointer-events-none"} transition-opacity duration-300`}>
                    <div className={`${sidebar && 'lg:grid'} lg:grid-cols-12 lg:gap-x-5`}>
                        {sidebar &&  <Sidebar onClick={val => console.log(`You clicked on the ${val} button!`)} sidebar={sidebar}/>}
                        {/* Payment details */}
                        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            {content}
                        </div>
                    </div>
                </main>
            </div>
        </WithGraphQL>
    </SessionContext.Provider>
}

export default function AppLayout({sidebar, children}) {
    const router = useRouter()
    const session = useSession()

    // Change the rendered component based on auth state
    switch (session.status) {
        case "LOADING":
            // Waiting for Firebase auth session
            return <FullscreenLoader/>
        case "ANON":
            // Session loaded; user is not authenticated
            router.push('/signin')
            return <FullscreenLoader/>
        default:
            // Session loaded; user is logged in
            return <PageContent session={session} sidebar={sidebar} content={children}/>
    }
}