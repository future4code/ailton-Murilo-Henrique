import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from "styled-components";
import MainArea from './Components/mainArea';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainArea />
    </div>
  );
}

export default App; 