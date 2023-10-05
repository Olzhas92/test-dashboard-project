import React, { useState } from "react";
import Image from "next/image";
import { IModel } from "@App/page";
import settingsIcon from "@Icons/more.png";

interface IOneUserProps {
  user: IModel;
  settingsAreClicked: boolean;
  setSettingsAreClicked: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: React.Dispatch<string>;
  editUser: React.Dispatch<string>;
}

const OneUser = ({
  user,
  settingsAreClicked,
  setSettingsAreClicked,
  deleteUser,
  editUser,
}: IOneUserProps) => {
  const [clickedName, setClickedName] = useState("");

  const settingsClickHandle = (name: string) => {
    setSettingsAreClicked(!settingsAreClicked);

    if (clickedName === name) {
      setClickedName("");
    } else {
      setClickedName(name);
    }
  };

  const deleteHandle = (name: string) => {
    deleteUser(name);
  };

  const userClickHandle = (email: string) => {
    editUser(email);
  };

  return (
    <div
      className="d-flex align-items-start justify-content-start px-3 oneUser"
      onClick={() => userClickHandle(user.email)}
    >
      <Image
        src={user.image}
        alt="User"
        width={64}
        height={64}
        className="oneUser__profile"
      />
      <div className="d-flex align-items-start justify-content-start flex-column oneUser__info">
        <div className="d-flex align-items-center justify-content-start oneUser__info-details">
          <h4>{user.name}</h4>
          <span id="email">{user.email}</span>
        </div>
        <div className="d-flex align-items-center justify-content-start oneUser__info-permissions">
          {user.permissions.map((permission) => (
            <span key={permission} id="permission">
              {permission}
            </span>
          ))}
        </div>
      </div>
      <button
        className="d-flex align-items-start oneUser__settings"
        onClick={() => {
          settingsClickHandle(user.name);
        }}
      >
        <Image src={settingsIcon} alt="Settings" width={16} height={16} />
        {settingsAreClicked && user.name === clickedName && (
          <div className="d-flex align-items-start justify-content-start flex-column oneUser__settings-dropdown">
            <span className="oneUser__settings-dropdown--edit">
              Изменить право доступа
            </span>
            <span className="oneUser__settings-dropdown--send">
              Отправить код повторно
            </span>
            <span
              className="oneUser__settings-dropdown--delete"
              onClick={() => deleteHandle(user.email)}
            >
              Удалить
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default OneUser;
