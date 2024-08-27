import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { GrLocation } from "react-icons/gr";
import images from '/public/assets/images/index'
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch, CiCalendar } from "react-icons/ci";
import { LuMoon } from "react-icons/lu";
import { useTranslations } from 'next-intl';

const FlightForm = () => {
    const [stopoverForm, setStopoverForm] = useState(false)
    const t = useTranslations('Flights.form');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={onSubmit} className='mt-5'>
            <div className='flex gap-1 items-center'>
                <div className="space-y-2  w-full relative">
                    <div className="flightSvgDiv">
                        <Image src={images.takeoff} alt="icon"></Image>
                    </div>
                    <input
                        {...register('departure', { required: "This is a required field" })}
                        type="text"
                        className="flightInput "
                        placeholder="Lahore - LHE"
                        name='departure'
                    />
                    {errors.departure && <p className="text-red-500" role="alert">{errors.departure.message}</p>}
                </div>
                <div className='relative mt-[6px] space-y-2 w-[50px] bg-[#FFFFFF1A] border-[#6A91CF] border m-0 py-4 h-11 px-4 blockrounded-lg text-base rounded-lg'>
                    <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Image src={images.swap_arrow} alt='icon'></Image>
                    </div>
                </div>
                <div className="space-y-2 w-full relative">
                    <div className="flightSvgDiv">
                        <Image src={images.arrival} alt="icon"></Image>
                    </div>
                    <input
                        {...register('arrival', { required: "This is a required field" })}
                        type="text"
                        className="flightInput "
                        placeholder="Arrival"
                        name='arrival'
                    />
                    {errors.arrival && <p className="text-red-500" role="alert">{errors.arrival.message}</p>}
                </div>
            </div>
            <div className='flex items-center justify-between mt-3 mb-2'>
                <div className=''>
                    <button type="button" onClick={() => setStopoverForm(true)} className='flex items-center gap-1'>
                        {!stopoverForm && <span className=' border border-white rounded-full  w-[20px] h-[20px] inline-flex items-center justify-center text-sm '><AiOutlinePlus /> </span>}
                        <span>{t('addStopover')}</span>
                    </button>
                </div>
                <div>
                    {
                        stopoverForm ? <button onClick={(e) => {
                            e.preventDefault();
                            setStopoverForm(false);
                        }} type="button" className='border border-white rounded-full  w-[20px] h-[20px] inline-flex items-center justify-center text-sm'><RxCross2 /> </button>
                            : <button className='flex items-center justify-center gap-2 bg-[#E1EAF7] text-sm text-primary-blue border  p-[0.75rem] rounded-lg font-semibold'><CiSearch className='text-2xl' /> {t("search")}</button>
                    }
                </div>
            </div>
            {stopoverForm && <div className='flex items-center gap-1'>
                <div className="space-y-2 w-full relative">
                    <div className="flightSvgDiv">
                        <Image src={images.pin} alt='icon'></Image>
                    </div>
                    <input
                        {...register('city', { required: "This is a required field" })}
                        type="text"
                        className="flightInput "
                        placeholder="Select Preffered city"
                        name='city'
                    />
                    {errors.city && <p className="text-red-500" role="alert">{errors.city.message}</p>}
                </div>
                <div className="space-y-2 w-full relative">
                    <div className="flightSvgDiv moon">
                        <Image src={images.moon} alt='icon'></Image>
                    </div>
                    <input
                        {...register('days', { required: "This is a required field" })}
                        type="text"
                        className="flightInput "
                        placeholder="No. of Days"
                        name='days'
                    />
                    {errors.days && <p className="text-red-500" role="alert">{errors.days.message}</p>}
                </div>
                <button className='flex items-center justify-center gap-2 bg-[#E1EAF7] text-sm text-primary-blue border p-2 rounded-lg mt-2'>
                    <CiSearch className='text-2xl' />
                </button>
            </div>}
        </form>
    )
}

export default FlightForm