import React from 'react'
import images from '../../../../public/assets/Images/index'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className='flex flex-wrap items-center justify-between p-4 w-full text-white bg-white'>
        <Image src={images.logo} alt="Logo" className="h-10 w-auto mb-4 sm:mb-0" />
        <div className='flex flex-wrap space-x-2 sm:space-x-4'>
          <button className='text-blue-700 font-semibold py-2 px-4 rounded'>
            Help
          </button>
          <button className='border border-blue-700 text-blue-700 font-semibold py-2 px-4 rounded'>
            Login
          </button>
          <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded'>
            Sign Up
          </button>
        </div>
      </nav>

      {/* box */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-[50vw] h-[90vh]  bg-[#f6f9fd] p-8 ">
          <div className='flex items-center justify-center mt-28'>
            <Image className='w-32 h-32 sm:w-[149px] sm:h-[149px]' src={images.sticker_pic} alt="Success sticker" />
          </div>
          <div className='mt-8 text-center font-semibold text-xl sm:text-2xl text-gray-700'>
            Your Password has been Reset <br />Successfully!
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className='bg-[#346CC4] text-white rounded w-full max-w-[536px] py-2 px-4 border border-[#346CC4]'>
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page