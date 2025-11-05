interface ProfileCardProps {
    name: string;
    image: string;
    bio: string;
    skill: string[];
}

export default function ProfileCard({ name, image, bio, skill }: ProfileCardProps) {
return(
    <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{bio}</p>
        <ul>
            {skill.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
)}


