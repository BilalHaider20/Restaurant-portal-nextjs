import React, { useState } from 'react';
import Image from 'next/image';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
    <div className="relative flex">
      <button
        className=" py-2 px-3 w-fit rounded-md text-left text-light-blue text-base font-base flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <svg
          className={`w-4 h-4 ml-1 w-fit transform transition-transform ${isOpen ? 'rotate-180' : ''
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
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md ">
          {options.map((option, index) => (
            <li className={`${current === e.text ? `text-primary-blue bg-[#E1EAF780] border border-primary-blue` : ``} cursor-pointer rounded-lg flex gap-5 items-center py-2 px-3 mt-2 `} key={index} onClick={() => setCurrent(e.text)}>
              <span>
                <Image
                  src={current === e.text ? e.iconActive : e.iconInactive}
                  alt={`${e.text} icon`}
                  width={20}
                  height={20}
                />
              </span>
              <span className={`${current === e.text ? `text-primary-blue` : `text-grey-text`}`}>{e.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
