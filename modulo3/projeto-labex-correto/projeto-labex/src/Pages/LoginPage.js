import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import LogoHeader from "../images/labexHeader.png";
import {
  LoginContainer,
  LoginArea,
  FormAreaLogin,
  ButtonAreaLogin,
  BackButtonLogin,
  LoginButton,
  Header,
  ImgHeader
} from "./Styles";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  const goBack = () => {
    navigate("/");
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/login",
        form
      )
      .then((response) => {
        if (response?.data?.token) {
          window.localStorage.setItem("token", response.data.token);
          cleanFields();
          navigate("/admin/trips/list");
        }
      })
      .catch((err) => {
        alert(
          "Usuário ou senha não encontrados(as), favor contate seu administrador"
        );
      });
  };

  return (
    <LoginContainer>
      <Header>
        <ImgHeader src={LogoHeader} />
      </Header>
      <LoginArea>
        <h1>Login</h1>
        <FormAreaLogin onSubmit={handleClick}>
          <input
            type="email"
            placeholder="E-mail"
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
            title={"Insira um e-mail válido"}
          ></input>
          <input
            type="password"
            name={"password"}
            placeholder="Senha"
            value={form.password}
            onChange={onChange}
            pattern={"^.{3,}"}
            title={"Sua senha deve ter no mínimo 3 caracteres"}
            required
          ></input>
          <ButtonAreaLogin>
            <BackButtonLogin onClick={goBack}>Voltar</BackButtonLogin>
            <LoginButton>Entrar</LoginButton>
          </ButtonAreaLogin>
        </FormAreaLogin>
      </LoginArea>
    </LoginContainer>
  );
};

export default LoginPage;
