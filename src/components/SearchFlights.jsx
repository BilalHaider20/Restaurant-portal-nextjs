"use client"
import { useState } from 'react'
import TripSelect from './TripSelect'
import PassengerDropdown from './PassengerDropdown'
import ClassDropdown from "./ClassDropdown"
import FlightForm from "./FlightForm"
import { useLocale } from "next-intl"

const SearchFlights = () => {
    const [activeSelection, setActiveSelection] = useState('One-Way')
    const handleToggleChange = (selection) => {
        setActiveSelection(selection);
    };
    const locale = useLocale()

    return (
        <div className={`p-10 bg-primary-blue text-white w-full ${locale === "ar" ? "text-right" : ""}`}>
            <div className='mb-5'>
                <h2 className={`text-2xl font-semibold ${locale === "ar" ? "text-right" : ""}`}>Search for Flights</h2>
                <span className={`text-base font-light ${locale === "ar" ? "text-right" : ""}`}>Find the best deals for your air travel</span>
            </div>
            <div className={`flex justify-between ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                <TripSelect onChange={handleToggleChange} />
                <div className={`flex gap-1 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                    <PassengerDropdown />
                    <ClassDropdown />
                </div>
            </div>
            <FlightForm />
        </div>
    )
}

export default SearchFlights