import Link from 'next/link'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className=''>
        <div className='m-10'>
          <Link href={'/dashboard'} className='text-2xl font-bold px-6 py-2 rounded-md bg-slate-800 bg-red border'>Back to dashboard</Link>
        </div>

        <div className='p-10'>
         {children}
        </div>
        
    </div>
  )
}

export default layout