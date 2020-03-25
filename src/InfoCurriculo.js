import React from "react";
import { useFormik } from "formik";

const initialValues = {
  Telefone: "",
  Celular: "",//como colocar uma tag para se for whatsapp?
  Email: "",
  Github: "",
  Linkedin: ""
};

const MyForm = () => {
  const onSubmit = values => {};

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <form>
      <input placeholder="Telefone" />
      <br />
      <input placeholder="Celular" />
      <br />
      <input placeholder="Email" />
      <br />
      <input placeholder="GitHub" />
      <br />
      <input placeholder="Linkedin" />
    </form>
  );
};

export default MyForm;