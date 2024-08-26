import { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";

export default function PassengerDropdown() {
    const [open, setOpen] = useState(false)
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
                {passengers.adults} Adult
                {passengers.children > 0 && `, ${passengers.children} Child`}
                {passengers.infants > 0 && `, ${passengers.infants} Infant`}
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
            {open && (<div className="absolute text-black right-0 mt-2 z-10 w-[400px] bg-white shadow-lg rounded-lg py-4 px-6">
                <div className="pgerDropdownDiv">
                    <span>Adults <span className='text-grey-text'>( 12 years & above )</span></span>
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
                    <span>Children <span className='text-grey-text'>( 2-12 Years )</span></span>
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
                    <span>Infants <span className='text-grey-text'>( Under 2 Years )</span></span>
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
