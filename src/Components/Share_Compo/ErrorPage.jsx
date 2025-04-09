import React from 'react'
import { Link } from 'react-router'
import ErrorImage from '../../assets/Error page/error page.png'

export default function ErrorPage() {
  return (
    <div className='container py-16 space-y-5 m-auto flex items-center justify-center flex-col px-3'>
      <div className='w-96'>
        <img src={ErrorImage} alt="" />
      </div>
        <Link className='btn bg-gray-200 px-8 hover:bg-gray-300' to="/">Home Back</Link>
    </div>
  )
}
