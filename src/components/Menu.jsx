"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import FlightBlue from '/public/assets/images/flightBlue.svg';
import FlightDark from '/public/assets/images/flightDark.svg';
import MosqueBlue from '/public/assets/images/mosqueBlue.svg';
import MosqueDark from '/public/assets/images/mosqueDark.svg';

const Menu = () => {
  const data = [
    { text: 'Flights', iconActive: FlightBlue, iconInactive: FlightDark },
    { text: 'Visit Saudi', iconActive: MosqueBlue, iconInactive: MosqueDark },
  ];
  
  const [current, setCurrent] = useState('Flights');

  return (
    <ul>
      {data.map((e, index) => (
        <li className={`${current === e.text ? `text-primary-blue bg-[#E1EAF780] dark:bg-slate-400 border border-primary-blue` : ``} cursor-pointer rounded-lg flex gap-5 items-center py-2 px-3 mt-2 `} key={index} onClick={() => setCurrent(e.text)}>
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
  );
};

export default Menu;
