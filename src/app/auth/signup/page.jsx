"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import "../../styles/globals.css"
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { AiOutlineUser } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { LuKeyRound } from 'react-icons/lu'

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
            <div className="space-y-2 w-full relative">
                <label className='m-0' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                <div className="formSvgDiv">
                    <AiOutlineUser className='text-slate-400' />
                </div>
                <input
                    {...register('name', { required: "Please enter your name" })}
                    type="text"
                    className="inputForm"
                    placeholder="Enter Your Name"
                    name='name'
                />
                {errors.name && <p className="text-red-500" role="alert">{errors.name.message}</p>}
            </div>
            <div className="relative space-y-2 w-full">
                <label className='m-0' htmlFor="email">Email Address <span className='text-red-500'>*</span></label>
                <input
                    {...register("email", { required: "Please enter your email address" })}
                    type="email"
                    className="inputForm "
                    name='email'
                    placeholder="Enter Your Email Address"
                />
                <div className="formSvgDiv">
                    <CiMail className='text-slate-400' />
                </div>
                {errors.email && <p className="text-red-500" role="alert">{errors.email.message}</p>}
            </div>
            <div className="relative space-y-2 w-full">
                <label className='m-0' htmlFor="password">Password<span className='text-red-500'>*</span></label>
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
            <div className="relative space-y-2 w-full">
            <label className='m-0' htmlFor="confirmPassword">Confirm Password</label>
            <input 
              {...register("confirmPassword", { required: "" })} 
              type="confirmPassword" 
              className="inputForm " 
              placeholder="Confirm Password" 
              name='confirmPassword'
            />
            <div className="formSvgDiv">
              <LuKeyRound className='text-slate-400' />
            </div>
            {errors.confirmPassword && <p className="text-red-500" role="alert">{errors.confirmPassword.message}</p>}
          </div>
            <button type="submit" className="bg-light-blue text-white py-2 px-4 rounded w-full">Sign In</button>
        </form>

    );
}
