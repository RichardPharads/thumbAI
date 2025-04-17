import React from 'react'

function page(props) {
  const { id} = props.params
  console.log(id)
  return (
    <div> This is dynamic routes {id}</div>
  )
}

export default page