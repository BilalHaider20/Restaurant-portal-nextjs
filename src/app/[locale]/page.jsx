"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Bookmelogo.png'
import { useTranslations } from 'next-intl'

const Page = () => {
const t = useTranslations('Home');

  const router =useRouter();
  return (
    <div className='flex flex-col align-center justify-center mt-36 mx-auto w-[50%] rounded-md border p-10 bg-slate-100'>
      <Image src={logo} width={200} height={200} />
      <h1 className='text-2xl my-5' >{t('title')}</h1>
      <button onClick={()=>router.push('/signin')} className='px-3 py-1 bg-blue-700 rounded-md text-white max-w-32'>{t('button')}</button>
    </div>
  )
}

export default Page