export default function SectionList({section}) {
    return <div className="bg-white shadow overflow-hidden rounded-md">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                {section.name}
            </h3>
        </div>
        <ul className="divide-y divide-gray-200">
            {section.items.map(item => <li key={item.id}>
                <a href="#" className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="min-w-0 flex-1 flex items-center">
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-md bg-gray-200"/>
                                {/*<img className="h-12 w-12 rounded-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />*/}
                            </div>
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <p className="text-sm font-medium text-orange-600 truncate">{item.name} (${item.price})</p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                        <span className="truncate">{item.description}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* Heroicon name: chevron-right */}
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </a>
            </li>)}
        </ul>
    </div>
}