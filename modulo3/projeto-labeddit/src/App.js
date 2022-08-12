import React from "react";
import ErrorPage from "./pages/ErrorPage.js/ErrorPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostPage from "./pages/PostPage/PostPage";
import SignInPage from "./pages/SignUpPage/SignUpPage";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #acacac;
  };
  `;

const App = () => {
  return (
      <div>
      <GlobalStyle />
      <Router />
      </div>
  );
};

export default App;
