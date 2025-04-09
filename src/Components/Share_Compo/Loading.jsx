import React from 'react'
import { FadeLoader } from "react-spinners";


export default function Loading() {
  return (
    <div className='w-full text-5xl  flex items-center justify-center h-screen '>
      <FadeLoader color="#484948" width={5} />
    </div>
  )
}
