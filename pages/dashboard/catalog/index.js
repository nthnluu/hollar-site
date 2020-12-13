import AppLayout from "../../../components/AppLayout";
import {useState} from "react";
import TextInput from "../../../components/form/TextInput";
import {Transition} from "@headlessui/react";
import TextInputArea from "../../../components/form/TextInputArea";

const CatalogPage = () => {
    const [addSectionMenu, setAddSectionMenu] = useState(false)
    return <>
        <div className="px-4 py-5 sm:p-6">
            <div
                className={`bg-white ${addSectionMenu ? 'shadow-xl' : 'shadow'} overflow-hidden rounded-md`}>
                <button onClick={() => setAddSectionMenu(!addSectionMenu)} id="addSectionButton"
                        className="bg-white w-full text-left px-4 py-5 focus:font-bold border-b border-gray-200 sm:px-6 hover:opacity-75 active:opacity-25">
                    <h3 className="text-lg leading-6 text-gray-900">
                        Add catalog section
                    </h3>
                </button>
                {addSectionMenu && <>
                    <div className="px-4 py-5">
                        <div>
                            <TextInput label="Section name"/>
                        </div>

                        <h3 className="text-lg mt-8 leading-6 text-gray-900">
                            Add new item
                        </h3>
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 my-4">
                            <div className="col-span-2 lg:col-span-4">
                                <TextInput label="Item name"/>
                            </div>
                            <div>
                                <TextInput label="Price (USD)"/>
                            </div>
                        </div>
                        <TextInputArea label="Description"/>

                    </div>
                    <div className="bg-gray-50 px-4 py-4 flex justify-end">
                        <button type="button" onClick={() => setAddSectionMenu(false)}
                                className="inline-flex items-center mr-4 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </button>
                        <button type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                            Add
                        </button>
                    </div>
                </>}
            </div>
        </div>
    </>
}

export default function Catalog() {
    return <AppLayout title="Catalog">
        <CatalogPage/>
    </AppLayout>
}