import React, {Component} from 'react'
import styled from 'styled-components'


const AreaCompartilhar = styled.div `
    display: none;
    flex-direction:column;
    z-index: 999;
    height: 300px;
    width: 400px;
    position: absolute;
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
` 

const AreaImagem = styled.div `
    display: flex;
    width: 100%;
    border-bottom: 1px solid black;
    cursor: pointer;
    :hover {
        background-color:lightgrey;
        
    }
` 
const AreaTitulo = styled.h4`
	margin-left: 120px;
`
const IconImage = styled.img`
	margin-right: 5px;
    height: 40px;
    width:40px;
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: 20px;
`
const TextoP = styled.p`
	margin-left: 5px;
`
export class SecaoCompartilhar extends Component {

    render() {
        return(
            <AreaCompartilhar>
                <AreaImagem>
                    <AreaTitulo>Compartilhar em...</AreaTitulo>
                </AreaImagem>
                <AreaImagem>
                    <IconImage alt={'Icone'} src={"https://cdn-icons-png.flaticon.com/512/124/124010.png"} onClick={this.props.onClickCompartilhar}/>
                    <TextoP>Compartilhar em Facebook</TextoP>
                </AreaImagem>
                <AreaImagem>
                    <IconImage alt={'Icone'} src={"https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png"} onClick={this.props.onClickCompartilhar}/>
                    <TextoP>Compartilhar em Instagram</TextoP>
                </AreaImagem>
                <AreaImagem>
                    <IconImage alt={'Icone'} src={"https://cdn-icons-png.flaticon.com/512/124/124021.png"} onClick={this.props.onClickCompartilhar}/>
                    <TextoP>Compartilhar em Twitter</TextoP>
                </AreaImagem>
            </AreaCompartilhar>
        )
    }
}