import TextInput from "../form/TextInput";
import Steps from "./Steps";
import SelectInput from "../form/SelectInput";
import {useState} from "react";

const StepFour = ({currentStep, onContinue, onBack, formData, setFormData}) => {

    return <form onSubmit={onContinue}>
        <div className="space-y-4">
            <h1>Hi</h1>
        </div>

        {/*Bottom of Forum*/}
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
    </form>
}

export default StepFour;