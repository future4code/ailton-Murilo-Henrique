import React from "react";
import styled from "styled-components";


const PlayerAreaContainer = styled.div`
  background-color: #181818;
  grid-column: 1 / 3;
`;

export default class PlayerArea extends React.Component {
  render() {
    return (
      <PlayerAreaContainer>
        <audio controls>
          <source src={this.props.state.musicaTocando} type="audio/mp3" />
        </audio>
      </PlayerAreaContainer>
    )
  }
}