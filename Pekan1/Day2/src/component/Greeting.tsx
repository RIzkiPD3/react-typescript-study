interface GreetingProps {
    isLoggedIn: boolean
}

export default function Greeting(props: GreetingProps) {
    if (props.isLoggedIn) {
        return <h1>Welcome back!</h1>
    } else {
        return <h1>Please sign in.</h1>
    }
}