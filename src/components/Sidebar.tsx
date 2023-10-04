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
import team from "../../models/team.json";

const Sidebar = () => {
  return (
    <div className="d-flex align-items-start justify-content-start flex-column px-3 pt-4 pb-3 sidebar">
      <div className="d-flex align-items-center justify-content-start sidebar__logo">
        <Image
          src={"https://picsum.photos/200"}
          alt="Logo"
          width={64}
          height={64}
          className="sidebar__logo"
        />
        <h2>CodeUnion</h2>
      </div>
      <div className="d-flex align-items-start justify-content-start sidebar__profile">
        <Image
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          alt="Profile's Image"
          width={64}
          height={64}
        />
        <div className="d-flex align-items-start justify-content-center flex-column sidebar__profile-user">
          <h4>{team[0].name}</h4>
          <span>Собственник</span>
        </div>
      </div>
      <nav className="sidebar__menu w-100">
        <ul className="d-flex align-items-start justify-content-start flex-column sidebar__menu-list">
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={analyticsIcon} alt="Analytics" width={25} height={24} />
            <span>Аналитика</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={profileIcon} alt="Profile" width={25} height={24} />
            <span>Профиль</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image
              src={administeringIcon}
              alt="Administering"
              width={24}
              height={24}
            />
            <span>Модерация</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={chatIcon} alt="Chat" width={24} height={24} />
            <span>Чаты</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={bannerIcon} alt="Banner" width={24} height={24} />
            <span>Баннеры</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={teamIcon} alt="Team" width={24} height={24} />
            <span>Команда</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={blogIcon} alt="Blog" width={24} height={24} />
            <span>Блог</span>
          </li>
          <li className="d-flex align-items-center justify-content-start flex-row">
            <Image src={currencyIcon} alt="Currency" width={24} height={24} />
            <span>Курс валют</span>
          </li>
        </ul>
      </nav>
      <button className="d-flex align-items-center justify-content-start flex-row sidebar__exit">
        <Image src={logoutIcon} alt="Logout" width={24} height={24} />
        <span>Выйти</span>
      </button>
    </div>
  );
};

export default Sidebar;
