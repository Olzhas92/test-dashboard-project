import React from "react";
import { IModel } from "@App/page";
import OneUser from "./OneUser";
import AddUser from "./AddUser";

interface IDashboardProps {
  team: IModel[];
  settingsAreClicked: boolean;
  setSettingsAreClicked: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: React.Dispatch<IModel>;
  deleteUser: React.Dispatch<string>;
  editUser: React.Dispatch<string>;
  userAddingIsClicked: boolean;
  setUserAddingIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard = ({
  team,
  settingsAreClicked,
  setSettingsAreClicked,
  addUser,
  deleteUser,
  editUser,
  userAddingIsClicked,
  setUserAddingIsClicked,
}: IDashboardProps) => {
  return (
    <div className="d-flex align-items-start justify-content-start px-4 flex-column pt-4 dashboard">
      {userAddingIsClicked && (
        <AddUser
          setUserAddingIsClicked={setUserAddingIsClicked}
          addUser={addUser}
        />
      )}
      {team.map((user) => (
        <OneUser
          user={user}
          key={user.name}
          settingsAreClicked={settingsAreClicked}
          setSettingsAreClicked={setSettingsAreClicked}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
};

export default Dashboard;
