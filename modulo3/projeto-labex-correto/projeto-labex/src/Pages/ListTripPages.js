import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";

const ContainerTripsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  flex-wrap: wrap;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const BackButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  min-width: 8%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const SubscribeButton = BackButton;

const TravelArea = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 10px;
  }
`;

const TravelCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0px 2px 10px gray;
  margin-bottom: 20px;
  width: 100%;
  p {
    margin-bottom: 5px;
  }
`;

const ListTripsPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const goToApplicationForm = () => {
    navigate("/trips/application");
  };

  const data = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips", "getTrips"
  );

  return (
    <ContainerTripsPage>
      <ButtonArea>
        <BackButton onClick={goBack}>Voltar</BackButton>
        <SubscribeButton onClick={goToApplicationForm}>
          Inscrever-se
        </SubscribeButton>
      </ButtonArea>
      <TravelArea>
        <h1>Lista de Viagens</h1>
        {data &&
          data.data &&
          data?.data?.trips.map((data) => {
            return (
              <TravelCard key={data.id}>
                <p>Nome: {data.name}</p>
                <p>Descrição: {data.description}</p>
                <p>Planeta: {data.planet}</p>
                <p>Duração: {data.durationInDays}</p>
                <p>Data: {data.date}</p>
              </TravelCard>
            );
          })}
      </TravelArea>
    </ContainerTripsPage>
  );
};

export default ListTripsPage;