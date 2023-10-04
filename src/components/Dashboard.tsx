import React from "react";
import { IModel } from "@App/page";
import OneUser from "./OneUser";

interface IDashboardProps {
  team: IModel[];
  settingsAreClicked: boolean;
  setSettingsAreClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard = ({
  team,
  settingsAreClicked,
  setSettingsAreClicked,
}: IDashboardProps) => {
  return (
    <div className="d-flex align-items-start justify-content-start px-4 flex-column pt-4 dashboard">
      {team.map((user) => (
        <OneUser
          user={user}
          key={user.name}
          settingsAreClicked={settingsAreClicked}
          setSettingsAreClicked={setSettingsAreClicked}
        />
      ))}
    </div>
  );
};

export default Dashboard;
