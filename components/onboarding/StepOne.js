import TextInput from "../form/TextInput";
import Steps from "./Steps";
import SelectInput from "../form/SelectInput";

const StepOne = ({currentStep, onContinue, formData, setFormData}) => {
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

            {/*Website*/}
            <TextInput id="website" onChange={event => setFormData(prevState => ({
                ...prevState,
                website: event.target.value
            }))} value={formData.website} autoComplete="off" label="Website (optional)" type="url"/>

            {/*Number of locations*/}
            <TextInput id="location_count" onChange={event => setFormData(prevState => ({
                ...prevState,
                locationCount: event.target.value
            }))} value={formData.locationCount} autoComplete="off" label="Number of locations" required type="number"/>

            {/*Street Address*/}
            <TextInput id="street_address" onChange={event => setFormData(prevState => ({
                ...prevState,
                streetAddress: event.target.value
            }))} value={formData.streetAddress} autoComplete="street-address" label="Street address" required
                       type="text"/>

            {/*City, State, Zip*/}
            <div className="grid grid-cols-3 gap-3">
                <TextInput id="city" onChange={event => setFormData(prevState => ({
                    ...prevState,
                    city: event.target.value
                }))} value={formData.city} autoComplete="address-level2" label="City" type="text"/>
                <SelectInput values={stateAbbreviations} label="State" id="state" autoComplete="address-level1"
                             value={formData.state} onChange={event => setFormData(prevState => ({
                    ...prevState,
                    state: event.target.value
                }))}/>
                <TextInput id="zip" onChange={event => setFormData(prevState => ({
                    ...prevState,
                    zip: event.target.value
                }))} value={formData.zip} autoComplete="postal-code" label="ZIP/Postal Code" type="text"/>
            </div>
        </div>
        <div className="flex justify-between items-center mt-10">
            <Steps step={currentStep + 1} totalSteps={4}/>
            <div className="flex justify-between space-x-2">
                <button type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Continue
                </button>
            </div>
        </div>
    </form>
}

export default StepOne