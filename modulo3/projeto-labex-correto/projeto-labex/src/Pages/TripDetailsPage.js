import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import useProtectedPage from "../hooks/useProtectedPage";
import LogoHeader from "../images/labexHeader.png";
import {
  ContainerTripDetails,
  TripDetailsArea,
  CandidatesCard,
  ButtonAreaTripDetails,
  BackButtonTripDetails,
  Header,
  ImgHeader
} from "./Styles";

const TripDetailsPage = (tripId) => {
  useProtectedPage();

  const navigate = useNavigate();

  const [approval, setApproval] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const approveCandidate = (selectedId) => {
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${data?.data.trip.id}/candidates/${selectedId}/decide`,
        {
          approve: true,
        },
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data.success);
        setApproval(response.data.success);
        setApproval(!approval);
        alert("Candidato Aprovado!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const declineCandidate = (selectedId) => {
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${data?.data.trip.id}/candidates/${selectedId}/decide`,
        {
          approve: false,
        },
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        setApproval(response.data.success);
        setApproval(!approval);
        alert("Candidato Reprovado :(");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const pathParams = useParams();

  const data = useRequestData(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trip/${pathParams.id}`,
    "getTripDetails",
    window.localStorage.getItem("token"),
    approval
  );

  return (
    <ContainerTripDetails>
      <Header>
        <ImgHeader src={LogoHeader} />
      </Header>
      <TripDetailsArea>
      <h1>Nome da Viagem</h1>
        <p>Nome: {data?.data.trip.name}</p>
        <p>Descrição: {data?.data.trip.description}</p>
        <p>Planeta: {data?.data.trip.planet}</p>
        <p>Duração: {data?.data.trip.durationInDays} dias</p>
        <p>Data: {data?.data.trip.date}</p>
      
      <BackButtonTripDetails onClick={goBack}>Voltar</BackButtonTripDetails>
      <h1>Candidatos Pendentes</h1>
      {data?.data.trip.candidates.map((candidato) => {
        return (
          <CandidatesCard key={candidato.name}>
            <p>Nome: {candidato.name}</p>
            <p>Profissão: {candidato.profession}</p>
            <p>Idade: {candidato.age}</p>
            <p>País: {candidato.country}</p>
            <p>Texto de Candidatura: {candidato.applicationText}</p>
            <ButtonAreaTripDetails>
              <BackButtonTripDetails
                onClick={() => approveCandidate(candidato.id)}
              >
                Aprovar
              </BackButtonTripDetails>
              <BackButtonTripDetails
                onClick={() => declineCandidate(candidato.id)}
              >
                Reprovar
              </BackButtonTripDetails>
            </ButtonAreaTripDetails>
          </CandidatesCard>
        );
      })}
      <h1>Candidatos Aprovados</h1>
      <ul>
        {data?.data.trip.approved.map((candidato) => {
          return <li key={candidato.name}>{candidato?.name}</li>;
        })}
      </ul>
  
      </TripDetailsArea>
    </ContainerTripDetails>
  );
};

export default TripDetailsPage;
