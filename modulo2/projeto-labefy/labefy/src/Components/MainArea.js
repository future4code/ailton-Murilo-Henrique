import React from "react";
import styled from "styled-components";
import axios from "axios";
import MainAreaCard from "./MainAreaCard";
import PlaylistMusics from "./PlaylistMusics";

const MainAreaContainerGeral = styled.div`
  background-color: #121212;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  overflow-x: hidden;
  color: white;
  h2 {
    padding-left: 10px;
  }
`;

const MainAreaContainer = styled.div`
  background-color: #121212;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 20px;
  overflow-x: hidden;
`;

export default class MainArea extends React.Component {
  render() {
    return (
      <MainAreaContainerGeral>
                <h2>Minhas Playlists</h2>
      <MainAreaContainer>
        {this.props.state.playlists.map((playlist, index) => {
          return (
            <MainAreaCard
              key={index}
              playlistsProps={playlist}
              state={this.props.state}
              deletarPlaylist={() => this.props.deletarPlaylist(playlist.id)}
              trocarParaPlaylistMusics={() =>
                this.props.trocarParaPlaylistMusics(playlist)
              }
              pegarMusicasDaPlaylist={() =>
                this.props.pegarMusicasDaPlaylist(playlist.id)
              }
            />
          );
        })}
      </MainAreaContainer>
      </MainAreaContainerGeral>
    );
  }
}