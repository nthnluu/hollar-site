export default function UserAvatar({profile}) {
    return profile.photoURL ? <img className="rounded-full w-full h-full"
                                   src={profile.photoURL}
                                   alt=""/> : <div
        className="bg-orange-500 w-full h-full inline-flex items-center justify-center rounded-full text-white">{profile.displayName[0]}</div>
}