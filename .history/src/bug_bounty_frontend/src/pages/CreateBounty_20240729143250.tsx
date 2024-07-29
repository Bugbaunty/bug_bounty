import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { ConfigProvider, Select, theme } from "antd";

const CreateBounty = () => {
  return (
    <div className="flex ">
      <Header />
      <Sidebar />
      <div className="mt-[5rem] flex flex-col w-full mb-4 mx-4 lg:mx-8">
        <h1 className={` text-[1rem] mb-6 text-center   mt-8`}>
          {" "}
          Create a
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            {" "}
            Bug Bounty
          </span>
        </h1>
        <div className="flex mt-4 mx-4 flex-col">
          <p className="text-[0.8rem] mt-4 mb-[1rem] font-semibold sm:text-base  bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            Bounty Details
          </p>
          <div className="flex-col  flex mt-3">
            <p className="text-sm sm:text-[.85rem] mt-[.8rem] font-normal text-white">
              Tournament Name
            </p>
            <div className=" my-4 items-center pr-8 pl-2 h-[2rem] border-[#595959] hover:border-primary-second  bg-[#141414] border-solid border rounded-[6px] flex">
              <input
                className="border-none w-full text-white pl-0 focus:outline-none placeholder:text-[0.8rem] focus:ring-0 placeholder:text-[#595959] appearance-none text-[0.9rem] bg-[#141414] py-[.1rem]"
                placeholder="Tournament name"
                type="text"
                // onChange={onTitleChange}
                // value={title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <ConfigProvider
  theme={{
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimaryActive: "#9F9FA8",
      colorPrimary: "#9F9FA8",
      colorPrimaryHover: "#9F9FA8",
      colorText: "#fff",
    },
  }}
></ConfigProvider>; */
}

export default CreateBounty;
