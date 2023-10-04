import React from "react";
import { IModel } from "@App/page";
import OneUser from "./OneUser";

interface IDashboardProps {
  team: IModel[];
}

const Dashboard = ({ team }: IDashboardProps) => {
  return (
    <div className="d-flex align-items-start justify-content-start px-4 flex-column dashboard">
      {team.map((user) => (
        <OneUser user={user} key={user.name} />
      ))}
    </div>
  );
};

export default Dashboard;
