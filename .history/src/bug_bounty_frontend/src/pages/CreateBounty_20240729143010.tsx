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
          <p className="mt-4 mb-4 text-sm sm:text-[.85rem] font-normal text-white">
            Sponsor
          </p>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                colorPrimaryActive: "#9F9FA8",
                colorPrimary: "#9F9FA8",
                colorPrimaryHover: "#9F9FA8",
                colorText: "#fff",
              },
            }}
          >
            <Select
              placeholder="Select Funder"
              optionFilterProp="children"
              // onChange={handleGameTYpe}
              // filterOption={filterOption}
              options={[
                {
                  value: "Deonorla",
                  label: "Deonorla",
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateBounty;
