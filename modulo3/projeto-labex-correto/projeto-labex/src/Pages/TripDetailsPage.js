import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import useProtectedPage from "../hooks/useProtectedPage";

const ContainerTripDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
  width: 100%;
  h1 {
    margin-bottom: 25px;
  }
`;

const TripDetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    margin-bottom: 10px;
  }
`;

const CandidatesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 2px 10px gray;
  width: 40%;
  padding: 20px;
  margin-bottom: 20px;
  p {
    margin-bottom: 10px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px;
`;

const BackButton = styled.button`
  padding: 10px;
  min-width: 8%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
  :hover {
    background-color: #dae5e8;
  }
`;

const AdminButton = BackButton;

const TripDetailsPage = (tripId) => {
  useProtectedPage();

  const navigate = useNavigate();

  const [approval, setApproval] = useState('');

  const goBack = () => {
    navigate(-1);
  };

  //PRECISO DESCIBRIR COMO RENDERIZAR AUTOMATICO QUANDO APROVO OU DECLINO OS CANDIDATOS NA TELA, PROVAVELMENT É USEEFFECT MAS NÃO DESCOBRI COMO AINDA

  
  const approveCandidate = (selectedId) => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${data?.data.trip.id}/candidates/${selectedId}/decide`, {
      approve: true
    }, {
      headers: {
        auth: window.localStorage.getItem("token"),
      }
    })
    .then((response) => {
      console.log(response.data.success)
      setApproval(response.data.success)
      setApproval(!approval)
      alert("Candidato Aprovado!");
    })
    .catch((err) => {
      console.log(err.message)
    })
  };

  const declineCandidate = (selectedId) => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${data?.data.trip.id}/candidates/${selectedId}/decide`, {
      approve: false
    }, {
      headers: {
        auth: window.localStorage.getItem("token"),
      }
    })
    .then((response) => {
      console.log(response)
      setApproval(response.data.success)
      setApproval(!approval)
      alert("Candidato Reprovado :(");
    })
    .catch((err) => {
      console.log(err.message)
    })
  };
  
  const pathParams = useParams();

  const data = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trip/${pathParams.id}`, 'getTripDetails', window.localStorage.getItem("token"), approval); 

  return (
    <ContainerTripDetails>
      <h1>Nome da Viagem</h1>
      <TripDetailsArea>
        <p>Nome: {data?.data.trip.name}</p>
        <p>Descrição: {data?.data.trip.discription}</p>
        <p>Planeta: {data?.data.trip.planet}</p>
        <p>Duração: {data?.data.trip.durationInDays} dias</p>
        <p>Data: {data?.data.trip.date}</p>
      </TripDetailsArea>
      <BackButton onClick={goBack}>Voltar</BackButton>
      <h1>Candidatos Pendentes</h1>
      {data?.data.trip.candidates.map((candidato) => {
          return (
            <CandidatesCard key={candidato.name}>
            <p>Nome: {candidato.name}</p>
            <p>Profissão: {candidato.profession}</p>
            <p>Idade: {candidato.age}</p>
            <p>País: {candidato.country}</p>
            <p>Texto de Candidatura: {candidato.applicationText}</p>
            <ButtonArea>
              <BackButton onClick={() => approveCandidate(candidato.id)}>Aprovar</BackButton>
              <BackButton onClick={() => declineCandidate(candidato.id)}>Reprovar</BackButton>
            </ButtonArea>
          </CandidatesCard>
          )
        })}
      <h1>Candidatos Aprovados</h1>
      <ul>
        {data?.data.trip.approved.map((candidato) => {
          return <li key={candidato.name}>{candidato?.name}</li>
      })}
      </ul>
    </ContainerTripDetails>
  );
};

export default TripDetailsPage;