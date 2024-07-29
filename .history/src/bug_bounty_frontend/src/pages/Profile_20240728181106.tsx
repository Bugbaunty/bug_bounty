import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Profile = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <div className=" mt-[5rem] flex flex-col w-full mb-4">
        <div className="flex relative bg-gradient-to-r from-linear-1/40 to bg-linear-2/30 w-full h-[10rem] border-n-1/15">
          <div className="absolute bottom-[-4rem] left-4 flex cursor-pointer border-[4px] border-solid border-color-7 rounded-full ">
            <img
              src={`avatar.jpg`}
              className="rounded-full w-[8rem] h-[8rem] "
              alt=""
            />
          </div>
        </div>
        <div className="mx-4  sm:mx-8 flex flex-col"></div>
      </div>
    </div>
  );
};

export default Profile;
