import "./App.css";
import React, { Component } from "react";
import { Etapa1 } from "./Components/Etapa1";
import { Etapa2 } from "./Components/Etapa2";
import { Etapa3 } from "./Components/Etapa3";
import { Final } from "./Components/Final";
import styled from "styled-components";
import Labenu from "./img/labenu.png"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: larger;
background-color: #f8c390;
height: 100vh;
width: 100vw;
`

const Header = styled.div`
position: fixed;
top: 0;
margin-top: 15px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const LogoLabenu = styled.img`
width: 40px;

`

const Formulario = styled.div`
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: larger;
  border: 1px solid black;
  margin-top: 15px;
  padding: 15px;
`


class App extends React.Component {
  state = {
    etapaSelecionada: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapaSelecionada) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Final />;
        break;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapaSelecionada: this.state.etapaSelecionada + 1 });
  };
  retornarFormulário = () => {
    this.setState({ etapaSelecionada: 1 });
  };

  render() {
    return (
      <Container>
<Header>
  <h1>Bem-vindo ao LabenuForms</h1><LogoLabenu src={Labenu}></LogoLabenu>
</Header>


        <Formulario>
        {this.renderizaEtapa()}
        
        {this.state.etapaSelecionada !== 4 ? (
          <button onClick={this.proximaEtapa}>Próxima Etapa</button>
        ) : (
          <button onClick={this.retornarFormulário}>Reniciar Formulário</button>
        )}
        </Formulario>
      </Container>
    );
  }
}
export default App;
