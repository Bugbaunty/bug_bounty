import React from "react";
import { GlareCard } from "../ui/glare-card";
import { IoBug } from "react-icons/io5";

const BountyCard = () => {
  return (
    <GlareCard className="flex flex-col p-4">
      <div className="">
        <IoBug className=" w-[3rem] h-[3rem]" />
      </div>
    </GlareCard>
  );
};

export default BountyCard;
