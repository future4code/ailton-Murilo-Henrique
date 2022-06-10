import React from 'react';
import styled from 'styled-components'


export const ContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    border: 1px solid black;
    margin-bottom: 10px;
    height: 10vh;
`

export const DivContainerPequeno = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    gap: 10px;
    height:10vh ;
    align-items: center;

`

export const ImagemCardPequeno = styled.img`
    width: 70px;
    margin-right: 10px;
    display: flex;
    
`

function CardPequeno(props) {
    return (
        <ContainerPequeno className="card-pequeno-container">
            <ImagemCardPequeno alt="" src={ props.imagem }/>
            <DivContainerPequeno>
                <h3>{props.titulo}</h3>
                <p>{ props.texto }</p>
            </DivContainerPequeno>    
        </ContainerPequeno>

    )
}

export default CardPequeno;