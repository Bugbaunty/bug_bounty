import React, { useRef, useState } from "react";
import Button from "../utils/Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { IoBug } from "react-icons/io5";

const Header = () => {
  const parallaxRef = useRef(null);
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50  border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
      <div className="flex justify-between items-center py-5 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <p className="block w-[12rem] text-color-7 font-extrabold xl:mr-8">
          Bug
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            Bounty
          </span>
        </p>
        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
      {openNavigation && (
        <div className="absolute top-[4rem] w-full h-screen bg-linear-3 ">
          <div className="mt-16 flex flex-col items-center gap-16">
            <div className="flex">
              <IoBug className="w-6 h-6 text-color-7" />
              <p className="text-[1rem] text-color-7 ml-4">Bounties</p>
            </div>
            <div className="flex justify-start">
              <IoBug className="w-6 h-6 text-color-7" />
              <p className="text-[1rem] text-color-7 ml-4">Profile</p>
            </div>
          </div>
          <div className="h-full flex justify-center items-center">
            <BackgroundCircles parallaxRef={parallaxRef} />
          </div>
        </div>
      )}
      <ButtonGradient />
    </div>
  );
};

export default Header;
