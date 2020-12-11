

export default function Sidebar({sidebar, onClick}) {
    const activeStyle = {
        button: "bg-gray-50 text-orange-600 focus:ring ring-orange-400 ring-opacity-25 hover:bg-white group rounded-md w-full text-left px-3 py-2 flex items-center text-sm font-medium",
        icon: "text-orange-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
    }

    const inactiveStyle = {
        button: "text-gray-900 w-full text-left focus:ring ring-gray-400 ring-opacity-25 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium",
        icon: "text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
    }

    return <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1">
            {sidebar.map(item => <button key={item.name} onClick={() => onClick(item.name)}
                                              className={item.active ? activeStyle.button : inactiveStyle.button}>
                <svg
                    className={item.active ? activeStyle.icon : inactiveStyle.icon}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    {item.icon}
                </svg>
                <span className="truncate">{item.name}</span>
            </button>)}
        </nav>
    </aside>
}