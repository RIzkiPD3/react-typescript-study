interface GreetingProps {
    isLoggedIn: boolean
}

export function Greeting({ isLoggedIn }: GreetingProps) {
    if (isLoggedIn) {
        return (
            <h1 className="text-2xl font-bold text-green-700">
                Selamat Datang Kembali, My Brother!🔥
            </h1>
        )
    } else {
        return (
            <h1 className="text-2xl font-bold text-red-700">
                Silahkan Login Terlebih Dahulu
            </h1>   
        )
    }
}