 "use client";
import images from "../../../public/assets/Images";
import { useState } from "react";
import Image from "next/image";
import PhoneNumber from "../../components/PhoneNumber";

const ForgotPassword = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const handleGetCode = () => {
    setIsCodeSent(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex items-center justify-between p-4 w-full text-white">
        <Image
          src={images.sa_logo}
          alt="Company Logo"
          className="h-[41px] w-[140px]"
        />
        <div className="space-x-4">
          <button className="text-[#346CC4] font-semibold py-2 px-4 rounded">
            Help
          </button>
          <button className="text-[#346CC4] font-semibold py-2 px-4 rounded border border-light-blue">
            Login
          </button>
          <button className="bg-[#346CC4] text-white hover:bg-[#285A8A] font-semibold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="flex flex-grow flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center p-8 w-full md:w-1/2 bg-[#F6F9FD]">
          {isCodeSent && (
            <div className="flex items-center p-4 mb-4 bg-[#EBF5F0] border-l-[5px] border-green-500 rounded-lg">
              <div className="flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9995 21.9999C17.5224 21.9999 21.9995 17.5227 21.9995 11.9999C21.9995 6.47703 17.5224 1.99988 11.9995 1.99988C6.47666 1.99988 1.99951 6.47703 1.99951 11.9999C1.99951 17.5227 6.47666 21.9999 11.9995 21.9999Z"
                    stroke="#2F9461"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7.5H12.015"
                    stroke="#2F9461"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 10.5V16.5"
                    stroke="#2F9461"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-black">
                  A code has been sent to your phone number successfully.
                </p>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>

          <p className="text-center text-[#808080] mb-4">
            Please Provide Your Registered Phone Number. We will Send You a Code{" "}
            <br /> to Reset Your Password.
          </p>

          <div className="w-full max-w-lg">
            <label className="mb-1 text-left w-full text-lg">
              Phone Number <span className="text-red-600">*</span>
            </label>

            <PhoneNumber />

            <button
              onClick={handleGetCode}
              className="bg-[#346CC4] text-white hover:bg-[#285A8A] font-semibold w-full h-[48px] rounded mb-2"
            >
              Get Code
            </button>

            <button className="bg-transparent text-[#346CC4] font-semibold w-full h-[48px] rounded">
              Back to Login
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <Image
            src={images.forgot_password1}
            alt="Forgot Password"
            className="w-full h-[300px] md:h-[664px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
