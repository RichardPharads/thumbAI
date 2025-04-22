'use client'

import React, { useEffect, useState } from 'react'
import { api } from '@/app/services/api'
import { useParams } from 'next/navigation'

type User = {
  id: number
  name: string
  email: string
}

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const params = useParams()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get<User[]>('/users')
        setUsers(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

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
      {params.id && (
        <p className="text-gray-600">Current user ID: {params.id}</p>
      )}
      
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="py-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}