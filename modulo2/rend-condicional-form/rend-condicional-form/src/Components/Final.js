import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

export class Final extends React.Component {
  render() {
    return (
      <Container>
        <h2>O FORMULÁRIO ACABOU</h2>

        <p>Muito obrigado por participar </p>
      </Container>
    );
  }
}
