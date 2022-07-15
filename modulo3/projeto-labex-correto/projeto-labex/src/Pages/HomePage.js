import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Foguete from "../images/foguete.png";
import Logo from "../images/LabeX.png";
import LogoHeader from "../images/labexHeader.png";
import {
  ContainerHome,
  Header,
  ImgHeader,
  BodyHome,
  ImgHome,
  DivHome,
  LogoHome,
  ButtonHome,
} from "./Styles";

const HomePage = () => {
  const navigate = useNavigate();

  const goToTrips = () => {
    navigate("/trips/list");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <ContainerHome>
      <Header>
        <ImgHeader src={LogoHeader} />
      </Header>
      <BodyHome>
        <ImgHome src={Foguete} />
        <DivHome>
          <LogoHome src={Logo}></LogoHome>
          <ButtonHome onClick={goToTrips}>VER VIAGENS</ButtonHome>
          <ButtonHome onClick={goToLogin}>ÁREA DO ADMIN</ButtonHome>
        </DivHome>
      </BodyHome>
    </ContainerHome>
  );
};

export default HomePage;
