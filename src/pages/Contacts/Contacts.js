import { useState } from "react";
import "./Contacts.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";
function Contacts() {
  const [contactInfo, setContactInfo] = useState([]);
  const { bears, increasePopulation, vendorList, updateVendorList } =
    useStore();
  useState(() => {
    axios
      .get(
        `http://194.87.239.231:55555/api/VendorContact/${localStorage.getItem(
          "vendorId"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token1")}`,
            User: localStorage.getItem("login1"),
          },
        }
      )
      .then((res) => {
        setContactInfo(
          res.data.map((contVendor) => ({
            contact: contVendor.contact,
            id: contVendor.id,
            name: contVendor.name,
          }))
        );
      })
      .catch((el) => alert("Ошибка"));
  }, []);
  const navigate = useNavigate();
  console.log(vendorList);
  return (
    <div class="main">
      <img class="logo" src="logo.png" />
      <div
        class="back"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("../vendors")}
      >
        Назад
      </div>
      <div class="number">{localStorage.getItem("code")}</div>
      <h2>{localStorage.getItem("name")}</h2>
      {contactInfo.map((c) => (
        <div class="contact" key={c.id}>
          <div class="left">
            <div class="name">{c.name}</div>
            <div class="phone">
              {" "}
              <a>{c.contact} </a>{" "}
            </div>
          </div>
          {console.log(
            c.contact.split("").reduce((acc, cur) => {
              const num = Number(cur);
              if (isNaN(num)) return acc;
              // console.log(acc);
              return 1 + acc;
            }, 0)
          )}
          {!c.contact.includes("@") &&
            c.contact.split("").reduce((acc, cur) => {
              const num = Number(cur);
              if (isNaN(num)) return acc;
              return 1 + acc;
            }, 0) === 11 && (
              <div
                class="right"
                onClick={() => {
                  console.log(
                    `https://api.whatsapp.com/send?phone=${c.contact}&text=Привет! Пришли, пожалуйста, прайс-лист на наш сервис *https://vinopark.ru* %0aCпасибо`
                  );
                  window.location.href = `https://api.whatsapp.com/send?phone=${c.contact}&text=Привет! Пришли, пожалуйста, прайс-лист на наш сервис *https://vinopark.ru* %0aCпасибо`;
                }}
              ></div>
            )}
        </div>
      ))}
      <button
        class="add"
        style={{ padding: "10px 125px" }}
        onClick={() => navigate("../add-contact")}
      >
        Добавить
      </button>
    </div>
  );
}

export default Contacts;
