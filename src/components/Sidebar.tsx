import React from "react";
import Image from "next/image";
import analyticsIcon from "@Icons/pie-chart.png";
import profileIcon from "@Icons/user.png";
import administeringIcon from "@Icons/to-do-list.png";
import chatIcon from "@Icons/blogging.png";
import bannerIcon from "@Icons/gallery.png";
import teamIcon from "@Icons/group.png";
import blogIcon from "@Icons/blogging.png";
import currencyIcon from "@Icons/dollar.png";
import logoutIcon from "@Icons/logout.png";
import burgerMenuIcon from "@Icons/burger-menu.png";
import team from "@Models/team.json";

interface ISidebarProps {
  burgerMenuIsClicked: boolean;
  setBurgerMenuIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  burgerMenuIsClicked,
  setBurgerMenuIsClicked,
}: ISidebarProps) => {
  const burgerMenuClickHandle = () => {
    setBurgerMenuIsClicked(!burgerMenuIsClicked);
    console.log("clicked");
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column px-3 pt-4 pb-3 sidebar">
      <div className="d-flex align-items-center justify-content-start sidebar__logo">
        <Image
          src={"https://picsum.photos/200"}
          alt="Logo"
          width={64}
          height={64}
          className="sidebar__logo"
        />
        <h2 className="d-xs-block d-md-none">Smart Logo</h2>
      </div>
      <Image
        src={burgerMenuIcon}
        alt="Burger menu"
        width={32}
        height={32}
        className="d-xs-block d-md-none burgerMenu"
        onClick={burgerMenuClickHandle}
      />
      <div className="d-flex align-items-center justify-content-center sidebar__profile">
        <Image
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          alt="Profile's Image"
          width={64}
          height={64}
        />
        <div className="d-flex align-items-start justify-content-center flex-column sidebar__profile-user">
          <h4 className="d-xs-block d-md-none">{team[0].name}</h4>
          <span className="d-xs-block d-md-none">Собственник</span>
        </div>
      </div>

      <nav className="sidebar__menu w-100">
        <ul className="d-flex align-items-center justify-content-center flex-column sidebar__menu-list">
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={analyticsIcon} alt="Analytics" width={32} height={32} />
            <span className="d-xs-block d-md-none">Аналитика</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={profileIcon} alt="Profile" width={32} height={32} />
            <span className="d-xs-block d-md-none">Профиль</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image
              src={administeringIcon}
              alt="Administering"
              width={32}
              height={32}
            />
            <span className="d-xs-block d-md-none">Модерация</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={chatIcon} alt="Chat" width={32} height={32} />
            <span className="d-xs-block d-md-none">Чаты</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={bannerIcon} alt="Banner" width={32} height={32} />
            <span className="d-xs-block d-md-none">Баннеры</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={teamIcon} alt="Team" width={32} height={32} />
            <span className="d-xs-block d-md-none">Команда</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={blogIcon} alt="Blog" width={32} height={32} />
            <span className="d-xs-block d-md-none">Блог</span>
          </li>
          <li className="d-flex align-items-center justify-content-center flex-row">
            <Image src={currencyIcon} alt="Currency" width={32} height={32} />
            <span className="d-xs-block d-md-none">Курс валют</span>
          </li>
        </ul>
      </nav>
      <button className="d-flex align-items-center justify-content-start flex-row sidebar__exit">
        <Image src={logoutIcon} alt="Logout" width={32} height={32} />
        <span className="d-xs-block d-md-none">Выйти</span>
      </button>

      {burgerMenuIsClicked && (
        <>
          <nav className="sidebar__menu w-100">
            <ul className="d-flex align-items-center justify-content-center flex-column sidebar__menu-list">
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image
                  src={analyticsIcon}
                  alt="Analytics"
                  width={32}
                  height={32}
                />
                <span className="d-xs-block d-md-none">Аналитика</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image src={profileIcon} alt="Profile" width={32} height={32} />
                <span className="d-xs-block d-md-none">Профиль</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image
                  src={administeringIcon}
                  alt="Administering"
                  width={32}
                  height={32}
                />
                <span className="d-xs-block d-md-none">Модерация</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image src={chatIcon} alt="Chat" width={32} height={32} />
                <span className="d-xs-block d-md-none">Чаты</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image src={bannerIcon} alt="Banner" width={32} height={32} />
                <span className="d-xs-block d-md-none">Баннеры</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image src={teamIcon} alt="Team" width={32} height={32} />
                <span className="d-xs-block d-md-none">Команда</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image src={blogIcon} alt="Blog" width={32} height={32} />
                <span className="d-xs-block d-md-none">Блог</span>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-row">
                <Image
                  src={currencyIcon}
                  alt="Currency"
                  width={32}
                  height={32}
                />
                <span className="d-xs-block d-md-none">Курс валют</span>
              </li>
            </ul>
          </nav>
          <button className="d-flex align-items-center justify-content-start flex-row sidebar__exit">
            <Image src={logoutIcon} alt="Logout" width={32} height={32} />
            <span className="d-xs-block d-md-none">Выйти</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
