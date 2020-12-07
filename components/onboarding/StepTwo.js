import Steps from "./Steps";
import ToggleSwitch from "../form/ToggleSwitch";
import {useState} from "react";

const StepTwo = ({currentStep, onBack, onContinue}) => {
    const [toggles, setToggles] = useState({
        inPersonPayments: true,
        onlinePayments: false
    })

    return <>
        <div className="space-y-4">
            <div className="p-3 rounded-md border border-gray-300 shadow-sm flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">In store payments</h2>
                    <p className="text-gray-500 text-sm">Allow customers to place orders and pay in person.</p>
                </div>
                <ToggleSwitch label="In store payments" value={toggles.inPersonPayments}
                              onChange={value => setToggles(prevState => ({...prevState, inPersonPayments: value}))}/>
            </div>
            <div className="p-3 rounded-md border border-gray-300 shadow-sm flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">Online payments with Stripe</h2>
                    <p className="text-gray-500 text-sm">Sign up for Stripe to accept online payments</p>
                </div>
                <ToggleSwitch label="In store payments" value={toggles.onlinePayments}
                              onChange={value => setToggles(prevState => ({...prevState, onlinePayments: value}))}/>
            </div>

        </div>
        <div className="flex justify-between items-center mt-10">
            <Steps step={currentStep + 1} totalSteps={4}/>
            <div className="flex justify-between space-x-2">
                <button type="button" onClick={onBack}
                        className="inline-flex items-center text-gray-700 px-4 py-2 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                    Back
                </button>
                <button type="button" onClick={onContinue}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Continue
                </button>
            </div>

        </div>
    </>
}

export default StepTwo