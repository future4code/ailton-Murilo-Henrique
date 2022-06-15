import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import { SecaoCompartilhar } from "../src/components/SecaoCompartilhar";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputPost = styled.input``;
const InputArea = styled.div`
  display: flex;
`;
const InputButton = styled.button``;

class App extends React.Component {
  state = {
    listaDeUsuario: [
      {
        nomeUsuario: "paulinho",
        fotoUsuario: "https://picsum.photos/id/1012/3973/2639",
        fotoPost: "https://picsum.photos/id/1011/5472/3648",
      },
      {
        nomeUsuario: "paulo",
        fotoUsuario: "https://picsum.photos/id/1008/5616/3744",
        fotoPost: "https://picsum.photos/id/1024/1920/1280",
      },
      {
        nomeUsuario: "paulao",
        fotoUsuario: "https://picsum.photos/id/1003/1181/1772",
        fotoPost: "https://picsum.photos/id/1006/3000/2000",
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPostInserido = [...this.state.listaDeUsuario, novoPost];

    this.setState({listaDeUsuario: novoPostInserido});
    this.setState({
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});
  }

  render() {
    const listaDeUsuarios = this.state.listaDeUsuario.map((pessoa) => {
      return (
        <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <InputArea>
          <InputPost
            placeholder={"Nome do Usuario"}
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
          ></InputPost>
          <InputPost
            placeholder={"Foto do Usuario"}
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
          ></InputPost>
          <InputPost
            placeholder={"Foto do Post"}
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
          ></InputPost>
          <InputButton onClick={this.adicionarPost}>Adicionar Post</InputButton>
        </InputArea>

        {listaDeUsuarios}

        <SecaoCompartilhar></SecaoCompartilhar>
      </MainContainer>
    );
  }
}

export default App;
