import CircularProgress from "@material-ui/core/CircularProgress";

export default function FullscreenLoader () {
    return <div className="flex justify-center items-center h-screen opacity-25">
        <div className="text-center">
            <CircularProgress disableShrink={false} color="inherit" size={64} thickness={2}/>
        </div>
    </div>
}