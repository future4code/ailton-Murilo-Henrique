import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import LogoHeader from "../images/labexHeader.png";
import {
  TravelCardListTrip,
  TravelArea,
  ButtonAreaListTrip,
  BackButtonListTrip,
  SubscribeButton,
  ContainerTripsPage,
  Header,
  ImgHeader
} from "./Styles";

const ListTripsPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const goToApplicationForm = () => {
    navigate("/trips/application");
  };

  const data = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips",
    "getTrips"
  );

  return (
    <ContainerTripsPage>
      <Header>
        <ImgHeader src={LogoHeader} />
      </Header>
      <ButtonAreaListTrip>
        <BackButtonListTrip onClick={goBack}>Voltar</BackButtonListTrip>
        <SubscribeButton onClick={goToApplicationForm}>
          Inscrever-se
        </SubscribeButton>
      </ButtonAreaListTrip>
      <TravelArea>
        <h1>Lista de Viagens</h1>
        {data &&
          data.data &&
          data?.data?.trips.map((data) => {
            return (
              <TravelCardListTrip key={data.id}>
                <p>Nome: {data.name}</p>
                <p>Descrição: {data.description}</p>
                <p>Planeta: {data.planet}</p>
                <p>Duração: {data.durationInDays}</p>
                <p>Data: {data.date}</p>
              </TravelCardListTrip>
            );
          })}
      </TravelArea>
    </ContainerTripsPage>
  );
};

export default ListTripsPage;
