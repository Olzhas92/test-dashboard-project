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
  const [burgerMenuIsClicked, setBurgerMenuIsClicked] = useState(false);

  const searchForEmail = (inputEmail: string) => {
    setSearchedEmail(inputEmail);
  };

  const deleteUser = (email: string) => {
    const updatedTeam = team.filter((user) => user.email !== email);
    setTeam(updatedTeam);
  };

  const addUser = (user: IModel) => {
    let updatedTeam = [...team, user];
    setTeam(updatedTeam);
  };

  const editUser = (email: string) => {
    let searchedIndex = team.findIndex((user) => user.email === email);
    const userToUpdate = team[searchedIndex];
    console.log(userToUpdate);
  };

  return (
    <div className="container-fluid no-select">
      <div className="row">
        <div className="col-1 px-0">
          <Sidebar
            burgerMenuIsClicked={burgerMenuIsClicked}
            setBurgerMenuIsClicked={setBurgerMenuIsClicked}
          />
        </div>
        <div className="col-11 main">
          <div className="row">
            <div className="col-12 px-0 pt-3 search">
              <SearchBar
                searchedEmail={searchedEmail}
                searchForEmail={searchForEmail}
                setUserAddingIsClicked={setUserAddingIsClicked}
              />
            </div>
            <div className="col-12 px-0 pb-5 dashboard">
              <Dashboard
                team={team}
                settingsAreClicked={settingsAreClicked}
                setSettingsAreClicked={setSettingsAreClicked}
                addUser={addUser}
                deleteUser={deleteUser}
                editUser={editUser}
                userAddingIsClicked={userAddingIsClicked}
                setUserAddingIsClicked={setUserAddingIsClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
