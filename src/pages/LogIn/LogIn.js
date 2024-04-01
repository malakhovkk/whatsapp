import { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
function LogIn() {
  const [FInfo, setFInfo] = useState({ login: "", password: "" });
  const navigate = useNavigate();

  return (
    <>
      <div class="main">
        <img class="logo" src="logo.png" />
        <h2>Авторизация</h2>
        <FormLogin />
      </div>
    </>
  );
}

export default LogIn;
