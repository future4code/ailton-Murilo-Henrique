import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage, goToFeedPage } from "../../routes/coordinator";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import logo from "../../assets/logo.png"

function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
      })
      .catch((err) => {
        alert("Login ou senha incorreta.");
      });
    clearFields();
  };
  const login = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      goToFeedPage(navigate);
    }
  }, []);

  return (
    <div>
      <div>
        <img src={logo} alt="labenu-icone" />
        <p>LabEddit</p>
        <span>O projeto de rede social inspirado no Reddit</span>
      </div>
      <div>
        <div >
          <div onSubmit={onSubmitLogin}>
            <input
              name="email"
              type="email"
              placeholder=" "
              value={form.email}
              onChange={onChange}
              required
            />
            <label>Nome</label>
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder=" "
              value={form.password}
              onChange={onChange}
              required
            />
            <label>Senha</label>
          </div>
          <button type="submit" onClick={onSubmitLogin}>Continuar</button>
          
          <button onClick={() => goToSignUpPage(navigate)}>
            Crie uma conta!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;