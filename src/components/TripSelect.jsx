// components/ToggleButtons.js
import { useState } from 'react';

export default function ToggleButtons({ onChange }) {
  const [active, setActive] = useState('One-Way');

  const handleClick = (selection) => {
    setActive(selection);
    if (onChange) {
      onChange(selection);
    }
  };
  
  return (
    <div className="relative bg-[#FFFFFF1A] py-1 px-3 rounded-full text-white w-fit flex items-center">
      <div className="flex space-x-4 text-sm font-base ">
        <button
          onClick={() => handleClick('One-Way')}
        >
          One-Way
        </button>
        <button
          onClick={() => handleClick('Round-Way')}
        >
          Round-Way
        </button>
        <button
        //   className={`tripToggle ${active === 'Multi-City' ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => handleClick('Multi-City')}
        >
          Multi-City
        </button>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ left: `calc(${active === 'One-Way' ? '0%' : active === 'Round-Way' ? '33.33%' : '66.66%'} - 0.5rem)` }}
      >
        <div className="w-1/3 h-1/3 bg-blue-500 rounded-full transition-transform duration-300" />
      </div>
    </div>
  );
}
