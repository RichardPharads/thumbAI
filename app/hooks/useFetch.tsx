'use client';
import { useEffect , useState } from 'react'
import {api} from '../services/api'




const useFetch = <T=unknown>(endpoint: string) =>{
    const [datas , setDatas ] = useState<T | null >(null)
    const [error , setError ] = useState <string | null> (null)
    const [loading , setLoading ] = useState <boolean>(true)

    useEffect(() =>{
        const fetchData = () => {
            api
            .get(`${endpoint}`)
            .then((res) => {
                setDatas(res.data)
            })
            .catch((error) =>{
                setError(error.message)
            })
            .finally(() =>{
                setLoading(false)
            })
        }

        fetchData()
    },[endpoint])
    return {datas, loading , error}

}

export default useFetch