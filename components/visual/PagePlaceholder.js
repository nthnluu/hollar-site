export default function PagePlaceholder ({title, issueUrl}) {
    return <div className="text-center">
        <p className="font-display text-5xl text-gray-500 text-center mb-6">{title}</p>
        <a className="text-lg px-6 py-2 border border-gray-600 rounded-full" href={issueUrl}>View Issue</a>
    </div>
}