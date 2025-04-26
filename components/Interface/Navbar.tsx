import React from 'react'
import {auth , signIn , signOut} from '@/auth'
import Link from 'next/link';

async function Navbar () {

  const session = await auth();


  return (
    <div>
      <header className='w-full'>
        <nav className='flex justify-between items-center p-10 border'>
          <Link href={'/'}>
          <h1 className='text-2xl'>logo</h1>
          </Link>
          <div>
           {
            session && session?.user?.name ? (
              <div className='flex items-center gap-5'>
                  <div className='flex items-center gap-5'>
                    <img src={`${session?.user?.image}`} alt="" className='rounded-full w-[50] h-[50] border-3 border-red-500' />
                    <span className='text-xl'>{session?.user?.name}</span>
                  </div>

                <form action={async () =>{
                  'use server'
                  await signOut({redirectTo: '/'})
                }}>
                  <button type='submit'>Log out</button>
               </form>
                </div>
            ):(
              <>
                  <form action={async () =>{
                  "use server"
                  await signIn()
                  }}>
                    <button type='submit'>Log in</button>
                  </form>
                </>
            )
           }

           
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar