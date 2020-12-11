import {useState} from "react";
import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import StepThree from "../../components/onboarding/StepThree";


export default function Onboard() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        streetAddress: "",
        unit: "",
        city: "",
        state: "",
        zipCode: "",
        category: "Option 1",
    })

    const onContinue = (event) => {
        event.preventDefault()
        setCurrentStepIndex(prevState => ++prevState)
        console.log(formData)
    }

    const steps = [
        {
            title: "What's the name of your business?",
            content: <StepOne currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData}/>
        },
        {
            title: "Location Details",
            content: <StepTwo currentStep={currentStepIndex} onContinue={onContinue} formData={formData}
                              setFormData={setFormData} onBack={() => setCurrentStepIndex(0)}/>
        },
        {
            title: "Choose a category ",
            description: "Choose one that best fits your business.",
            content: <StepThree currentStep={currentStepIndex} onBack={() => setCurrentStepIndex(1)}/>
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