import { IModel } from "@App/page";
import React from "react";

interface IAddUserProps {
  setUserAddingIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: React.Dispatch<IModel>;
}

const AddUser = ({ setUserAddingIsClicked, addUser }: IAddUserProps) => {
  const addClickHandle = () => {
    setUserAddingIsClicked(false);
    let newUser = {
      name: "Olzhas",
      email: "olzhas@gmail.com",
      permissions: ["Тест"],
      image: "https://picsum.photos/200",
    };
    addUser(newUser);
  };

  const closeHandle = () => {
    setUserAddingIsClicked(false);
  };

  return (
    <div>
      <p>Adding Form</p>
      <button onClick={addClickHandle}>Confirm</button>
      <button onClick={closeHandle}>Close</button>
    </div>
  );
};

export default AddUser;
