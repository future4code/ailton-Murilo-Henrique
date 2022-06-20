import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export class Etapa2 extends React.Component {
  render() {
    return (
      <Container>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

        <p>5. Qual curso?</p>
        <input></input>
        <p>6. Qual a unidade de ensino?</p>
        <input></input>

      </Container>
    );
  }
}
