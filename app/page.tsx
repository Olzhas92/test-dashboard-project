"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@Components/Sidebar";
import SearchBar from "@Components/SearchBar";
import Dashboard from "@Components/Dashboard";
import data from "@Models/team.json";

export interface IModel {
  name: string;
  email: string;
  permissions: string[];
  image: string;
}

const Home = () => {
  const [searchedEmail, setSearchedEmail] = useState("");
  const [userAddingIsClicked, setUserAddingIsClicked] = useState(false);
  const [team, setTeam] = useState<IModel[]>(data);
  const [settingsAreClicked, setSettingsAreClicked] = useState(false);

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
            <div className="col-12 px-0 pb-3 dashboard">
              <Dashboard
                team={team}
                settingsAreClicked={settingsAreClicked}
                setSettingsAreClicked={setSettingsAreClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
