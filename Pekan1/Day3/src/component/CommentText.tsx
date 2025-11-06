import UserInfo from "./UserInfo"

interface User {
    name: string
    avatarUrl: string
}

interface CommentProps {
    author: User
    text: string
    date: Date
}

export default function CommentText({ author, text, date }: CommentProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border w-96">
            <UserInfo user={author} />
            <p className="mt-2 text-gray-700">{text}</p>
            <p className="text-sm text-gray-500 mt-1">{date.toLocaleDateString()}</p>
        </div>
    )
}