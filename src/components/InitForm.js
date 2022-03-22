import { Component } from "react";
import { Formik, Form } from "formik";

import TextInput from "./TextInput";

import "../styles/initForm.css";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.email.length < 5) {
    errors.email = "Ingrese un email válido";
  }

  if (!values.password) {
    errors.password = "Requerido";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña es muy corta";
  }

  if (!values.radio) {
    errors.radio = "Requerido";
  }

  return errors;
};

class InitForm extends Component {
  render() {
    return (
      <div className="container-derecha">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validate}
          onSubmit={(values) => console.log("Formulario enviado")}
        >
          <Form className="form">
            <h1>Iniciar sesión</h1>
            <TextInput
              name="email"
              label="Dirección email"
              type="email"
            ></TextInput>
            <TextInput
              name="password"
              label="Contraseña"
              type="password"
            ></TextInput>
            <p>Olvidó su contraseña ?</p>
            <br />
            <button className="ingresar-button"type="submit">Ingresar</button>
            <label>No tiene cuenta ? <a href="#">Crear cuenta</a></label>
            <hr></hr>
            <button className="google-button"type="button">Iniciar con Google</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default InitForm;
