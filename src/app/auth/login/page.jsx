"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import "../../styles/globals.css"
import Image from 'next/image'
import { useForm } from 'react-hook-form'


export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Redirect or perform additional actions after successful submission
    // router.push('/next-page')
  }

  return (
    
      <div className='flex flex-col items-center justify-center w-6/12 h-full bg-background-blue'>
        <div className='container mx-auto w-9/12 text-center'>
          <h1 className='text-3xl font-semibold'>Welcome to Bookme</h1>
          <span className='text-lg font-extralight'>Please provide details below to login your account</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='my-5 container mx-auto w-9/12 space-y-4'>
          <div className="space-y-2 w-full">
            <label className='m-0' htmlFor="phone">Phone Number</label>
            <input 
              {...register('phone')} 
              type="text" 
              className="border-gray-400 m-0 py-3 px-4 block w-full rounded-lg text-sm border focus:border-0" 
              placeholder="Phone Number" 
            />
          </div>
          <div className="relative space-y-2 w-full">
            <label className='m-0' htmlFor="password">Password</label>
            <input 
              {...register("password", { required: "Please enter your password" })} 
              type="password" 
              className="inputForm " 
              placeholder="Password" 
            />
            <div className="formSvgDiv">
              <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                <circle cx="16.5" cy="7.5" r=".5"></circle>
              </svg>
            </div>
            {errors.password && <p className="text-red-500" role="alert">{errors.password.message}</p>}
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember-me"
                id="remember"
                className="mt-1"
                {...register("remember")}
              />
              <label htmlFor="remember" className="ml-2 font-medium text-gray-700 text-base">Remember me</label>
            </div>

            <a className="text-primary-blue font-semibold" href="">Forgot password?</a>
          </div>

          <button type="submit" className="bg-light-blue text-white py-2 px-4 rounded w-full">Sign In</button>
        </form>

        <p className='text-grey'>or continue with</p>

        <div className='flex flex-col w-9/12 mt-3 space-y-2'>
          <a className='btnSigninWith' href=""><Image src="/assets/images/google.png" width={15} height={15}></Image> Sign in with Google</a>
          <a className='btnSigninWith' href=""><Image src="/assets/images/facebook.png" width={15} height={15}></Image> Sign in with Facebook</a>
        </div>

      </div>

  );
}
