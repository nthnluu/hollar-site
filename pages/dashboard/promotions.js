import AppLayout from "../../components/AppLayout";
import {useState} from "react";

const Overview = () => {
    return <>
        <div className="space-y-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Profile
            </h3>
            <p className="max-w-2xl text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
            </p>
        </div>
        <div className="mt-6">
            <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                        Name
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span className="flex-grow">Chelsea Hagon</span>
                        <span className="ml-4 flex-shrink-0">
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Update
                                </button>
                              </span>
                    </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt className="text-sm font-medium text-gray-500">
                        Photo
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                <img className="h-8 w-8 rounded-full"
                                     src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                              </span>
                        <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Update
                                </button>
                                <span className="text-gray-300" aria-hidden="true">|</span>
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Remove
                                </button>
                              </span>
                    </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt className="text-sm font-medium text-gray-500">
                        Email
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span className="flex-grow">chelsea.hagon@example.com</span>
                        <span className="ml-4 flex-shrink-0">
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Update
                                </button>
                              </span>
                    </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                    <dt className="text-sm font-medium text-gray-500">
                        Job title
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span className="flex-grow">Human Resources Manager</span>
                        <span className="ml-4 flex-shrink-0">
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Update
                                </button>
                              </span>
                    </dd>
                </div>
            </dl>
        </div>
    </>
}


export default function Promotions() {
    const tabs = ['Overview', 'Templates', 'Analytics']
    const [currentTab, setCurrentTab] = useState('Overview')

    return <AppLayout title="Promotions" currentPage="promotions">
        <>
            {/* Tabs */}
            <div className="lg:hidden">
                <label htmlFor="selected-tab" className="sr-only">Select a tab</label>
                <select id="selected-tab" name="selected-tab"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                    <option selected>General</option>
                    <option>Password</option>
                    <option>Notifications</option>
                    <option>Plan</option>
                    <option>Billing</option>
                    <option>Team Members</option>
                </select>
            </div>
            <div className="hidden lg:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                        {tabs.map(tab => <button onClick={() => setCurrentTab(tab)}
                                                 className={currentTab === tab ? "border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"}>
                            {tab}
                        </button>)}
                    </nav>
                </div>
            </div>
            {/* Description list with inline editing */}
            <div className="mt-10 divide-y divide-gray-200">
                <Overview/>
            </div>
            <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Account
                    </h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                        Manage how information is displayed on your account.
                    </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                                Language
                            </dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">English</span>
                                <span className="ml-4 flex-shrink-0">
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Update
                                </button>
                              </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">
                                Date format
                            </dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">DD-MM-YYYY</span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Update
                                </button>
                                <span className="text-gray-300" aria-hidden="true">|</span>
                                <button type="button"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  Remove
                                </button>
                              </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt id="timezone-option-label" className="text-sm font-medium text-gray-500">
                                Automatic timezone
                            </dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* On: "bg-purple-600", Off: "bg-gray-200" */}
                                <button type="button" aria-pressed="true" aria-labelledby="timezone-option-label"
                                        className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto">
                                    <span className="sr-only">Use setting</span>
                                    {/* On: "translate-x-5", Off: "translate-x-0" */}
                                    <span aria-hidden="true"
                                          className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>
                                </button>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                            <dt id="auto-update-option-label" className="text-sm font-medium text-gray-500">
                                Auto-update applicant data
                            </dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* On: "bg-purple-600", Off: "bg-gray-200" */}
                                <button type="button" aria-pressed="false" aria-labelledby="auto-update-option-label"
                                        className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto">
                                    <span className="sr-only">Use setting</span>
                                    {/* On: "translate-x-5", Off: "translate-x-0" */}
                                    <span aria-hidden="true"
                                          className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"/>
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    </AppLayout>
}