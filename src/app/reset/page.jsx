"use client";
import React from 'react';
import images from '../../../public/assets/Images/index';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Reset = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('./reset/success');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className='flex flex-wrap items-center justify-between p-4 w-full text-white bg-white'>
        <Link href="/en/auth/login">
        <Image src={images.logo} alt="Logo" className="h-10 w-auto mb-4 sm:mb-0" />
        </Link>
        <div className='flex flex-wrap space-x-2 sm:space-x-4'>
          <button className='text-blue-700 font-semibold py-2 px-4 rounded text-sm sm:text-base'>
            Help
          </button>
          <button className='border border-blue-700 text-blue-700 font-semibold py-2 px-4 rounded text-sm sm:text-base'>
            Login
          </button>
          <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base'>
            Sign Up
          </button>
        </div>
      </nav>
      <div className='flex flex-col lg:flex-row flex-grow'>
        <div className="w-full lg:w-1/2 bg-white">
          <div className="w-full h-[110vh] bg-[#f6f9fd] border border-[#f6f9fd] shadow-lg p-4 sm:p-6">
            <h1 className="text-[#3C3C3C] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-4">Reset Your Password</h1>
            <p className='text-[#6B7280] font-[400] text-sm sm:text-base lg:text-lg text-center mb-6'>
              Please reset your password, your new password must be different from your previous passwords
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="text-[#3C3C3C] font-[500] text-base sm:text-lg mb-2 block">OTP</label>
                <div className='flex'>
                  <Image className='bg-white h-[40px] sm:h-[52px] w-[40px] sm:w-[56px]' src={images.leading_case} alt="OTP Icon" />
                  <input type='text' className='rounded pl-2 h-[40px] sm:h-[51px] flex-grow font-normal text-sm sm:text-base' placeholder='Enter OTP' />
                </div>
              </div>
              <div>
                <label className="text-[#3C3C3C] font-[500] text-base sm:text-lg mb-2 block">New Password</label>
                <div className='flex'>
                  <Image className='bg-white h-[40px] sm:h-[52px] w-[40px] sm:w-[56px]' src={images.leading_case2} alt="Password Icon" />
                  <input type='password' className='rounded pl-2 h-[40px] sm:h-[51px] flex-grow text-sm sm:text-base' placeholder='Enter New Password' />
                </div>
                <p className="text-[#346CC4] text-xs sm:text-sm mt-1">Must be at least 6 characters</p>
              </div>
              <div>
                <label className="text-[#3C3C3C] font-[500] text-base sm:text-lg mb-2 block">Confirm New Password</label>
                <div className='flex'>
                  <Image className='bg-white h-[40px] sm:h-[52px] w-[40px] sm:w-[56px]' src={images.leading_case2} alt="Confirm Password Icon" />
                  <input type='password' className='rounded pl-2 h-[40px] sm:h-[51px] flex-grow text-sm sm:text-base' placeholder='Confirm New Password' />
                </div>
              </div>
              <button className='bg-[#346CC4] border-[#346CC4] text-white rounded w-full mt-6 sm:mt-8 h-[40px] sm:h-[48px] text-sm sm:text-base' onClick={handleSubmit}>Submit</button>
              <button className='text-[#346CC4] rounded w-full mt-2 h-[40px] sm:h-[48px] border border-[#346CC4] text-sm sm:text-base'>Back to Login</button>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-[50vh] lg:h-auto mt-6 lg:mt-0'>
          <Image 
            className='w-full h-full object-cover' 
            src={images.reset_pic} 
            alt="Reset Illustration" 
            layout="responsive"
            width={664} 
            height={703}
          />
        </div>
      </div>
    </div>
  );
};

export default Reset;