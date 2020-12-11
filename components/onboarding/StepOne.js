import TextInput from "../form/TextInput";
import Steps from "./Steps";
import SelectInput from "../form/SelectInput";

const StepTwo = ({currentStep, onContinue, formData, setFormData}) => {

    return <form onSubmit={onContinue}>
        <div className="space-y-4">

            {/*Business name*/}
            <TextInput id="business_name" onChange={event => setFormData(prevState => ({
                ...prevState,
                businessName: event.target.value
            }))} value={formData.businessName} autoComplete="off" label="Business name" required/>

            <h3 className="mt-6 flex justify-center">By continuing you agree to Hollar's Terms of Service and Privacy Policy</h3>

        </div>

        {/*Bottom of Forum*/}
        <div className="flex justify-between items-center mt-10">
            <Steps step={currentStep + 1} totalSteps={4}/>
            <div className="flex justify-between space-x-2">
                <button type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium
                        rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Continue
                </button>
            </div>
        </div>
    </form>
}

export default StepTwo