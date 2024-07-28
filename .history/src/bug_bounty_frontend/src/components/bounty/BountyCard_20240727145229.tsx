import React from "react";
import { GlareCard } from "../ui/glare-card";
import { IoBug } from "react-icons/io5";

const BountyCard = () => {
  return (
    <GlareCard className="flex flex-col p-8">
      <div className="flex flex-row">
        <div className="flex bg-white/20 rounded-[12px] p-2 w-fit">
          <IoBug className=" text-color-7 w-6 h-6" />
        </div>
        <p className=" ml-4 text-[1rem] text-color-7 max-w-3xl  mb-6 lg:mb-8">
          Deonorla
        </p>
      </div>
    </GlareCard>
  );
};

export default BountyCard;
