import React from "./node_modules/react";
import { useFormik } from "./node_modules/formik";

const initialValues = {
  telefone: "",
  celular: "",//como colocar uma tag para se for whatsapp?
  email: "",
  github: "",
  linkedin: ""
};

const InfoCurriculo = () => {
  const onSubmit = values => {};

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <form>
      <input placeholder="Telefone" {...formik.getFieldProps("telefone")} />
      <br />
      <input placeholder="Celular" {...formik.getFieldProps("celular")} />
      <br />
      <input placeholder="E-mail" {...formik.getFieldProps("email")} />
      <br />
      <input placeholder="GitHub" {...formik.getFieldProps("github")} />
      <br />
      <input placeholder="Linkedin" {...formik.getFieldProps("linkedin")} />
    </form>
  );
};

export default InfoCurriculo;