import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;

`

export class Etapa1 extends React.Component{
    render(){
        return (
            <Container>

            <h2>ETAPA 1 - DADOS GERAIS</h2><br></br>
            <p>1. Qual o seu nome?</p>
            <input></input>
            <p>2. Qual a sua idade?</p>
            <input></input>
            <p>3. Qual o seu email?</p>
            <input></input>
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino Superior incompleto</option>
                <option>Ensino Superior completo</option>
            </select><br></br>
             

            </Container>
        );
    }
}


