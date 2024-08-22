"use client";
import React from 'react';
import images from '../../../public/assets/Images/index'; // or use /assets/logo.png if using the public folder
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Reset = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    router.push('./reset/success');
  };

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
      <div className='flex'>
        <div className="h-screen w-[720px] bg-white">
          <div className="w-[720px] h-[1037px] bg-[#f6f9fd] border border-[#f6f9fd] shadow-lg p-6">
            <p className="text-[#3C3C3C] font-bold text-[32px] pl-48 ml-0 pt-10">Reset Your Password</p>
            <p className='text-[#6B7280] font-[400] text-[18px] ml-16 pl-0 pr-12 pt-2 flex text-center'>
              Please reset your password, your new password must be different from your previous passwords
            </p>
            <div className="text-[#3C3C3C] font-[500] text-[18px] ml-16 mt-4">
              OTP
              <div className='flex'>
                <Image className='bg-white h-[52px] w-[56px]' src={images.leading_case} alt="OTP Icon" />
                <input type='text' className='rounded pl-2 h-[51px] w-[480px] font-normal' placeholder='Enter OTP' />
              </div>
            </div>
            <div className="text-[#3C3C3C] font-[500] text-[18px] mt-4 ml-16">New Password</div>
            <div>
              <div className='flex ml-16'>
                <Image className='bg-white h-[52px] w-[56px]' src={images.leading_case2} alt="Password Icon" />
                <input type='text' className='rounded pl-2 h-[51px] w-[480px]' placeholder='Enter New Password' />
              </div>
              <p className="text-[#346CC4] ml-16">Must be at least 6 characters</p>
            </div>
            <div className="text-[#3C3C3C] font-[500] text-[18px] mt-4 ml-16">Confirm New Password</div>
            <div className='flex ml-16'>
              <Image className='bg-white h-[52px] w-[56px]' src={images.leading_case2} alt="Confirm Password Icon" />
              <input type='text' className='rounded pl-2 h-[51px] w-[480px]' placeholder='Confirm New Password' />
            </div>
            <button className='bg-[#346CC4] border-[#346CC4] text-white rounded w-[536px] mt-8 h-[48px] ml-16' onClick={handleSubmit}>Submit</button>
            <button className='text-[#346CC4] rounded w-[536px] mt-2 h-[48px] border border-[#346CC4] ml-16'>Back to Login</button>
          </div>
        </div>
        <div className=''>
          <Image className='w-[664px] h-[703] ml-10px mt-6' src={images.reset_pic} alt="Reset Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Reset;
