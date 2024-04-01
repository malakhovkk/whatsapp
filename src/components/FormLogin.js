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
      <InputLogin type="password" name="password" place="Введите пароль" />
      {/* <input
        type="text"
        name="login"
        class="inp"
        placeholder="Введите логин"
        value={FInfo.login}
        onChange={(e) =>
          setFInfo({ ...FInfo, [e.target.name]: e.target.value })
        }
      />
      <h3>Пароль</h3>
      <input
        type="password"
        name="password"
        placeholder="Введите пароль"
        class="inp"
        value={FInfo.password}
        onChange={(e) =>
          setFInfo({ ...FInfo, [e.target.name]: e.target.value })
        }
      /> */}
      <button type="submit" style={{ padding: "20px 124px" }}>
        Войти
      </button>
    </form>
  );
};
