"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router =useRouter();
  return (
    <div className='flex flex-col align-center justify-center h-[100vh] mx-auto w-[70%]'>
      <h1 className='text-2xl my-5' >Restaurant Management System</h1>
      <button onClick={()=>router.push('/signin')} className='px-3 py-1 bg-blue-700 rounded-md text-white w-20'>Sign in</button>
    </div>
  )
}

export default page