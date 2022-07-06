import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtida, setCurtida] = useState(false)
  const [contador, setContador] = useState(0)
  const [comment, setComment] = useState(false)
  const [allCommnents, setAllComents] = useState([])

  const onClickCurtida = () => {
    if (curtida) {
      setCurtida(!curtida)
      setContador(contador - 1)
    } else {
      setCurtida(!curtida)
      setContador(contador + 1)
    }
  };

  const onClickComentario = () => {
    setComment(!comment)
    
  };

  const enviarComentario = (comentario) => {
    const listaComentarios = [...allCommnents, comentario]
    setAllComents(listaComentarios)
    setComment("");
  }

  const mostraMensagem = allCommnents.map((comentario, item) => {
    return (
      <p key={item}>{comentario}</p>
    )
  })

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={curtida ? (iconeCoracaoPreto) : (iconeCoracaoBranco)}
          onClickIcone={onClickCurtida}
          valorContador={contador}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={allCommnents.length}
        />
      </PostFooter>
      {comment && <SecaoComentario
        enviarComentario={enviarComentario} />}
      {mostraMensagem}
    </PostContainer>
  )
}

export default Post 