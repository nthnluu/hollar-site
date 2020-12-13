export default function TextInputArea({label, id, type, autoComplete, required, value, onChange, error, helper, ...props}) {
    return <div>
        <label htmlFor={id} className={`block text-sm font-medium ${error ? "text-red-600" : "text-gray-700"}`}>
            {label}
        </label>
        <div className="mt-1">
            <textarea id={id} name={id} type={type} autoComplete={autoComplete} required={required}
                   value={value} onChange={onChange} {...props}
                   className={`appearance-none block w-full px-3 py-2 border border-gray-300 ${error ? "border-red-400 text-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 md:text-lg`}/>
        </div>
        <p className={`${error ? "text-red-500" : "text-gray-300"} text-sm`}>{helper}</p>
    </div>
}