import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import Countries from "../assets/Country";
import LogoHeader from "../images/labexHeader.png";
import {
  ApplicationFormContainer,
  FormSelectContainer,
  ButtonAreaFormPage,
  BackButtonFormPage,
  SendButtonFormPage,
  Header,
  ImgHeader
} from "./Styles";

const ApplicationFormPage = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId: "",
  });

  const data = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips",
    "getTrips"
  );

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/trips/list");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm({
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: null,
      tripId: "",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${form.tripId}/apply`,
        form
      )
      .then((response) => {
        console.log(response);
        console.log(form);
        alert("Candidatura enviada com sucesso!");
        cleanFields();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <ApplicationFormContainer>
      <Header>
        <ImgHeader src={LogoHeader} />
      </Header>
      <FormSelectContainer>
      <div>
        <h1>Inscreva-se para uma viagem</h1>
      </div>
        <form onSubmit={handleClick}>
          <select name={"tripId"} onChange={onChange} required>
            <option value={form.tripId} defaultValue>
              Escolha uma viagem
            </option>
            {data?.data.trips.map((trip) => {
              return (
                <option key={trip.id} value={trip.id}>
                  {trip.name}
                </option>
              );
            })}
          </select>
          <input
            name={"name"}
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
            pattern={"^.{2,}"}
            title={"O nome deve ter no mínimo 2 caracteres"}
            required
          ></input>
          <input
            name={"age"}
            type="text"
            placeholder="Idade"
            value={form.age}
            onChange={onChange}
            pattern={"^^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$"}
            title={
              "Apenas números. Você precisa ter +18 anos para se candidatar"
            }
            required
          ></input>
          <input
            name={"applicationText"}
            type="text"
            placeholder="Texto de Candidatura"
            value={form.applicationText}
            onChange={onChange}
            pattern={"^.{2,}"}
            title={"O texto de candidatura deve ter no mínimo 30 caracteres"}
            required
          ></input>
          <input
            name={"profession"}
            type="text"
            placeholder="Profissão"
            value={form.profession}
            onChange={onChange}
            pattern={"^.{2,}"}
            title={"Deve ter no mínimo 10 caracteres"}
            required
          ></input>
          <select name={"country"} onChange={onChange} required>
            <option value={form.country} defaultValue>
              Escolha um País
            </option>
            {Countries?.map((country) => {
              return (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <ButtonAreaFormPage>
            <BackButtonFormPage onClick={goBack}>Voltar</BackButtonFormPage>
            <SendButtonFormPage>Enviar</SendButtonFormPage>
          </ButtonAreaFormPage>
        </form>
      </FormSelectContainer>
    </ApplicationFormContainer>
  );
};

export default ApplicationFormPage;
