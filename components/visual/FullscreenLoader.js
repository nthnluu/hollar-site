import CircularProgress from "@material-ui/core/CircularProgress";
import {useEffect, useState} from "react";

export default function FullscreenLoader() {
    const [showRefreshButton, toggleRefreshButton] = useState(false)
    useEffect(() => {
        const refreshTimer = setTimeout(() => toggleRefreshButton(true), 9000)
        return clearTimeout(refreshTimer)
    }, [])

    return <div className="flex justify-center items-center h-screen opacity-25">
        <div className="text-center">
            <CircularProgress disableShrink={false} color="inherit" size={64} thickness={2}/>
            {showRefreshButton && <>
                <p className="mt-4 mb-2 text-lg">This is taking longer than usual</p>
                <button className="px-3 py-1 text-sm border border-gray-800 rounded-full ml-1"
                        onClick={() => window.location.reload()}>
                    Try again
                </button>
            </>}

        </div>
    </div>
}