"use client"
import { useState } from 'react'
import TripSelect from './TripSelect'
import PassengerDropdown from './PassengerDropdown'
import ClassDropdown from "./ClassDropdown"
import FlightForm from "./FlightForm"
import { useLocale } from "next-intl"
import { useTranslations } from 'next-intl'

const SearchFlights = () => {
    const [activeSelection, setActiveSelection] = useState('One-Way')
    const handleToggleChange = (selection) => {
        setActiveSelection(t(selection));
    };
    const t = useTranslations('Flights');
    return (
        <div className={`p-10 bg-primary-blue text-white w-full `}>
            <div className='mb-5'>
                <h2 className={`text-2xl font-semibold `}>{t('title')}</h2>
                <span className={`text-base font-light `}>{t('description')}</span>
            </div>
            <div className={`flex justify-between `}>
                <TripSelect onChange={handleToggleChange} />
                <div className={`flex gap-1 `}>
                    <PassengerDropdown />
                    <ClassDropdown />
                </div>
            </div>
            <FlightForm />
        </div>
    )
}

export default SearchFlights