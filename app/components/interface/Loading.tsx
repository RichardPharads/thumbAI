import React from 'react'

function Loading() {
  return (
    <div className="flex gap-4 m-5 w-fit ">
      <div className="w-[50px] h-[50px] bg-white rounded-full animate-pulse-gray"></div>
      <div className="flex flex-col gap-2">
        <div className="w-[300px] h-[20px] bg-white rounded-sm animate-pulse-gray"></div>
        <div className="w-[200px] h-[20px] bg-white rounded-sm animate-pulse-gray"></div>
      </div>
    </div>
  )
}

export default Loading