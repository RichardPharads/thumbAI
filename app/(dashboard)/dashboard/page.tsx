'use client'
import useFetch from '@/app/hooks/useFetch'
import Link from 'next/link';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default function Dashboard() {
  const {datas , loading , error } = useFetch<User[]>('users')

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
     
      <div className="p-4 bg-red-50 rounded-lg">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
  
      
      <ul className="divide-y divide-gray-200">
        {datas.map((user) => (
           <Link href={`/dashboard/${user.id}`}>
          <li key={user.id} className="py-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p>{user.username}</p>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}