import React from "react";
import styled from "styled-components";
import axios from "axios";

const SideBarContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  color: white;
`;

const SideBarCardInicio = styled.div`
  width: 100%;
  cursor: pointer;
  padding-left: 10px;
  :hover {
    background-color: #282828;
  }
`;

const SideBarCardCriarPlaylist = styled.div`
  width: 100%;
  cursor: pointer;
  padding-left: 10px;
  :hover {
    background-color: #282828;
  }
`;

const SideBarCardMinhasPlaylists = styled.div`
  width: 100%;
  cursor: pointer;
  padding-left: 10px;
  :hover {
    background-color: #282828;
  }
`;

export default class SideBar extends React.Component {
  render() {
    return (
      <SideBarContainer>
        <SideBarCardInicio onClick={this.props.trocarParaInicio}>
          <p>Inicio</p>
        </SideBarCardInicio>
        <SideBarCardCriarPlaylist onClick={this.props.trocarParaCriarPLaylist}>
          <p>Criar Playlist</p>
        </SideBarCardCriarPlaylist>
        <SideBarCardMinhasPlaylists
          onClick={this.props.trocarParaPlaylistMusics}
        >
        </SideBarCardMinhasPlaylists>
      </SideBarContainer>
    );
  }
}