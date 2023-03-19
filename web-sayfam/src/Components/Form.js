import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./Form.css";
import * as yup from "yup";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const notify = () => toast("Yazdıklarınız İletildi ✔️");

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "İsim en az iki karakter olmalıdır.")
      .required("İsim boş bırakılamaz."),
    email: yup
      .string()
      .email("Geçerli bir e-posta adresi giriniz.")
      .required("E-posta boş bırakılamaz."),
    message: yup
      .string()
      .min(10, "Mesaj en az 10 karakter olmalıdır.")
      .max(50, "Mesaj en fazla 50 karakter olabilir.")
      .required("Mesaj boş bırakılamaz."),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ name, email, message }, { abortEarly: false });
      notify();
      console.log("Veriler!!", { name, email, message });
    } catch (error) {
      toast.error(error.errors[0]);
    }
  };

  return (
    <form className="formcss" onSubmit={handleSubmit}>
      <h1>İletişim Formu</h1>
      <br />
      <label htmlFor="name">İsim:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">E-posta:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Mesajınız:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="5"
      ></textarea>

      <button type="submit">Gönder</button>
      <button className="back" onClick={() => history.push("/")}>
        portfolio
      </button>
      <ToastContainer
        position="top-right"
        autoClose={1900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
}

export default Form;
