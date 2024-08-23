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
    <div className="relative bg-[#FFFFFF1A] py-2 px-4 rounded-full text-white w-fit flex  items-center">
      <div className="flex gap-7 text-sm font-light ">
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
        className="absolute z-10 bottom-0 w-[93px] h-full bg-[#FFFFFF33] rounded-full flex items-center justify-center pointer-events-none transition-left duration-300 ease-in-out"
        style={{ left: `calc(${active === 'One-Way' ? '0.2rem' : active === 'Round-Way' ? '100px' : '200px'} - 0.3rem)` }}
      >
      </div>
    </div>
  );
}
