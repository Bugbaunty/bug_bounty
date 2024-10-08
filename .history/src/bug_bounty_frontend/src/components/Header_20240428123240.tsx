import React from "react";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6  ">
      <div className="flex items-center py-5 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          Bug Shield
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                className={`block relative font-code text-sm lg:font-semibold  text-color-7 hover:text-n-1 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6  lg:mr-0.25 lg:text-xs ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 `}
                key={item.id}
                href={item.url}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-color-7 transistion-colors hover:text-n-1 lg:block"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
