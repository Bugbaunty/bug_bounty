import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Profile = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <div className="mx-4  sm:mx-8 mt-[5rem] flex flex-col w-full mb-4"></div>
    </div>
  );
};

export default Profile;
