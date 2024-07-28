import React from "react";
import { GlareCard } from "../ui/glare-card";
import { IoBug } from "react-icons/io5";

const BountyCard = () => {
  return (
    <GlareCard className="flex flex-col p-4">
      <div className="flex bg-white/20 rounded-md p-3 w-fit">
        <IoBug className=" text-color-7 w-6 h-6" />
      </div>
    </GlareCard>
  );
};

export default BountyCard;
