import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Profile = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <div className="mx-4  sm:mx-8 mt-[5rem] flex flex-col w-full mb-4">
        <div className="flex relative bg-gradient-to-r from-linear-1/30 to bg-linear-2/30 w-full h-[20rem]"></div>
      </div>
    </div>
  );
};

export default Profile;
