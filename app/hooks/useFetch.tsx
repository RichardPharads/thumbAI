'use client';
import { useEffect , useState } from 'react'
import {api} from '../services/api'

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}


const useFetch = () =>{
    const [datas , setDatas ] = useState<User[] | null >(null)
    const [error , setError ] = useState <string | null> (null)
    const [loading , setLoading ] = useState <boolean>(true)

    useEffect(() =>{
        const fetchData = () => {
            api
            .get('/users')
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
    },[])
    return {datas, loading , error}

}

export default useFetch