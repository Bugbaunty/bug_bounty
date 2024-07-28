import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Bounties from "./Bounties";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Dashboard = () => {
  return (
    <div className="flex ">
      <Header />
      <Sidebar />
      <Bounties />
      <ButtonGradient />
    </div>
  );
};

export default Dashboard;
