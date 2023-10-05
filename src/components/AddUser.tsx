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
    <div className="d-flex align-items-start justify-content-start formik">
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
              className="d-flex align-items-start justify-content-start flex-column formikForm"
              onSubmit={handleSubmit}
            >
              <Field
                value={values.name}
                onChange={handleChange}
                type="text"
                id="name"
                required
                placeholder="Введите имя"
                className="formikForm__field"
              />
              <Field
                value={values.email}
                onChange={handleChange}
                type="email"
                id="email"
                required
                placeholder="Введите Email"
                className="formikForm__field"
              />

              <div className="d-flex align-items-center justify-content-between formikForm__buttons">
                <button
                  type="button"
                  onClick={closeHandle}
                  className="formikForm__close"
                >
                  Закрыть
                </button>
                <button type="submit" className="formikForm__add">
                  Добавить
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
