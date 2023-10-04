import React from "react";
import Sidebar from "@Components/Sidebar";

const Home = () => {
  return (
    <div className="container-fluid no-select">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">Search Bar</div>
            <div className="col-12 main">Main</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
