import React, { useEffect, useRef, useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import {
  ConfigProvider,
  DatePicker,
  Input,
  InputRef,
  Select,
  Tag,
  theme,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Editor from "../components/Texteditor/Editor";

const CreateBounty = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState(["Tag 1", "Tag 2"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [bountyDetails, setBountyDetails] = useState<string>("");
  const inputRef = useRef<InputRef>(null);

  //  TAG FUNCTIONS
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const forMap = (tag: string) => (
    <span key={tag} style={{ display: "inline-block" }}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Tag
          closable
          onClose={(e) => {
            e.preventDefault();
            handleClose(tag);
          }}
        >
          {tag}
        </Tag>
      </ConfigProvider>
    </span>
  );

  const tagChild = tags.map(forMap);

  const tagPlusStyle: React.CSSProperties = {
    borderStyle: "dashed",
  };

  // Details

  const handleContent = (rules: any) => {
    setBountyDetails(rules);
  };

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
              Title
            </p>
            <div className=" my-4 items-center pr-8 pl-2 h-[2rem] border-[#595959] hover:border-color-7  bg-[#141414] border-solid border rounded-[6px] flex">
              <input
                className="border-none w-full text-white pl-0 focus:outline-none placeholder:text-[0.8rem] focus:ring-0 placeholder:text-[#595959] appearance-none text-[0.9rem] bg-[#141414] py-[.1rem]"
                placeholder="Summarize bounty title"
                type="text"
                // onChange={onTitleChange}
                // value={title}
              />
            </div>
          </div>
          <div className="">
            <>
              <div style={{ marginBottom: 16 }}>{tagChild}</div>
              {inputVisible ? (
                <ConfigProvider
                  theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                      colorPrimary: "#9F9FA8",
                    },
                  }}
                >
                  <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                </ConfigProvider>
              ) : (
                <ConfigProvider
                  theme={{
                    algorithm: theme.darkAlgorithm,
                  }}
                >
                  <Tag onClick={showInput} style={tagPlusStyle}>
                    <PlusOutlined /> New Tag
                  </Tag>
                </ConfigProvider>
              )}
            </>
          </div>
          <div className="flex flex-row gap-8 mt-4 items-center ">
            <div className="flex flex-col w-full">
              <p className=" mb-4 text-sm sm:text-[.85rem] mt-[.8rem] font-normal text-white">
                Start Date
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
                <DatePicker
                // disabledDate={disabledDate}
                // onChange={onDateChange}
                />
              </ConfigProvider>
            </div>
            <div className="flex flex-col w-full mt-4">
              <p className=" mb-4 mt-4 lg:mt-0  text-sm sm:text-[.85rem] font-normal text-white">
                End Date
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
                <DatePicker
                // disabledDate={disabledDate}
                // onChange={onEndDateChange}
                />
              </ConfigProvider>
            </div>
          </div>
          {/* Bounty Statement */}
          <div className="flex-col flex mt-4 ">
            <p className="text-sm sm:text-[.85rem] mt-[.8rem] font-normal text-white">
              Details
            </p>
            <Editor handleContent={handleContent} content={bountyDetails} />
          </div>
          <div className="mt-8 mb-4 border border-solid border-[#2E3438] w-full" />
          <p className="text-[0.8rem] mt-4 mb-[1rem] font-semibold sm:text-base  bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            Funder's Details
          </p>

          <div className="flex flex-col w-full">
            <p className="text-sm sm:text-[.85rem] mt-[.8rem] mb-4 font-normal text-white">
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
                placeholder="Funder"
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
          <div className="flex flex-row gap-8 items-center ">
            <div className="flex flex-col w-[50%]">
              <p className="mb-4 text-sm sm:text-[.85rem] mt-[1.5rem] font-normal text-white">
                Sponsor's contact info
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
                  placeholder="Select a method"
                  optionFilterProp="children"
                  // onChange={handleTournamentTypeChange}
                  // filterOption={filterOption1}
                  options={[
                    {
                      value: "Email",
                      label: "email",
                    },
                    {
                      value: "Telegram",
                      label: "telegram",
                    },
                    {
                      value: "Discord",
                      label: "discord",
                    },
                  ]}
                />
              </ConfigProvider>
            </div>
            <div className=" mt-[3.7rem] items-center pr-8 pl-2 h-[2rem] border-[#595959] hover:border-color-7  bg-[#141414] border-solid border w-[50%] rounded-[6px] flex">
              <input
                className="border-none w-full text-white pl-0 focus:outline-none placeholder:text-[0.8rem] focus:ring-0 placeholder:text-[#595959] appearance-none text-[0.9rem] bg-[#141414] py-[.1rem]"
                placeholder="Input contact address"
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

export default CreateBounty;
