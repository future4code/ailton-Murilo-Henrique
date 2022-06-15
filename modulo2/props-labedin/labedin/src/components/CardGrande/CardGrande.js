import React from "react";
import styled from "styled-components";

export const ContainerBigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`

export const BigCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    
`

export const BigCardTitulo = styled.h4`
    margin-bottom: 15px;
`

const DivBigCard = styled.div`
    display: flex;
    flex-direction: column;

`



function CardGrande(props) {
  return (
    <ContainerBigCard>
      <BigCardImg alt="" src={props.imagem} />
      <DivBigCard>
        <BigCardTitulo>{props.nome}</BigCardTitulo>
        <p>{props.descricao}</p>
      </DivBigCard>
    </ContainerBigCard>
  );
}

export default CardGrande;
