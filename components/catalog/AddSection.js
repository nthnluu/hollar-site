import TextInput from "../form/TextInput";
import TextInputArea from "../form/TextInputArea";
import {useState} from "react";
import useAppContext from "../../lib/useAppContext";
import {useMutation} from "urql";

const InsertSectionMutation = `mutation InsertCatalogSection($sectionName: String!, $itemName: String!, $price: numeric!, $description: String, $userID: String!) {
  insert_catalog_section_one(object: {name: $sectionName, created_by: $userID, items: {data: {name: $itemName, price: $price, created_by: $userID, description: $description}}}) {
    id
  }
}`

export default function AddSection() {
    const [addSectionMenu, toggleAddSectionMenu] = useState(false)
    const {toggleLoading, currentUser} = useAppContext()
    const [insertSectionResult, insertSection] = useMutation(InsertSectionMutation)

    const handleSubmit = (event) => {
        event.preventDefault()
        toggleLoading(true)
        insertSection({
            sectionName: event.target.sectionName.value,
            itemName: event.target.itemName.value,
            price: event.target.price.value,
            description: event.target.description.value,
            userID: currentUser.uid
        })
            .then(() => {
                toggleAddSectionMenu(false)
                toggleLoading(false)
            })
            .catch(() => {
                alert('There was a problem creating a section. Please try again.')
                toggleLoading(false)
            })
    }

    return <div
        className={`bg-white ${addSectionMenu ? 'shadow-xl' : 'shadow'} overflow-hidden rounded-md`}>
        <button onClick={() => toggleAddSectionMenu(!addSectionMenu)} id="addSectionButton"
                className="bg-white w-full text-left px-4 py-5 focus:font-bold border-b border-gray-200 sm:px-6 hover:opacity-75 active:opacity-25">
            <h3 className="text-lg leading-6 text-gray-900">
                Add catalog section
            </h3>
        </button>
        {addSectionMenu && <form onSubmit={handleSubmit}>
            <div className="px-4 sm:px-6 py-5">
                <div>
                    <TextInput label="Section name" id="sectionName" required/>
                </div>
                <h3 className="text-lg mt-8 leading-6 text-gray-900">
                    Add new item
                </h3>
                <p className="text-sm text-gray-400">
                    Enter at least one item per section. You can add more later.
                </p>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 my-4">
                    <div className="col-span-2 lg:col-span-4">
                        <TextInput label="Item name" id="itemName" required/>
                    </div>
                    <div>
                        <TextInput label="Price (USD)" id="price" type="number" required/>
                    </div>
                </div>
                <TextInputArea label="Description" id="description"/>

            </div>
            <div className="bg-gray-50 px-4 py-4 flex justify-end sm:px-6">
                <button type="button" onClick={() => toggleAddSectionMenu(false)}
                        className="inline-flex items-center mr-4 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                </button>
                <button type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Add
                </button>
            </div>
        </form>}
    </div>
}