import { useEffect, useState } from "react";

interface User {
    id: number;
    title: string;
    body: string;
}

export default function FetchApi() {
    const [data, setData] = useState<User | null>(null)
    const [loading , setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
     useEffect(() => {
         const controller  = new AbortController()
         const signal = controller.signal
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {signal});
                if (!response.ok) throw new Error("...")
                const result: User = await response.json()
                setData(result)
            } catch (err) {
                if (err instanceof Error) {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted")
                        return
                    }
                    setError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData();
        return () => controller.abort()
    }, [])

    if (loading) return <p className="text-blue-500 font-semibold">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;    
    return (
        <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">{data?.title}</h2>
          <p className="text-gray-700 leading-relaxed">{data?.body}</p>
        </div>
      )      
}

