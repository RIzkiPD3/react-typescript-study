interface GreetingProps {
    name: string;
    welcome: string;
    greeting: string
}

export default function Greeting(props: GreetingProps) {
    return (
        <div>
            <h1 className={"text-4xl font-bold justify-center text-center text-red-600"}>{props.welcome}, {props.name}</h1>
            <p className="text-2xl text-center text-green-600">{props.greeting}</p>
        </div>
    )
        
}