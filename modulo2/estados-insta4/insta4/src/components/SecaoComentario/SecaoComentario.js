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
		comentario: [ 
			{
			textoComentario: ''
			},
		],
	textoComentario: ''
	}

	  adicionaComentario = () => {

		const novoComentario = this.state.textoComentario;
	

		const novosComentarios = [...this.state.comentario, novoComentario];
	
		
		this.setState({ comentario: novosComentarios });
		this.setState({ textoComentario: "" });
	  };

	  onChangeComentario = (event) => {
		
		this.setState({
			textoComentario: event.target.value
		})
		console.log(event.target.value)
	}
	  
	

	render() {

		const listaComentarios = this.state.comentario.map((comentario) => {
			return <p>{comentario.textoComentario}</p>;
		  });

		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.textoComentario}
				onChange={this.onChangeComentario}
			/>
			<EdicaoBotao onClick={this.props.aoEnviar}>Enviar</EdicaoBotao>
			{listaComentarios}
			
		</CommentContainer>
	}
}
