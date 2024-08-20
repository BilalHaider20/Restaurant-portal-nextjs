"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import "../../styles/globals.css"
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { LuKeyRound } from "react-icons/lu";
import PhoneNumber from '../../../components/PhoneNumber'
import Link from 'next/link'

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

    <div className='my-5  flex flex-col items-center justify-center w-6/12 h-full py-10 bg-background-blue'>
      <div className='container mx-auto w-9/12 text-center'>
        <h1 className='text-3xl font-semibold'>Welcome to Bookme</h1>
        <span className='text-lg font-extralight'>Please provide details below to login your account</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto w-9/12 space-y-4'>
        <div className="space-y-2 w-full">
          <label className='m-0' htmlFor="phone">Phone Number</label>
          <PhoneNumber />
        </div>
        <div className="relative space-y-2 w-full">
          <label className='m-0' htmlFor="Password">Password</label>
          <input
            {...register("password", { required: "Please enter your password" })}
            type="password"
            className="inputForm "
            placeholder="Password"
            name='password'
          />
          <div className="formSvgDiv">
            <LuKeyRound className='text-slate-400' />
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
      <p className='flex font-base items-center gap-2 mt-3'>Don’t Have an Account? <Link className="font-base text-light-blue text-semibold" href="/auth/signup">Sign Up</Link></p>
    </div>



  );
}
