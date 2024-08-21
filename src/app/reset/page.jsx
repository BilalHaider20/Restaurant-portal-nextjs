import React from 'react';
import images from '../../../public/assets/Images/index' // or use /assets/logo.png if using the public folder
import Image from 'next/image';


const Reset = () => {
  return (
    <div >
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
      <div className='flex'>
      <div className=" h-screen w-[720px] bg-white  " >
        <div className="w-[720px] h-full bg-[#f6f9fd] border border-[#f6f9fd] shadow-lg p-6 "  >
          <p className="text-gray-700 font-bold text-xl pl-48 pt-10">Reset Your Password</p>
          <p className='text-gray-700 font-light text-2xl pl-18 pr-10 pt-2 flex text-center'>Please reset your password, your new password must be different from your previous password</p>
          <div className="flex mb-4 border border-[#e6e6e6] rounded-lg">
          </div>
          <div className="text-gray-700 font-normal ">OTP <div/>
          <div className='flex'>
            <Image className='bg-white h-8 w-10' src = {images.leading_case} />
          <input  type='text' className='rounded pl-2 h-8 w-[526px]' placeholder='Enter OTP'/>
            </div>

          </div>

          <div className="text-gray-700 font-semibold mt-4 ">New Password </div>
          <div>
            <div className='flex'>
            <Image className='bg-white h-8 w-10' src = {images.leading_case2} />
          <input type='text' className='rounded pl-2 h-8 w-[526px]'
            placeholder='Enter New Password' />
            </div>
            <p className="text-[#346CC4]">Must be atleast 6 characters</p>
            
          </div>

          <div className="text-gray-700 font-normal  mt-4 ">Confirm New Password </div>
          <div className='flex'>
          <Image className='bg-white h-8 w-10' src = {images.leading_case2} />
            <input type='text' className='rounded pl-2 h-8 w-[526px]'
            placeholder='Confirm New Password' />

          </div>
          <button className='bg-[#346CC4] border-[#346CC4] text-white rounded w-[565px] mt-8 h-8'>Submit</button>
    
          <button className='text-[#346CC4] rounded w-[565px] mt-2 h-8 border border-[#346CC4]'>Back to Login</button>
        </div>
      </div>
      
      <div className= ''>
        <Image className='w-[664px] h-[703] gap-10px ' src={images.reset_pic}></Image>
      </div>
      </div>
      
    </div>
    
  );
};

export default Reset;