import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../../../public/assets/Images";

const navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 w-full text-white">
        <Link href="/en" className="cursor-pointer">
          <Image
            src={images.sa_logo}
            alt="Company Logo"
            className="h-[41px] w-[140px]"
          />
        </Link>
        <div className="space-x-4">
          <Link href="/en">
            <button className="text-[#346CC4] font-semibold py-2 px-4 rounded">
              Help
            </button>
          </Link>
          <Link href="/en/auth/login">
            <button classNam1e="text-[#346CC4] font-semibold py-2 px-4 rounded border border-light-blue">
              Login
            </button>
          </Link>
          <Link href="/en/auth/signup">
            <button className="bg-[#346CC4] text-white hover:bg-[#285A8A] font-semibold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
