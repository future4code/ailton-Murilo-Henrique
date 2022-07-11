import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;
const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    
    <ContainerApp>
      <GlobalStyle>
        ALTERAL PAGINAS
      </GlobalStyle>
    </ContainerApp>

  );
}

export default App;
