'use client'

import { useParams } from 'next/navigation'

function ID() {
 const params = useParams()
 const {id} = params
  return (
    <div>
        {id}
    </div>
  )
}

export default ID