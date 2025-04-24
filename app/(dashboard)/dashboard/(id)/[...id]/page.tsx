'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import useFetch from '@/app/hooks/useFetch'
import Loading from '@/app/components/interface/Loading'
import Error from '@/app/components/interface/Error'

interface User {
  id: number;
  name: string;
  username: string;
  email:string
}

function page() {
  const params = useParams()
  const {id} = params

  const { datas: user, loading, error } = useFetch<User>(`/users/${id}`);
  if (loading) return <Loading/>
  if (error) return <Error/>

  return (
    <div>
      <h1 className='text-lg'>{id}</h1>
      <h1 className='text-2xl'>{user?.name}</h1>
      <h2>{user?.username}</h2>
      <p>{user?.email}</p>
    </div>
  )
}

export default page