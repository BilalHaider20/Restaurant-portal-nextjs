import { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { useAppSelector } from '../lib/hooks';
import { useTranslations } from 'next-intl';

export default function PassengerDropdown() {
    const { lang }= useAppSelector((state) => state.lang);
    const [open, setOpen] = useState(false)
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    const t = useTranslations('Flights.PassengerDropdown');
    const [passengers, setPassengers] = useState({
        adults: 1,
        children: 0,
        infants: 0,
    });

    const handleIncrease = (type) => {
        setPassengers((prev) => ({
            ...prev,
            [type]: prev[type] + 1,
        }));
    };

    const handleDecrease = (type) => {
        setPassengers((prev) => ({
            ...prev,
            [type]: prev[type] > 0 ? prev[type] - 1 : 0,
        }));
    };

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex justify-center item-center gap-2 text-white py-2 ">
                <AiOutlineUser className='text-2xl ' />
                {passengers.adults} {t('adult')}
                {passengers.children > 0 && `, ${passengers.children} ${t('children')}`}
                {passengers.infants > 0 && `, ${passengers.infants} ${t('infants')}`}
                <svg
                    className={`w-4 h-4 mt-1 ml-1 w-fit transform transition-transform ${open ? 'rotate-180' : ''
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
            {open && (<div className={`absolute text-black ${ dir === 'rtl' ? "left-0" : "right-0" }  mt-2 z-10 w-[400px] bg-white shadow-lg rounded-lg py-4 px-6`}>
                <div className="pgerDropdownDiv">
                    <span>{t('adult')} <span className='text-grey-text'>( {t("adultAge")} )</span></span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleDecrease('adults')}
                            className="pgerDropdownBtn"
                        >
                            -
                        </button>
                        <span className='mx-2 w-3 align-center '>{passengers.adults}</span>
                        <button
                            onClick={() => handleIncrease('adults')}
                            className="pgerDropdownBtn"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="pgerDropdownDiv">
                    <span>{t('children')} <span className='text-grey-text'>( {t("childrenAge")} )</span></span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleDecrease('children')}
                            className="pgerDropdownBtn"
                        >
                            -
                        </button>
                        <span className='mx-2 w-3 align-center'>{passengers.children}</span>
                        <button
                            onClick={() => handleIncrease('children')}
                            className="pgerDropdownBtn"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="pgerDropdownDiv">
                    <span>{t('infants')} <span className='text-grey-text'>( {t("infantsAge")} )</span></span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleDecrease('infants')}
                            className="pgerDropdownBtn"
                        >
                            -
                        </button>
                        <span className='mx-2 w-3 align-center'>{passengers.infants}</span>
                        <button
                            onClick={() => handleIncrease('infants')}
                            className="pgerDropdownBtn"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    );
}
