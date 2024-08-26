import React, { useState } from 'react';

const Dropdown = ({options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    console.log(option);
    setSelectedOption(option);
    setIsOpen(false);
  };
  

  return (
    <div className="relative">
      <button
        className=" py-2 px-3 rounded-md text-left text-light-blue text-base font-medium flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <svg
          className={`w-4 h-4 ml-1 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
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
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-100 text-light-blue font-medium text-base cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
