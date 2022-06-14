import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export class Etapa3 extends React.Component {
  render() {
    return (
      <Container>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

        <p>5. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>6. Você fez algum curso complementar?</p>
        <select>
          <option>Nenhum</option>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
        </select>
  
      </Container>
    );
  }
}
