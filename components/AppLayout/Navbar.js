import {Menu, Transition} from "@headlessui/react";
import {useContext, useState} from "react";
import SessionContext from "../../lib/SessionContext";
import UserAvatar from "../visual/UserAvatar";
import fb from "../../lib/firebase-config";
import LinearProgress from "@material-ui/core/LinearProgress";
import LoadingBar from "../visual/LoadingBar";

// Signs out the current Firebase Auth user
const signOut = () => {
    fb.auth().signOut()
}

// Button that displays an account dropdown when clicked
const ProfileDropdown = () => {
    const {userProfile} = useContext(SessionContext)
    return <div className="flex-shrink-0 relative ml-4">
        <div>
            <Menu>
                {({open}) => (
                    <>
                        <Menu.Button
                            className="bg-white text-gray-400 hover:text-gray-500 rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            id="user-menu" aria-haspopup="true">
                            <span className="sr-only">Open user menu</span>
                            <div className="h-8 w-8">
                                <UserAvatar profile={userProfile}/>
                            </div>
                        </Menu.Button>


                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                        {userProfile.email}
                                    </p>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#account-settings"
                                                className={`${
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#support"
                                                className={`${
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({active}) => (
                                            <button onClick={signOut}
                                                className={`${
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    </div>
}

// Mobile navigation menu; only visible on small screens
const MobileMenu = () => {
    const {userProfile} = useContext(SessionContext)
    return <nav className="lg:hidden" aria-label="Global">
        <div className="pt-2 pb-3 px-2 space-y-1">
            <a href="#"
               className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Dashboard</a>
            <a href="#"
               className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Jobs</a>
            <a href="#"
               className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Applicants</a>
            <a href="#"
               className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Company</a>
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                    <div className="h-10 w-10">
                        <UserAvatar profile={userProfile}/>
                    </div>
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{userProfile.displayName}</div>
                    <div className="text-sm font-medium text-gray-500">{userProfile.email}</div>
                </div>
                <button
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    <span className="sr-only">View notifications</span>
                    {/* Heroicon name: bell */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
                <a href="#"
                   className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your
                    Profile</a>
                <a href="#"
                   className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>
                <a href="#"
                   className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign
                    out</a>
            </div>
        </div>
    </nav>
}

export default function Navbar({loading}) {
    const [mobileMenu, toggleMobileMenu] = useState(false)


    return <header className="bg-white shadow relative">
        <div className="absolute bottom-0 w-full">
            <LoadingBar hidden={!loading}/>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative h-16 flex justify-between">
                <div className="relative z-10 px-2 flex lg:px-0">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="block h-8 w-auto"
                             src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg" alt="Workflow"/>
                    </div>
                </div>
                <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                    <div className="max-w-xs w-full">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <input name="search" id="search"
                                   className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                   placeholder="Search" type="search"/>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <button onClick={() => toggleMobileMenu(!mobileMenu)}
                            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                            aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        {mobileMenu ? <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg> : <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                      viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>}
                    </button>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                    <button
                        className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <span className="sr-only">View notifications</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                    </button>

                    {/* Profile dropdown */}
                    <ProfileDropdown/>

                </div>
            </div>
            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                <a href="#"
                   className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
                    Dashboard
                </a>
                <a href="#"
                   className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
                    Jobs
                </a>
                <a href="#"
                   className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
                    Applicants
                </a>
                <a href="#"
                   className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
                    Company
                </a>
            </nav>
        </div>

        {/* Mobile menu, toggle classes based on menu state. */}
        {mobileMenu && <MobileMenu/>}

    </header>
}