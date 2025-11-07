interface ProfileBoxProps {
    name: string;
    bio: string;
    image: string;
}

export default function ProfileBox({ name, bio, image }: ProfileBoxProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center border border-gray-200">
            <img
            src={image}
            alt={name}
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-400"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-3">{name}</h2>
          <p className="text-gray-600 mt-2">{bio}</p>
        </div>
    )
}
