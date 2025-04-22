import Link from 'next/link'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        
        
        <Link href={'/dashboard'} className='text-2xl font-bold px-6 py-2 rounded-md bg-slate-800/20 '>Back to dashboard</Link>
        {children}
    </div>
  )
}

export default layout