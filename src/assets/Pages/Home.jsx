import React from "react";
import { MyNavbar } from "../Components/Common/Navbar";
import { MySideBar } from "../Components/Common/Sidebar";
import { MyTable } from "../Components/Home/Table";

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <div className="flex flex-row w-full p-3">
        <MySideBar />
        <div className="w-full px-5">
          <MyTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
