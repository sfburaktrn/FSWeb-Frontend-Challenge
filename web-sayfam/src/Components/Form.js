import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./Form.css";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const notify = () => toast("Yazdıklarınız İletildi ✔️");

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
    console.log("Veriler!!", { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>İletişim Formu</h2>
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
