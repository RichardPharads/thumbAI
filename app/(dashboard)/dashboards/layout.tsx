import React, { ReactNode } from 'react'

function layout({children}: {children:ReactNode}) {
  return (
    <div>
        <h1 className='text-2xl bg-black/70 py-4'>Navigation bar</h1>
        {children}
    </div>
  )
}

export default layout