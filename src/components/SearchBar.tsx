"use client";

import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "@Icons/search.png";
import { IModel } from "@App/page";

interface ISearchBarProps {
  searchedEmail: string;
  searchForEmail: React.Dispatch<string>;
  setUserAddingIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: React.Dispatch<IModel>;
}

const SearchBar = ({
  searchedEmail,
  searchForEmail,
  setUserAddingIsClicked,
  addUser,
}: ISearchBarProps) => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);

  const labelClickHandle = () => {
    setSearchIsVisible(!searchIsVisible);
  };

  const searchedEmailHandle: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    searchForEmail(e.target.value);
  };

  const addClickHandle = () => {
    setUserAddingIsClicked(true);
    let newUser = {
      name: "Olzhas",
      email: "olzhas@gmail.com",
      permissions: ["Тест"],
      image: "https://picsum.photos/200",
    };
    addUser(newUser);
  };

  return (
    <div className="d-flex align-items-center justify-content-start px-4 py-3 searchbar">
      <h2 className="searchbar__title">Команда</h2>
      <div className="d-flex align-items-center justify-content-start searchbar__search">
        {searchIsVisible && (
          <input
            type="text"
            placeholder="Поиск по Email"
            value={searchedEmail}
            onChange={searchedEmailHandle}
            className="searchbar__search--active"
          />
        )}
        <label>
          <Image
            src={searchIcon}
            alt="Search"
            width={24}
            height={24}
            onClick={labelClickHandle}
          />
        </label>
      </div>
      <button className="searchbar__add" onClick={addClickHandle}>
        Добавить пользователя
      </button>
    </div>
  );
};

export default SearchBar;
