import Steps from "./Steps";
import React, {useState} from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';

const StepThree = ({currentStep, onBack, onContinue, formData, setFormData}) => {

    const options = [
        'Retailer',
        'Health',
        'Distributor',
        'Food Service',
        'Supplier',
        'Manufacturer',
        'Business Services',
        'Investor'
    ]

    return <form onSubmit={onContinue}>
        <div className="mb-4 flex justify-center">
            <Autocomplete
                id="custom-input-demo"
                options={options}
                renderInput={(params) => (
                    <div ref={params.InputProps.ref} className="w-full">
                        <input id="address" name="address" type="text" {...params.inputProps} onChange={event => setFormData(prevState => ({
                            ...prevState,
                            category: event.target.value
                        }))}
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                               shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500
                               focus:border-orange-500 md:text-lg"/>
                    </div>
                )}
            />
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
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Continue
                </button>
            </div>

        </div>
    </form>
}

export default StepThree;