import React from "react";
import bounty from "../assets/bounty.jpg";
const SignUp = () => {
  return (
    <div className="m-4">
      <div className="relative">
        <img
          className="w-full h-full absolute  opacity-50"
          src={bounty}
          width={800}
          height={730}
          alt="bounty "
        />
      </div>
    </div>
  );
};

export default SignUp;
