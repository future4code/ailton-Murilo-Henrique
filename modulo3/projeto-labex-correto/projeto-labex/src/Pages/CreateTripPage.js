import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import planets from "../assets/Planets";


const CreateTripContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  h1 {
    margin-bottom: 15px;
  }
`;

const FormSelectContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  div,
  input {
    margin-bottom: 15px;
  }
  form,
  select,
  input {
    width: 500px;
  }
  select,
  input {
    padding: 5px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: 20px;
`;

const BackButton = styled.span`
  padding: 10px;
  display: flex;
  justify-content: center;
  min-width: 30%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const CreateButton = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  min-width: 30%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;


const CreateTripPage = () => {
useProtectedPage()

const [form, setForm] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
})

const onChange = (event) => {
  const {name, value} = event.target
  setForm({...form, [name]: value})
}
const cleanFields = () => {
  setForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })
}

const handleClick = (event) => {
  event.preventDefault();
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips`, form,{
    headers: {
      auth: window.localStorage.getItem('token')
    }
  })
    .then((response) => {
      console.log(response)
      console.log(form)
      alert("Viagem criada com sucesso!")
      cleanFields()
    })
    .catch((err) => {
      console.log(err.message)
      console.log(form)
    })
}

const navigate = useNavigate();

const goBack = () => {
  navigate("/admin/trips/list")
}
const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0")
  const mm = String(today.getMonth() + 1).padStart(2, "0")
  const yyyy = today.getFullYear()
  return yyyy + "-" + mm + "-" + dd
}

return (
<CreateTripContainer>
      <div>
        <h1>Criar Viagem</h1>
      </div>
      <FormSelectContainer onSubmit={handleClick}>
        <input 
        type="text" 
        placeholder="Nome"
        name={"name"}
        value={form.name}
        onChange={onChange}
        pattern={"^.{5,}"}
        title={"Mínimo 5 caracteres"}
        required
        ></input>
        <div>
          <select 
          onChange={onChange}
          name={"planet"}
          required
          >
            <option 
            value={form.name}
            defaultValue>
              Escolha um Planeta
            </option>
              {planets?.map((planets) => {
                return(
                  <option key={planets.position} value={planets.name}>{planets.name}</option>
                )
            })}
          </select>
        </div>
        <input 
        onChange={onChange}
        type="date" 
        placeholder="DD/MM/AAAA"
        name={"date"}
        value={form.date}
        min={disablePastDate()}
        required
        ></input>
        <input 
        onChange={onChange}
        type="text" 
        placeholder="Descrição"
        name={"description"}
        value={form.description}
        pattern={"^.{30,}"}
        title={"Mínimo 30 caracteres"}
        required
        ></input>
        <input 
        onChange={onChange}
        type="number" 
        placeholder="Duração em dias"
        name={"durationInDays"}
        value={form.durationInDays}
        pattern={"^([5-9]\d|[1-9]\d{2,})$"}
        title={"Mínimo 50 dias"}
        required
        ></input>
        <ButtonArea>
          <BackButton onClick={goBack}>Voltar</BackButton>
          <CreateButton>Criar</CreateButton>
        </ButtonArea>
      </FormSelectContainer>
    </CreateTripContainer>
  );
};

export default CreateTripPage;