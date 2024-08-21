import React from 'react'
import images from '../../../../public/assets/Images/index'
import Image from 'next/image'


const page = () => {
  return (
    <div>
        <nav className='flex items-center justify-between p-4 w-full text-white'>
        <Image src={images.logo} alt="Logo" className="h-10 w-auto" />
        <div className='space-x-4'>
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


      {/* box  */}

      <div className="flex items-center justify-center">

    

      <div className="h-[973px] w-[720px]  bg-[#f6f9fd] ">
        <div className='flex items-center justify-center'>
        <Image className='w-[149px] h-[149px] mt-[243px]' src={images.sticker_pic}/></div>
        <div className='mt-8 flex items-center justify-center text-center font-semibold text-2xl text-gray-700'>Your Password has been Reset <br />Successfully!
        </div>
        <div className="flex items-center justify-center">
        <button className='bg-[#346CC4] text-white  rounded w-[536px] mt-8 h-8 border border-[#346CC4]'>Back to Login</button>
        </div>
        

      </div>
      
      </div>
      

    </div>
    
  )
}

export default page
