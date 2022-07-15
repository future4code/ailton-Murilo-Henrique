import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 15px;
  }
`;

const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 15px;
    width: 500px;
    padding: 5px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 10px;
`;

const BackButton = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  min-width: 20%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const LoginButton = styled.button`
padding: 10px;
min-width: 20%;
background-color: #708090;
border-radius: 20px;
border: none;
cursor: pointer;
:hover {
  background-color: #dae5e8;
}
`;
const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const cleanFields = () => {
    setForm({
      email: '',
      password: ''
    })
  }

  const goBack = () => {
    navigate("/");
  };

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/login', form)
    .then((response) => {
      if(response?.data?.token){
        window.localStorage.setItem("token", response.data.token)
        cleanFields();
        navigate("/admin/trips/list");
      }
    })
    .catch((err) => {
      alert('Usuário ou senha não encontrados(as), favor contate seu administrador')
    })
  }

  return (
    <LoginContainer>
      <LoginArea>
        <h1>Login</h1>
        <FormArea onSubmit={handleClick}>
          <input 
          type="email" 
          placeholder="E-mail"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
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
          <ButtonArea>
            <BackButton onClick={goBack}>Voltar</BackButton>
            <LoginButton>Entrar</LoginButton>
          </ButtonArea>
        </FormArea>
      </LoginArea>
    </LoginContainer>
  );
};

export default LoginPage;