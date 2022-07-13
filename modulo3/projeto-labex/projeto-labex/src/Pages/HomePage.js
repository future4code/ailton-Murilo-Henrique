import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Foguete from "../images/foguete.png";
import Logo from "../images/LabeX.png";
import LogoHeader from "../images/labexHeader.png"

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  width: 100%;
  height: 10%;
  background-color: black;
`;

const ImgHeader = styled.img`
height: 100%;

`

const BodyHome = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  background-image: url("https://mega.ibxk.com.br//2020/07/17/17103741568418.jpg?ims=1200x480");
  background-size: cover;
  color: white;
  justify-content: space-between;
  padding-right: 200px;
`;
const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 150px;
  gap: 20px;
  align-items: center;

`;

const ImgHome = styled.img`
  height: 100%;
  width: 50%;
  padding-left: 50px;
`;

const LogoHome = styled.img`
  width: 45%;
`;
const ButtonHome = styled.button`
  height: 60px;
  width: 400px;
  background-color: black;
  color: white;
  border-box: none;
  cursor: pointer;
  :hover {
    transform: scale(1.2, 1.2);
  }
`;



const HomePage = () => {
  return (
    <ContainerHome>
      <Header>
      <ImgHeader src={LogoHeader}/>
      </Header>
      <BodyHome>
        <ImgHome src={Foguete} />
        <DivHome>
          <LogoHome src={Logo}></LogoHome>
          <ButtonHome>VER VIAGENS</ButtonHome>
          <ButtonHome>ÁREA DO ADMIN</ButtonHome>
        </DivHome>
      </BodyHome>
      
    </ContainerHome>
  );
};

export default HomePage;
