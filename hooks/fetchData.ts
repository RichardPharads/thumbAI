'use client'
import { useEffect, useState } from "react"
import { api } from "@/services/api"



export function fetchData <T = unknown>(url:string) {
    const [data, setData ] = useState<T | null>(null)
    const [loading , setLoading ] = useState<boolean>(true)
    const [error , setError] = useState<string | null>(null)

    useEffect(() =>{
        const fetchDatas = () =>{
            api.get(`${url}`)
            .then((res) =>{
                setData(res.data)
            })
            .catch((error) =>{
                setError(error.message || "Something went wrong")
            })
            .finally(() =>{
                setLoading(false)
            })
        }
        fetchDatas()
    }, [api])

    return {
        data,
        loading,
        error
    }

}
