import Navbar from "./Navbar";
import {useContext, useState} from "react";
import {useRouter} from "next/router";
import WithGraphQL from "../../lib/with-graphql";
import useSession from "../../lib/useSession";
import FullscreenLoader from "../visual/FullscreenLoader";
import Sidebar from "./Sidebar";
import PageContext from "../../lib/PageContext";
import SessionContext from "../../lib/SessionContext";

const PageContent = ({session, sidebar, content, onClick}) => {
    const [isLoading, toggleIsLoading] = useState(false)
    const router = useRouter()

    const pushLink = (href) => {
        toggleIsLoading(true)
        router.push(href)
            .then(() => toggleIsLoading(false))
            .catch(() => toggleIsLoading(false))
    }

    return <WithGraphQL token={session.token}>
        <PageContext.Provider value={{pushLink, currentUser: session.userProfile}}>
            <div className="bg-gray-100">
                <Navbar loading={isLoading}/>
                <main
                    className={`max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8 ${isLoading && "opacity-25 pointer-events-none"} transition-opacity duration-300`}>
                    <div className={`${sidebar && 'lg:grid'} lg:grid-cols-12 lg:gap-x-5`}>
                        {sidebar &&  <Sidebar onClick={onClick} sidebar={sidebar}/>}
                        {/* Payment details */}
                        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            {content}
                        </div>
                    </div>
                </main>
            </div>
        </PageContext.Provider>
    </WithGraphQL>
}

export default function AppLayout({sidebar, children, onClick}) {
    const router = useRouter()
    const session = useContext(SessionContext)

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
            return <PageContent session={session} sidebar={sidebar} content={children} onClick={onClick}/>
    }
}