import { useStore } from "../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputLogin } from "./InputLogin";
import "../pages/LogIn/LogIn.css";
export const FormLogin = () => {
  const { setFInfo, FInfo } = useStore();
  const navigate = useNavigate();
  const save = (e) => {
    e.preventDefault();
    console.log(FInfo);
    axios
      .post("http://194.87.239.231:55555/api/logon", FInfo)
      .then((response) => {
        console.log(response.data);
        localStorage.clear();
        localStorage.setItem("login1", response.data.user.login);
        localStorage.setItem("token1", response.data.result);
        navigate("/vendors");
        return;
      })
      .catch((error) => {
        console.warn(error);
        alert("Ошибка");
      });
  };
  return (
    <form onSubmit={save}>
      <h3>Логин</h3>
      <InputLogin type="text" name="login" place="Введите логин" />
      <h3>Пароль</h3>
      <InputLogin type="password" name="password" place="Введите пароль" />
      <button type="submit" style={{ padding: "20px 124px" }}>
        Войти
      </button>
    </form>
  );
};
