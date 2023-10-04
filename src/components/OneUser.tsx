import React from "react";
import Image from "next/image";
import { IModel } from "@App/page";
import settingsIcon from "@Icons/more.png";

interface IOneUserProps {
  user: IModel;
  settingsAreClicked: boolean;
  setSettingsAreClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const OneUser = ({
  user,
  settingsAreClicked,
  setSettingsAreClicked,
}: IOneUserProps) => {
  const settingsClickHandle = () => {
    setSettingsAreClicked(!settingsAreClicked);
  };
  return (
    <div className="d-flex align-items-start justify-content-start oneUser">
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
        onClick={settingsClickHandle}
      >
        <Image src={settingsIcon} alt="Settings" width={16} height={16} />
      </button>
    </div>
  );
};

export default OneUser;
