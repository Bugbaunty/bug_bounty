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
        <h1 className={` text-[1rem] mb-6   mt-8`}>
          {" "}
          Create a
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            {" "}
            Bug Bounty
          </span>
        </h1>
        <div className="flex mt-4 mx-4 flex-col">
          <p className=" mb-4 text-sm sm:text-[.85rem] font-normal text-white">
            Sponsor
          </p>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                colorPrimaryActive: "#F6B8FC",
                colorPrimary: "#F6B8FC",
                colorPrimaryHover: "#F6B8FC",
                colorText: "#fff",
              },
            }}
          >
            <Select
              placeholder="Select game play mode"
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
