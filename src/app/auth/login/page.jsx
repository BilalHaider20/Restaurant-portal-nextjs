"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import "../../styles/globals.css"
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { LuKeyRound } from "react-icons/lu";
import PhoneNumber from '../../../components/PhoneNumber'

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
    

        <form onSubmit={handleSubmit(onSubmit)} className='my-5 container mx-auto w-9/12 space-y-4'>
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

  );
}
