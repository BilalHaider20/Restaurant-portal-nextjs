"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import "../../styles/globals.css"
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { AiOutlineUser } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { LuKeyRound } from 'react-icons/lu'
import Link from 'next/link'
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


        <div className='flex flex-col items-center justify-center w-6/12 h-full py-32 bg-background-blue'>
            <div className='container mx-auto w-9/12 text-center'>
                <h1 className='text-3xl font-semibold'>Welcome to Bookme</h1>
                <span className='text-lg font-extralight'>Please provide details below to login your account</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' container mx-auto w-9/12 space-y-4'>
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
                <div className="space-y-2 w-full">
                    <label className='m-0' htmlFor="phone">Phone Number <span className='text-red-500'>*</span></label>
                    <PhoneNumber />
                </div>
                <div className="relative space-y-2 w-full">
                    <label className='m-0' htmlFor="password">Password <span className='text-red-500'>*</span></label>
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
                    <label className='m-0' htmlFor="confirmPassword">Confirm Password  <span className='text-red-500'>*</span></label>
                    <input
                        {...register("confirmPassword", {
                            required: true, validate: (val) => {
                                if (watch('password') !== val) {
                                    return "Your passwords do no match";
                                }
                            }
                        })}
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
            <p className='text-grey'>or continue with</p>
            <div className='flex flex-col w-9/12 mt-3 space-y-2'>
                <a className='btnSigninWith' href=""><Image src="/assets/images/google.png" width={15} height={15}></Image> Sign in with Google</a>
                <a className='btnSigninWith' href=""><Image src="/assets/images/facebook.png" width={15} height={15}></Image> Sign in with Facebook</a>
            </div>
            <p className='flex font-base items-center gap-2 mt-7 '>Already have an account?  <Link className="font-base text-light-blue text-semibold" href="/auth/login">Sign In</Link></p>
            <p className='flex font-base items-center gap-2 mt-7 '>By Signing in you agree to our  <Link className="font-base text-light-blue " href="">Terms Conditions</Link> & <Link className="font-base text-light-blue " href="">Privacy Policy</Link></p>
        </div>

    );
}
