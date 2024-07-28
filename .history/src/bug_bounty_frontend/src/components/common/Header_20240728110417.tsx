import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50  border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
      <div className="flex justify-between items-center py-5 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <p className="block w-[12rem] text-color-7 font-extrabold xl:mr-8">
          Bug
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            Bounty
          </span>
        </p>
        <IoMenu className="w-4 h-4 text-color-7" />
      </div>
    </div>
  );
};

export default Header;
