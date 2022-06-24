import React from "react";
import styled from "styled-components";
import axios from "axios";

const CriarPlaylistContainer = styled.div`
  background-color: #121212;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  color: white;
`;

const CriarPlaylistHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
`;

const CriarPlaylistHeaderInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

export default class CriarPlaylist extends React.Component {
  render() {
    const playlistName = this.props.state.playlists.map((playlists) => {
      return playlists.name;
    });
    return (
      <CriarPlaylistContainer>
        <h2>Crie sua Playlist</h2>
        <CriarPlaylistHeader>
          <img src={"https://picsum.photos/200/200"} />
          <CriarPlaylistHeaderInput>
            <p>Playlist</p>
            <input
              placeholder={"Nome da playlist"}
              value={this.props.state.playlistName}
              onChange={this.props.onChangePlaylistName}
            />
            <button onClick={() => this.props.criarPlaylists(playlistName)}>
              Criar Playlist
            </button>
          </CriarPlaylistHeaderInput>
        </CriarPlaylistHeader>
      </CriarPlaylistContainer>
    );
  }
} 