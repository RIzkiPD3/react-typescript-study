import Avatar from "./Avatar"

interface User {
    name: string
    avatarUrl: string
}

export default function UserInfo({ user }: { user: User }) {
    return (
        <div className="flex items-center gap-3">
            <Avatar user={user} />
            <span className="font-semibold text-gray-800">{user.name}</span>
        </div>
    )
}