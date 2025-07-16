import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white ">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col  gap-2 sm:gap-4">
          <img
            src="./header-logo.png"
            alt="logo"
            className="w-24 sm:w-32 aspect-auto"
          />
          <span className="text-xs sm:text-xs text-slate-700 text-center sm:text-left max-w-xs">
            Advanced Battery Design and AI Digital Twin
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center uppercase">
          Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
