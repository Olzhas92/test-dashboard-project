"use client";

import React, { useState } from "react";
import Sidebar from "@Components/Sidebar";
import SearchBar from "@Components/SearchBar";

const Home = () => {
  const [searchedEmail, setSearchedEmail] = useState("");
  const [userAddingIsClicked, setUserAddingIsClicked] = useState(false);

  const searchForEmail = (inputEmail: string) => {
    setSearchedEmail(inputEmail);
  };

  return (
    <div className="container-fluid no-select">
      <div className="row">
        <div className="col-3 px-0">
          <Sidebar />
        </div>
        <div className="col-9 main">
          <div className="row">
            <div className="col-12 px-0 pt-3 search">
              <SearchBar
                searchedEmail={searchedEmail}
                searchForEmail={searchForEmail}
                setUserAddingIsClicked={setUserAddingIsClicked}
              />
            </div>
            <div className="col-12 px-0 dashboard">Main</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
