
import React from 'react'
import Link from 'next/link'
import {auth , signIn, signOut } from '../auth'

const Navbar = async () => {
  const session = await auth()

  return (
    <header className=' items-center w-full'>
      <nav className='flex justify-between items-center px-10 border h-[100]'>
        <Link href={'/'}>
          <h1>Logo</h1>
        </Link>
        <div className='flex items-center gap-5'>
          {
            session && session?.user ? (
              <>
                <Link href={'/dashboard'}>Dashboard</Link> |
                <div className='flex items-center gap-5'>
                  <img src={`${session?.user?.image}`} alt={`${session?.user?.name} Profile`} className='rounded-full w-10 h-10' />

                  <span>{session?.user?.name}</span>

                
                  <form action={async () => {
                    "use server"
                    await signOut()
                  }}>
                  <button type='submit'>Sign out</button>  
                  </form>                 
                </div>
              </>
            ) : (
              <>
                <form action={async () => {
                  "use server"
                  await signIn()
                }}>
                  <button type='submit'>Sign in</button>
                </form>
               
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar