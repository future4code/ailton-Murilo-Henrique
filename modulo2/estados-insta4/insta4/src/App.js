import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinho'}
          fotoUsuario={'https://picsum.photos/id/1012/3973/2639'}
          fotoPost={'https://picsum.photos/id/1011/5472/3648'}
        />

        <Post
          nomeUsuario={'paulo'}
          fotoUsuario={'https://picsum.photos/id/1008/5616/3744'}
          fotoPost={'https://picsum.photos/id/1024/1920/1280'}
        />

        <Post
          nomeUsuario={'paulao'}
          fotoUsuario={'https://picsum.photos/id/1003/1181/1772'}
          fotoPost={'https://picsum.photos/id/1006/3000/2000'}
        />
      </MainContainer>
    );
  }
}

export default App;
