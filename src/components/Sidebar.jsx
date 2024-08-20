import React from 'react';
import Image from 'next/image';
import images from '../../public/assets/Images';

const SidebarData = [
  { text: 'Flights', icon: <Image src={images.flight_icon} alt="Flight icon" /> },
  { text: 'Visit Saudi', icon: <Image src={images.mosque_icon} alt='Moqsue'  /> },
];

const Sidebar = () => {
  return (
    <div className='border h-[90vh] w-[289px] py-[12px] px-[20px] flex-col align-top flex-shrink-0 gap-6 '>
      <ul>
        {SidebarData.map((item, index) => (
          <li key={index} className='flex items-center justify-start py-2 px-3 gap-3 bg-[#FFFFFF] text-[#808080] active:text-primary-blue active:bg-[#E1EAF780] border border-transparent active:border-primary-blue rounded-md'>
            <span>{item.icon}</span>
            <span className=''>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;