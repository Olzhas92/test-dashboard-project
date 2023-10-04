import React from "react";
import Image from "next/image";
import { IModel } from "@App/page";

interface IOneUserProps {
  user: IModel;
}

const OneUser = ({ user }: IOneUserProps) => {
  return (
    <div className="d-flex align-items-center justify-content-start oneUser">
      <Image src={user.image} alt="User" width={64} height={64} />
      <div className="d-flex align-items-start justify-content-start flex-column">
        <div className="d-flex align-items-center justify-content-start">
          <h3>{user.name}</h3>
          <span>{user.email}</span>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          {user.permissions.map((permission) => (
            <span key={permission}>{permission}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneUser;
