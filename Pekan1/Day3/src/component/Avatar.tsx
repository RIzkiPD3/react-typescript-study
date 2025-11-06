 interface User {
    name: string
    avatarUrl: string
 }

 export default function Avatar({ user } : { user: User }) {
    return (
        <img 
        className="w-12 h-12 rounded-full border border-e-gray-300"
        src={user.avatarUrl}
        alt={user.name}
         />
    )
 }