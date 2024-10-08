import React from "react";
import { GlareCard } from "../ui/glare-card";
import { IoBug } from "react-icons/io5";

const BountyCard = () => {
  return (
    <GlareCard className="flex flex-col p-8">
      <div className="flex flex-row items-center ">
        <div className="flex justify-center items-center p-2 bg-white/20 rounded-[12px]  w-fit">
          <IoBug className=" text-color-7 w-6 h-6" />
        </div>
        <p className=" ml-4 text-[1rem] text-color-7 fonnt-bold">Deonorla</p>
      </div>
      <div className="flex flex-col mt-4">
        <p className=" text-[1rem] text-color-7">Price</p>
      </div>
    </GlareCard>
  );
};

export default BountyCard;
