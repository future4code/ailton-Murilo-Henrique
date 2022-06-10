import React from 'react';
import styled from 'styled-components'

export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    margin: 10px auto;
    gap: 20px;
    
`
const ImagensButton = styled.img`
        width: 30px;
        margin-right: 10px;
    
`

function ImagemButton(props) {
    return (
        <DivButton>
            <ImagensButton alt="" src={props.imagem}/>
            <a href={props.link}>{props.texto}</a>
        </DivButton>
        
    )
}

export default ImagemButton;