import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Profile = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <div className=" mt-[5rem] flex flex-col w-full mb-4">
        <div className="flex relative bg-gradient-to-r from-linear-1/30 to bg-linear-2/30 w-full h-[20rem] border-n-1">
          <div className="absolute bottom-[-2rem] flex cursor-pointer">
            <img
              src={`avatar.jpg`}
              className="rounded-full w-[5rem] h-[5rem] "
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
