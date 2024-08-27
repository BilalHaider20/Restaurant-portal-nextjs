import React from 'react';
import Image from 'next/image';
import images from "../../public/assets/Images/index";
import Menu from '../components/Menu'

const Sidebar = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white block border-r-0 h-[90vh] w-[289px] py-[12px] px-[20px] flex-col align-top flex-shrink-0 gap-6 '>
      <Menu  /> 
      <div className='w-full h-[1px] bg-divider-grey my-2'></div>

      <div className='flex flex-col rounded-lg my-5 space-y-2 px-3 py-2 p-2 border border-[#C3D5EF]'>
        <div className='flex gap-2 text-primary-blue'>
          <Image src={images.wallet_icon} alt='wallet logo' width={24} height={24} />
          <span>Wallet</span>
        </div>
        <div className='flex justify-between items-center text-heading-grey'>
          <span>PKR 500</span>
          <div className="bg-divider-grey h-[25px] w-[1px]"></div>

          <span className='flex gap-1 text-heading-grey' ><Image src={images.coin} width={20} height={20} alt='coin logo' /> 550</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;