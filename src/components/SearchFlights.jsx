"use client"
import {useState} from 'react'
import TripSelect from './TripSelect'

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
            <TripSelect onChange={handleToggleChange} />
        </div>
    )
}

export default SearchFlights