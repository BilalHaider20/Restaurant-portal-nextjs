import React, { useState } from 'react';
import ReactCountryFlag from "react-country-flag";

const LangDropdown = () => {
    const options = [
        { lang: "English", code: "en", iconCode: "GB" }, // Corrected the UK country code to GB
        { lang: "Arabic", code: "ar", iconCode: "SA" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative flex flex-row">
            <button
                className=" py-2 px-3 rounded-md text-left text-grey-text  text-base font-light flex justify-between items-center"
                onClick={toggleDropdown}
            >
                <ReactCountryFlag 
                    countryCode={selectedOption.iconCode} 
                    style={{ width: '20px', height: '15px', marginRight: '8px' }} 
                    svg 
                />
                {selectedOption.lang}
                <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="py-2 px-4 hover:bg-gray-100 text-light-blue font-medium text-base cursor-pointer flex items-center"
                            onClick={() => handleOptionClick(option)}
                        >
                            <ReactCountryFlag 
                                countryCode={option.iconCode} 
                                style={{ width: '20px', height: '15px', marginRight: '8px' }} 
                                svg 
                            />
                            {option.lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LangDropdown;
