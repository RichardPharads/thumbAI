'use client'
import React from 'react'
import { fetchData } from '@/hooks/fetchData'
import Loading from '../Interface/Loading';
import Error from '../Interface/Error'; 
import Link from 'next/link';
export type User = {
    id: number;
    name: string;
    email:string;
    username: string
}


function DashboardData() {

    const {data , loading , error} = fetchData<User[]>('users')
    if(loading) return <Loading/>
    if(error) return <Error/>

  return (
    <ul>
        
        {data?.map((user) => (
            <Link key={user.id} href={`dashboard/${user.id}`}>
                <li>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </li>
            </Link>
        ))}
    </ul>
  )
}

export default DashboardData