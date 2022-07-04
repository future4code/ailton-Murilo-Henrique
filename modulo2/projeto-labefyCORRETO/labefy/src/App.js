import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import MainArea from "./Pages/MainArea";
import SideBar from "./Pages/SideBar";
import PlayerArea from "./Pages/PlayerArea";
import CriarPlaylist from "./Pages/CriarPlaylist";
import PlaylistMusics from "./Pages/PlaylistMusics";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 89vh 11vh;
  justify-items: stretch;
  align-items: stretch;
`;

export default class App extends React.Component {
  state = {
    playlists: [],
    playlistName: "",
    telaAtual: "",
    playlistSelecionada: "",
    detalhesPlaylist: [],
    inputMusicName: "",
    inputArtistName: "",
    inputTrackUrl: "",
    musicaTocando: '',
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  tocarMusica = (musicaUrl) => {
    this.setState({musicaTocando: musicaUrl})
    console.log(this.state.musicaTocando)
  }

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "murilo-caun-ailton"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  criarPlaylists = (playlistName) => {
    const playlistCriada = this.state.playlists.find(
      (playlistAchada) => playlistName === playlistAchada.name
    );

    if (playlistCriada) {
      alert("Uma playlist com esse nome já existe");
      console.log("Uma playlist com esse nome já existe");
    } else {
      const body = {
        name: this.state.playlistName
      };

      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          body,
          {
            headers: {
              Authorization: "murilo-caun-ailton"
            }
          }
        )
        .then((resposta) => {
          this.setState({ playlistName: "" });
          this.pegarPlaylists();
          alert("Playlist criada com sucesso");
          console.log(resposta.data);
        })
        .catch((erro) => {
          alert(erro);
        });
    }
  };

  deletarPlaylist = (id) => {
    if (window.confirm("Tem certeza que deseja deletar?")) {
      const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" +
        id;
      axios
        .delete(url, {
          headers: {
            Authorization: "murilo-caun-ailton"
          }
        })
        .then((resposta) => {
          const novaLista = [...this.state.playlists];
          const novaListaFiltrada = novaLista.filter((filtro) => {
            return filtro.id !== id;
          });
          this.setState({ playlists: novaListaFiltrada });
          alert("Playlist deletada com sucesso");
          // this.pegarPlaylists();
        })
        .catch((erro) => {
          alert("Ops, algo de errado");
          console.log(erro.message);
        });
    } else {
      alert("A playliste foi mantida");
    }
  };

  adicionarMusicaNaPlaylist = () => {
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtistName,
      url: this.state.inputTrackUrl
    };
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada.id}/tracks`;

    axios
      .post(url, body, {
        headers: {
          Authorization: "murilo-caun-ailton"
        }
      })
      .then((resposta) => {
        console.log(resposta);
        const novaListaDeMusica = [...this.state.detalhesPlaylist, body];
        this.setState({
          detalhesPlaylist: novaListaDeMusica,
          inputMusicName: "",
          inputArtistName: "",
          inputTrackUrl: ""
        });
        // this.pegarPlaylists();
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  deletarMusicaDaPlaylist = (musicId) => {
    if (window.confirm("Tem certeza que deseja deletar a música?")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada.id}/tracks/${musicId}`;
      axios
        .delete(url, {
          headers: {
            Authorization: "murilo-caun-ailton"
          }
        })
        .then((resposta) => {
          const novaLista = [...this.state.detalhesPlaylist];
          const listaFiltrada = novaLista.filter((filtro) => {
            return filtro.id !== musicId;
          });
          this.setState({ detalhesPlaylist: listaFiltrada });
          alert("Música deletada :)");
          // this.pegarPlaylists();
        })
        .catch((erro) => {
          console.log("erro [e aqui");
          console.log(erro.message);
        });
    } else {
      alert("A playliste foi mantida");
    }
  };

  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value });
    console.log(this.state.playlistName);
  };

  qualTelaEsta = () => {
    switch (this.state.telaAtual) {
      case "inicio":
        return (
          <MainArea
            state={this.state}
            deletarPlaylist={this.deletarPlaylist}
            trocarParaPlaylistMusics={this.trocarParaPlaylistMusics}
            pegarMusicasDaPlaylist={this.pegarMusicasDaPlaylist}
          />
        );
      case "criarPlaylist":
        return (
          <CriarPlaylist
            state={this.state}
            onChangePlaylistName={this.onChangePlaylistName}
            criarPlaylists={this.criarPlaylists}
          />
        );
      case "playlistMusics":
        return (
          <PlaylistMusics
            state={this.state}
            pegarMusicasDaPlaylist={this.pegarMusicasDaPlaylist}
            onChangeNomeMusica={this.onChangeNomeMusica}
            onChangeNomeArtista={this.onChangeNomeArtista}
            onChangeTrackUrl={this.onChangeTrackUrl}
            adicionarMusicaNaPlaylist={this.adicionarMusicaNaPlaylist}
            deletarMusicaDaPlaylist={this.deletarMusicaDaPlaylist}
            tocarMusica={this.tocarMusica}
          />
        );
      default:
        return (
          <MainArea
            state={this.state}
            deletarPlaylist={this.deletarPlaylist}
            trocarParaPlaylistMusics={this.trocarParaPlaylistMusics}
          />
        );
       
    }
  };

  trocarParaInicio = () => {
    this.setState({ telaAtual: "inicio" });
  };

  trocarParaCriarPLaylist = () => {
    this.setState({ telaAtual: "criarPlaylist" });
  };

  trocarParaPlaylistMusics = (playlistNome) => {
    this.setState({
      telaAtual: "playlistMusics",
      playlistSelecionada: playlistNome
    });

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistNome.id}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: "murilo-caun-ailton"
        }
      })
      .then((resposta) => {
        this.setState({ detalhesPlaylist: resposta.data.result.tracks });
        console.log(this.state.detalhesPlaylist);
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  onChangeNomeMusica = (event) => {
    this.setState({ inputMusicName: event.target.value });
  };

  onChangeNomeArtista = (event) => {
    this.setState({ inputArtistName: event.target.value });
  };

  onChangeTrackUrl = (event) => {
    this.setState({ inputTrackUrl: event.target.value });
  };


  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <SideBar
          state={this.state}
          trocarParaInicio={this.trocarParaInicio}
          trocarParaCriarPLaylist={this.trocarParaCriarPLaylist}
        />
        {this.qualTelaEsta()}
        <PlayerArea 
        state={this.state}
        />
      </AppContainer>
    );
  }
}