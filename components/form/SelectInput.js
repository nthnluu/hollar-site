export default function SelectInput({values, onChange, value, label, id, autoComplete}) {
    return <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            <select id={id} name={id} autoComplete={autoComplete}
                    onChange={onChange} value={value}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 md:text-lg">
                {values.map(val => <option key={val}>{val}</option>)}
            </select>
        </div>
    </div>
}