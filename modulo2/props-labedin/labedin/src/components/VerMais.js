import React from "react";
import styled from "styled-components";

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 40%;
  margin: 10px auto;
  gap: 20px;
  border-radius: 50px 50px 50px 50px;
`;
const VerMais = styled.img`
  width: 30px;
  margin-right: 10px;
  margin-top: 20px;
`;

const VerMaisTexto = styled.a`
  margin-bottom: 15px;
`;

function SetaDiv(props) {
  return (
    <DivButton>
      <VerMais alt="" src={props.imagem} />
      <VerMaisTexto href={props.link}>{props.texto}</VerMaisTexto>
    </DivButton>
  );
}

export default SetaDiv;
