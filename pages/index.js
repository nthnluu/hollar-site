import Link from "next/link";


export default function Home() {
    return (
        <div className="mx-auto max-w-4xl">
            <div className="border-b flex justify-between items-center py-4 mb-24">
                <h2 className="text-2xl font-bold">Hollar</h2>
                <Link href="/signin">
                    <a className="border rounded-full px-3 py-1">Business sign in</a>
                </Link>

            </div>
            <h1 className="text-6xl font-bold text-gray-900 font-display">Explore, shop, and earn rewards from local businesses.</h1>
        </div>
    )
}
