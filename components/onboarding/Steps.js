const Steps = ({step, totalSteps}) => {

    const stepArray = [...Array(totalSteps).keys()]

    return <nav className="flex items-center justify-center" aria-label="Progress">
        <p className="text-sm font-medium">Step {step} of {totalSteps}</p>
        <ol className="ml-8 flex items-center space-x-5">
            {stepArray.map((item, index) => {
                const currentStep = index + 1

                if (currentStep === step) {
                    // current step component
                    return <li key={index}>
                        {/* Current Step */}
                        <a href="#" className="relative flex items-center justify-center" aria-current="step">
        <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
          <span className="w-full h-full rounded-full bg-orange-200"/>
        </span>
                            <span className="relative block w-2.5 h-2.5 bg-orange-600 rounded-full" aria-hidden="true"/>
                            <span className="sr-only">Step 2</span>
                        </a>
                    </li>
                } else if (currentStep < step) {
                    // completed step
                    return <li key={index}>
                        <a href="#" className="block w-2.5 h-2.5 bg-orange-600 rounded-full hover:bg-orange-900">
                            <span className="sr-only">Step {currentStep}</span>
                        </a>
                    </li>
                } else {
                    // upcoming step
                    return <li key={index}>
                        <a href="#" className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
                            <span className="sr-only">Step 3</span>
                        </a>
                    </li>
                }
            })}
        </ol>
    </nav>
}

export default Steps