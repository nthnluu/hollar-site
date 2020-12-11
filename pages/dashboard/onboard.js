import {useState} from "react";
import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import StepThree from "../../components/onboarding/StepThree";
import StepFour from "../../components/onboarding/StepFour";


export default function Onboard() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        streetAddress: "",
        unit: "",
        city: "",
        state: "",
        zipCode: "",
        category: "",
    })

    const onContinue = (event) => {
        event.preventDefault()
        setCurrentStepIndex(prevState => ++prevState)
        console.log(formData)
    }

    const steps = [
        //Step 1
        {
            title: "What's the name of your business?",
            content: <StepOne currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData}/>
        },
        //Step 2
        {
            title: "Location Details",
            content: <StepTwo currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData} onBack={() => setCurrentStepIndex(0)}/>
        },
        //Step 3
        {
            title: "Choose a category",
            content: <StepThree currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData} onBack={() => setCurrentStepIndex(1)}/>
        },
        //Step 4
        {
            title: "Verify your info",
            content: <StepFour currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData} onBack={() => setCurrentStepIndex(2)}/>
        }]

    const currentStep = steps[currentStepIndex]


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