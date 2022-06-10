import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	flex-direction: column;
	gap: 10px;
	
`
const EdicaoBotao = styled.button`
	width: 60px;
	
`

const InputComentario = styled.input`
    width: 90%;
    margin-right: 5px;
	
`

export class SecaoComentario extends Component {
	
	state = {
		
		comentarios: [],
		
		texto: ""
	  };

	  adicionaComentario = () => {

		const novoComentario = this.state.texto;
	

		const novosComentarios = [...this.state.comentarios, novoComentario];
	
		
		this.setState({ comentarios: novosComentarios });
		this.setState({ texto: "" });
	  };

	  onChangeComentario = (event) => {
		
		this.setState({ texto: event.target.value });
	  };
	

	render() {

		const listaComentarios = this.state.comentarios.map((texto) => {
			return <p>{texto}</p>;
		  });

		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.texto}
				onChange={this.onChangeComentario}
			/>
			<EdicaoBotao onClick={this.props.aoEnviar}>Enviar</EdicaoBotao>
			<div>{listaComentarios}</div>
			
		</CommentContainer>
	}
}
