'use client'

import React,{useEffect , useState} from 'react'



function page() {


  
  return (
    <div>
      <h1>This is about page</h1>
      {data ? <p>{data.message}</p> : <p>Loading ...</p>}
    </div>
  )
}

export default page