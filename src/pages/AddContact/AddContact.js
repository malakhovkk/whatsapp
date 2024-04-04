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
        navigate("../");
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
      <div
        class="back"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("../vendor-contact")}
      >
        Назад
      </div>
      <h2>Добавление контакта</h2>

      <form onSubmit={save}>
        <h3>Полное имя</h3>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          name="name"
          className="inp"
          placeholder="Введите полное имя"
        />
        <h3>Тип контакт</h3>
        <div className="contactBlock">
          <select
            name="contact"
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          >
            <option value="2">Телефон</option>
            <option value="1">Почта</option>
          </select>
        </div>
        <h3>Контакт</h3>
        <input
          type="text"
          placeholder="Введите контакт"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          className="inp"
          name="contact"
        />
        <button
          type="submit"
          disabled={status === "success"}
          style={{ padding: "20px 103px" }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default AddContact;
