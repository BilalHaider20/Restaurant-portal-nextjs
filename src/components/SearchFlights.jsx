"use client"
import { useState } from 'react'
import TripSelect from './TripSelect'
import PassengerDropdown from './PassengerDropdown'
import ClassDropdown from "./ClassDropdown"
import FlightForm from "./FlightForm"


const SearchFlights = () => {
    const [activeSelection, setActiveSelection] = useState('One-Way')
    const handleToggleChange = (selection) => {
        setActiveSelection(selection);
    };
    
    return (
        <div className='p-10 bg-primary-blue text-white w-full'>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'>Search for Flights</h2>
                <span className='text-base font-light'>Find the best deals for your air travel</span>
            </div>
            <div className="flex justify-between">
                <TripSelect onChange={handleToggleChange} />
                <div className='flex gap-1'>
                    <PassengerDropdown />
                    <ClassDropdown />
                </div>
            </div>
            <FlightForm />

        </div>
    )
}

export default SearchFlights