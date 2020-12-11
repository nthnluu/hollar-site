import TextInput from "../form/TextInput";
import Steps from "./Steps";
import SelectInput from "../form/SelectInput";
import {useState} from "react";

const StepTwo = ({currentStep, onContinue, onBack, formData, setFormData}) => {
    const stateAbbreviations = [
        'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
        'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
        'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
        'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    return <form onSubmit={onContinue}>
        <div className="space-y-4">

            {/*Business name*/}
            <TextInput id="business_name" onChange={event => setFormData(prevState => ({
                ...prevState,
                businessName: event.target.value
            }))} value={formData.businessName} autoComplete="off" label="Business name" required/>

            <div className="flex justify-between">

                {/*Street Address*/}
                <TextInput id="street_address" onChange={event => setFormData(prevState => ({
                    ...prevState,
                    streetAddress: event.target.value
                }))} value={formData.streetAddress} autoComplete="street-address" label="Street address" required
                           type="text"/>

                {/*Suite/Unit*/}
                <div className="w-1/4">
                    <TextInput id="unit" onChange={event => setFormData(prevState => ({
                        ...prevState,
                        unit: event.target.value
                    }))} value={formData.unit} autoComplete="off" label="Suite/Unit"/>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-3">

                {/*City*/}
                <TextInput id="city" onChange={event => setFormData(prevState => ({
                    ...prevState,
                    city: event.target.value
                }))} value={formData.city} autoComplete="address-level2" label="City" type="text"/>

                {/*State*/}
                <SelectInput values={stateAbbreviations} label="State" id="state" autoComplete="address-level1"
                             value={formData.state} onChange={event => setFormData(prevState => ({
                    ...prevState,
                    state: event.target.value
                }))}/>

                {/*Zip Code*/}
                <TextInput id="zip" onChange={event => setFormData(prevState => ({
                    ...prevState,
                    zip: event.target.value
                }))} value={formData.zip} autoComplete="postal-code" label="ZIP/Postal Code" type="text"/>

            </div>
        </div>

        <div className="flex justify-between items-center mt-10">
            <Steps step={currentStep + 1} totalSteps={4}/>
            <div className="flex justify-between space-x-2">
                <button type="button" onClick={onBack}
                        className="inline-flex items-center text-gray-700 px-4 py-2 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                    Back
                </button>
                <button type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium
                        rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Continue
                </button>
            </div>
        </div>
        <h3 className="font-thin mt-4 flex justify-center">By continuing you agree to the
            <a href="#">Terms of Service and</a> <a href="#">Privacy Policy</a> </h3>
    </form>
}

export default StepTwo