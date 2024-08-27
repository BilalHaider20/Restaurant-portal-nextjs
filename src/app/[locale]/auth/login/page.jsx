"use client"
import { useRouter } from 'next/navigation'
import '../../../styles/globals.css'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { LuKeyRound } from "react-icons/lu";
import PhoneInput from 'react-phone-input-2'
import Link from 'next/link'
import 'react-phone-input-2/lib/style.css'
import {useTranslations} from 'next-intl';

export default function Page() {
  const router = useRouter();
  const t = useTranslations('SignIn');

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

    <div className='flex flex-col items-center justify-center w-full  h-full py-20 bg-background-blue md:w-6/12 '>
      <div className='container mx-auto w-9/12 text-center'>
        {/* <h1 className='text-3xl font-semibold  text-heading-grey tracking-tighter 	'>Welcome to Bookme</h1> */}
        <h1 className='text-3xl font-semibold  text-heading-grey tracking-tighter 	'>{t('title')}</h1>
        <span className='text-lg font-extralight text-heading-grey tracking-tighter '>Please provide details below to login your account</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='formAuth'>
        <div className="space-y-2 w-full">
          <label className='m-0' htmlFor="phone">Phone Number </label>
          <PhoneInput country='pk' className="inputForm" />
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

          <Link className="text-primary-blue font-semibold" href="/forgot">Forgot password?</Link>
        </div>

        <button type="submit" className="bg-light-blue text-white py-3 px-4 rounded w-full">Sign In</button>
      </form>
      <p className='text-grey '>or continue with</p>
      <div className='btnAuth'>
        <a className='btnSigninWith' href=""><Image src="/assets/images/google.png" width={15} height={15} alt='google icon'></Image> Sign in with Google</a>
        <a className='btnSigninWith' href=""><Image src="/assets/images/facebook.png" width={15} height={15} alt='fb icon'></Image> Sign in with Facebook</a>
      </div>
      <p className='flex font-base items-center gap-2 mt-3'>Don’t Have an Account? <Link className="font-base text-light-blue text-semibold" href="/en/auth/signup">Sign Up</Link></p>
    </div>



  );
}
