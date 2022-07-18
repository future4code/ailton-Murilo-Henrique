import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouterPage from "./router/RouterPage";
import { GlobalStyle, ContainerApp } from "./Pages/Styles";

const App = () => {
  return (
    <ContainerApp>
      <GlobalStyle />
      <RouterPage />
    </ContainerApp>
  );
};

export default App;
