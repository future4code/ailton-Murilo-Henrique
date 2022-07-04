import React from "react";
import styled from "styled-components";
import InicioImg from "../img/inicio1.png"
import CriarPlaylistImg from "../img/criar-playlist.png"

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
  `;

const SideBarCardCriarPlaylist = styled.div`
  width: 100%;
  cursor: pointer;
  
  
`;

const SideBarCardMinhasPlaylists = styled.div`
  width: 100%;
  cursor: pointer;
    align-items: center;
  :hover {
    background-color: #282828;
  }
`;

export default class SideBar extends React.Component {
  render() {
    return (
      <SideBarContainer>
        <SideBarCardInicio onClick={this.props.trocarParaInicio}>
          <img src={InicioImg} alt=""></img>
        </SideBarCardInicio>
        <SideBarCardCriarPlaylist onClick={this.props.trocarParaCriarPLaylist}>
            <img src={CriarPlaylistImg} alt=""></img>
        </SideBarCardCriarPlaylist>
        <SideBarCardMinhasPlaylists
          onClick={this.props.trocarParaPlaylistMusics}
        >
        </SideBarCardMinhasPlaylists>
      </SideBarContainer>
    );
  }
}