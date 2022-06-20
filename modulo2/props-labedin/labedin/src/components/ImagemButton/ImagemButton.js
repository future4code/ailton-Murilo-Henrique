import React from "react";
import styled from "styled-components";

export const DivButton = styled.div`
  width: 50%;
  margin: 10px auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px 50px 50px 50px;
`;
export const ImagensButton = styled.img`
  width: 40px;

  margin-top: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const VerMaisTexto = styled.a`
  margin-bottom: 10px;
`;

function ImagemButton(props) {
  return (
    <DivButton>
      <ImagensButton alt="" src={props.imagem} />
      <VerMaisTexto href={props.link}>{props.texto}</VerMaisTexto>
    </DivButton>
  );
}

export default ImagemButton;
