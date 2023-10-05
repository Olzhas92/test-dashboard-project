import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IModel } from "@App/page";

interface IAddUserProps {
  setUserAddingIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: React.Dispatch<IModel>;
}

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!"),
  email: Yup.string().min(2, "Too Short!"),
});

const AddUser = ({ setUserAddingIsClicked, addUser }: IAddUserProps) => {
  const closeHandle = () => {
    setUserAddingIsClicked(false);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          let newUser = {
            name: values.name,
            email: values.email,
            permissions: ["Пользователь"],
            image: "https://picsum.photos/200",
          };
          addUser(newUser);
          resetForm({ values: { name: "", email: "" } });
          setUserAddingIsClicked(false);
        }}
      >
        {({ handleSubmit, values, handleChange }) => {
          return (
            <Form
              method="POST"
              className="d-flex align-items-start justify-content-start flex-column"
              onSubmit={handleSubmit}
            >
              <Field
                value={values.name}
                onChange={handleChange}
                type="text"
                id="name"
                required
                placeholder="Введите имя"
              />
              <Field
                value={values.email}
                onChange={handleChange}
                type="email"
                id="email"
                required
                placeholder="Введите Email"
              />

              <button type="submit">Добавить</button>
              <button type="button" onClick={closeHandle}>
                Закрыть
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
