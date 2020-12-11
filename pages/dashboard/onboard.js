import {useEffect, useState} from "react";
import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import AddressAutocomplete from "../../components/form/AddressAutocomplete";
import fb from "../../lib/firebase-config";

export default function Onboard() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formData, setFormData] = useState({
        businessName: "",
        website: "",
        locationCount: 1
    })

    const onContinue = (event) => {
        event.preventDefault()
        setCurrentStepIndex(prevState => ++prevState)
        console.log(formData)
    }

    const steps = [
        {
            title: "Business Info",
            content: <StepOne currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData}/>
        },
        {
            title: "Payment Methods",
            description: "What payment methods would you like to accept?",
            content: <StepTwo currentStep={currentStepIndex} onBack={() => setCurrentStepIndex(0)}/>
        }]

    const currentStep = steps[currentStepIndex]

    useEffect(() => {
        const addBusiness = fb.functions().httpsCallable('createBusiness');
        addBusiness({
            "name": "Brightside Barbershop",
            "address": "10277 University Ave",
            "city": "San Diego",
            "state": "CA",
            "zipCode": "90210",
            "created_by": "12",
            "lat": -12.7,
            "long": 97.2
        })
            .then(() => {
                // Read result of the Cloud Function.
                console.log("done!")
            })
            .catch(error => console.log(error))
    }, [])


    return <div className="h-screen flex justify-center items-center md:bg-gray-50">
        <div className="p-8 md:border border-gray-200 rounded-lg md:shadow-lg max-w-xl w-full text-left bg-white">
            <h1 className="text-4xl font-bold text-center text-gray-900">{currentStep.title}</h1>
            <p className="text-center text-gray-400 mt-1">{currentStep.description}</p>
            <div className="mt-8">
                {currentStep.content}
            </div>
        </div>
    </div>
}

