import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToLoginPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


function CreateAccount() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitCreateAccount = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        console.log(res);
        alert("Conta criada com sucesso.");
        goToLoginPage(navigate);
      })
      .catch((err) => {
        alert(`${err.response.data}`);
      });
    clearFields();
  };

  return (
    <div>
      <div>
 
        <p>Olá, boas vindas ao LabEddit</p>
      </div>
      <div>
        <form onSubmit={onSubmitCreateAccount}>
          <div>
            <input
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder=" "
              required
            />
            <label>Nome de usuário</label>
          </div>
          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder=" "
              required
            />
            <label>E-mail</label>
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder=" "
              required
              pattern={"^.{8,30}"}
              title={"Senha deve possuir no mínimo 8 e no máximo 30 caracteres"}
            />
            <label>Senha</label>
          </div>
          <div>
            <p>
              Ao continuar, você concorda com o nosso{" "}
              <span>Contrato de usuário</span> e nossa{" "}
              <span>Política de Privacidade</span>
            </p>
            <div>
              <input type="checkbox" required/>
              <p>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </p>
            </div>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;