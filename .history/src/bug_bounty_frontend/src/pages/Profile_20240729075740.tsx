import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Profile = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <div className=" mt-[5rem] flex flex-col w-full mb-4">
        <div className="flex relative bg-gradient-to-r from-linear-1/40 to bg-linear-2/30 w-full h-[10rem] rounded-t-[1.5rem] mt-4 ">
          <div className="absolute bottom-[-4rem] left-4 flex cursor-pointer border-[4px] border-solid border-color-7 rounded-full ">
            <img
              src={`avatar.jpg`}
              className="rounded-full w-[8rem] h-[8rem] "
              alt=""
            />
          </div>
        </div>
        <div className="mx-4  sm:mx-8 flex flex-col">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col mt-[4.5rem] ">
              <h3 className="text-white text-2xl font-bold">Deon Orla</h3>
              <p className=" my-2 text-sm text-color-7 ">Software Engineer</p>
              <p className=" my-2 text-[1rem] text-color-7 ">Lagos, Nigeria</p>
            </div>
            <div className="flex flex-col mt-[-5rem]">
              <h3 className="text-white text-sm font-bold">Current role</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
