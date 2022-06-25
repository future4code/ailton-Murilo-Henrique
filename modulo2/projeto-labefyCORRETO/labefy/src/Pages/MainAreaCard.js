import React from "react";
import styled from "styled-components";


const MainAreaCardContainer = styled.div`
  background-color: #2a2d2f;
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  :hover{
    background-color: #5f5f5f;
  }
  p {
    margin-left: 20px;
  }
  button {
    margin-right: 10px;
  }
`;

const CardImage = styled.img`
  height: 100%;
  width: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export default class MainAreaCard extends React.Component {
  render() {
    return (
      <MainAreaCardContainer onClick={this.props.trocarParaPlaylistMusics}>
        <CardImage src={"https://picsum.photos/200/200"} />
        <p key={this.props.playlistsProps.id}>
          {this.props.playlistsProps.name}
        </p>
        <button onClick={this.props.deletarPlaylist}>X</button>
      </MainAreaCardContainer>
    );
  }
}