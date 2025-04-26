'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { fetchData } from '@/hooks/fetchData'
import { User } from '@/components/functional/Dashboard'
import Loading from '@/components/Interface/Loading'
import Error from '@/components/Interface/Error'

function page() {
    const params = useParams()
    const {id} = params
    const {data , loading , error} = fetchData<User>(`users/${id}`)

    if(loading) return <Loading/>
    if(error) return <Error/>
  return (
    <div>
        <h1>{data?.name}</h1>
        <h2>{data?.email}</h2>
        <p>{data?.username}</p>
    </div>
  )
}

export default page