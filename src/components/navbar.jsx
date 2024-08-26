"use client";
import React from "react";
import images from "../../public/assets/Images/index";
import Dropdown from "./DropDown.jsx";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ toggleSidebar }) => {
  const options = ["PKR", "EUR", "USD", "SAR"];
  return (
    <>
      <div className=" bg-white px-[15px] py-[20px] w-full flex sm:items-center sm:gap-4">
        <div className="w-full sm:w-2/3 h-10 flex justify-start gap-4 sm:gap-8">
          <Image
            className="cursor-pointer"
            src={images.menu_icon}
            onClick={toggleSidebar}
            alt="menu_icon"
          />
          <Link href="/en" className="cursor-pointer">
            <Image src={images.logo} />
          </Link>
        </div>
        <div className="md:flex justify-center gap-3 w-[33.33%] h-10 align-center hidden ">
          <p className="text-base font-medium text-[#346CC4] my-auto ">Help</p>
          <Dropdown options={options} />
          <button
            type="button"
            className="py-3 px-7 inline-flex cursor-pointer items-center  text-base font-medium rounded-lg border border-[#346CC4] text-[#346CC4]  disabled:pointer-events-none"
          >
            <Link href="/en/auth/login">Login</Link>
          </button>
          <button
            type="button"
            className="min-w-26 py-2 px-6 inline-flex items-center text-[14px] font-medium rounded-lg bg-[#346CC4] text-white disabled:pointer-events-none"
          >
            <Link href="/en/auth/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
