import { useRef, useState } from "react";
import "./AddContact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function AddContact() {
  const [formData, setFormData] = useState({
    id: "",
    vendorId: localStorage.getItem("vendorId"),
    name: "",
    type: "2",
    contact: "",
  });

  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  function save(e) {
    e.preventDefault();
    axios
      .post("http://194.87.239.231:55555/api/VendorContact", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token1")}`,
          User: localStorage.getItem("login1"),
        },
      })
      .then((res) => {
        if (res.data.code === undefined || res.data.code !== 0) {
          setStatus("error");
          setTimeout(() => {
            setStatus("");
          }, 2000);
          return;
        }
        if (res.data.code === 0) navigate("../vendor-contact");
      })
      .catch((err) => {
        setStatus("error");
        setTimeout(() => {
          setStatus("");
        }, 2000);
      });
  }

  return (
    <div class="main">
      {status === "success" && (
        <Alert severity="success">Контакт успешно добавлен</Alert>
      )}
      {status === "error" && <Alert severity="error">Произошла ошибка</Alert>}
      <img class="logo" src="logo.png" />
      <h2>Добавление контакта</h2>
      <div
        class="back"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("../vendor-contact")}
      >
        Назад
      </div>
      <form onSubmit={save}>
        <h3>Полное имя</h3>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          name="name"
          className="inp"
          placeholder="Введите логин"
        />
        <h3>Тип контакт</h3>
        <select name="contact" value={formData.type}>
          <option value="2">Телефон</option>
          <option value="1">Почта</option>
          <option value="3">Никнейм</option>
        </select>

        <h3>Контакт</h3>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          className="inp"
          name="contact"
        />
        <button
          type="submit"
          disabled={status === "success"}
          style={{ padding: "20px 104px" }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default AddContact;
