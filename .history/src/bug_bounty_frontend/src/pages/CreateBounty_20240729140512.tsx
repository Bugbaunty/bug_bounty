import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const CreateBounty = () => {
  return (
    <div className="flex ">
      <Header />
      <Sidebar />
      <div className="mt-[5rem] flex flex-col w-full mb-4">
        <h1 className={` text-[1.5rem] mb-6   mt-8`}>
          {" "}
          Create a
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            {" "}
            Bug Bounty
          </span>
        </h1>
      </div>
    </div>
  );
};

export default CreateBounty;
