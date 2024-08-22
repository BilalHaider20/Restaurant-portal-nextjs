"use client";
import React from "react";
import { useState } from "react";

const countryCodes = [
  { code: "+1", country: "United States", short: "US", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", short: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", short: "AU", flag: "🇦🇺" },
  { code: "+92", country: "Pakistan", short: "PK", flag: "🇵🇰" },
  { code: "+91", country: "India", short: "IN", flag: "🇮🇳" },
];
const PhoneNumber = () => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  return (
    <div className="flex mb-4 border border-[#e6e6e6] rounded-l-lg">
      <select
        className="rounded-l h-[48px] w-[80px] bg-white px-2"
        value={selectedCode}
        onChange={(e) => setSelectedCode(e.target.value)}
      >
        {countryCodes.map((country, index) => (
          <option key={index} value={country.code}>
            {country.flag} {country.short}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="e.g., +92 300 123 4567"
        className="rounded-r-lg h-[48px] w-[600px] p-2 bg-white border-gray-40 border border-r-0"
      />
    </div>
  );
};

export default PhoneNumber;