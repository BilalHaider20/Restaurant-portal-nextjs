import { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import images from "/public/assets/images/index"
import Image from 'next/image';
import { useAppSelector } from '../lib/hooks';
import { useTranslations } from 'next-intl';

export default function PassengerDropdown() {
    const { lang }= useAppSelector((state) => state.lang);
    const t = useTranslations('Flights.ClassDropdown');
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    const [open, setOpen] = useState(false)
    const [seat, setSeat] = useState( t("economy") )


    const options = [
        { seat: t('economy') , iconActive: images.economy_blue, iconInactive: images.economy_dark },
        { seat: t("business"), iconActive: images.business_blue, iconInactive: images.business_dark },
        { seat: t("first"), iconActive: images.first_class_blue, iconInactive: images.first_class_dark }
    ]

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex justify-center item-center gap-2 text-white py-2 px-4 rounded">
                {seat}
                <svg
                    className={`w-4 h-4 mt-1 ml-1  transform transition-transform ${open ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            {open && (
                <div className={`absolute flex flex-col  z-10 w-[430px]  ${ dir === 'rtl' ? "left-0" : "right-0" }  mt-1 bg-white rounded-md  p-3`}>
                    <h3 className='font-medium text-base text-black'>{t('selectClass')}</h3>
                    <div className='flex justify-between gap-1'>
                        {options.map((e, index) => (
                            <div onClick={() => setSeat(e.seat)} className={` flex-col w-[130px]  cursor-pointer rounded-lg flex items-center py-3 px-3 mt-2  ${seat === e.seat? ` text-primary-blue bg-[#E1EAF780] border border-primary-blue` : `text-grey-text border border-divider-color`}`} key={index} >
                                <span>
                                    <Image
                                        src={seat === e.seat ? e.iconActive : e.iconInactive}
                                        alt={`${e.seat} icon`}
                                    />
                                </span>
                                <span className={`text-sm ${seat === e.seat ? `text-primary-blue` : `text-grey-text`}`}>{e.seat} {lang === 'en' ? 'Class' : ''} </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
