import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLoginPage, goToPostPage } from "../../routes/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedData";
import { useRequestData } from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import axios from "axios";
import PostPage from "../PostPage/PostPage";
import { BASE_URL } from "../../constants/urls";
import arrowup from "../../assets/arrowup.png";
import arrowdown from "../../assets/arrow.png";
import arrowred from "../../assets/arrowred.png";
import arrowgreen from "../../assets/arrowgreen.png";
import comment from "../../assets/comment.png";
import logo from "../../assets/logo.png"


function FeedPage() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(5);
  const [reRenderPosts, setReRenderPosts] = useState(true);
  const [showCommentsArray, setShowCommentsArray] = useState([]);

  const token = localStorage.getItem("token");

  useProtectedPage(navigate);

  const data = useRequestData(visible, reRenderPosts);

  const { form, onChange, clearFields } = useForm({
    title: "",
    body: "",
  });

  const showComments = (postId) => {
    if (showCommentsArray.includes(postId)) {
      const newArray = showCommentsArray.filter((id) => {
        return id !== postId;
      });
      setShowCommentsArray(newArray);
    } else {
      setShowCommentsArray([...showCommentsArray, postId]);
    }
  };

  const renderPosts = data.map((post) => {
    return (
      <div>
        <div>
          <p id="username">Enviado por: {post.username}</p>
          <p id="title">{post.title}</p>
          <p id="body">{post.body}</p>
          <div>
            <div>
              {(post.userVote === null || post.userVote === -1) && (
                <img
                  src={arrowup}
                  alt="+"
                  onClick={() => createPostVote(post.id, 1)}
                />
              )}
              {post.userVote === 1 && (
                <img
                  src={arrowgreen}
                  alt="+"
                  onClick={() => deletePostVote(post.id)}
                />
              )}
              <p>{post.voteSum ? `${post.voteSum}` : 0}</p>
              {(post.userVote === null || post.userVote === 1) && (
                <img
                  src={arrowdown}
                  alt="-"
                  onClick={() => createPostVote(post.id, -1)}
                />
              )}
              {post.userVote === -1 && (
                <img
                  src={arrowred}
                  alt="-"
                  onClick={() => deletePostVote(post.id)}
                />
              )}
            </div>
            <div id="comments" onClick={() => showComments(post.id)}>
              <img src={comment} alt="comment" />
              <p>{post.commentCount ? `${post.commentCount}` : 0}</p>
            </div>
          </div>
        </div>
        {showCommentsArray.includes(post.id) && <PostPage id={post.id} />}
      </div>
    );
  });

  const createPost = () => {
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        alert("Post criado com sucesso!");
      })
      .catch((err) => {});
    clearFields();
  };

  const createPostVote = (id, choice) => {
    const body = {
      direction: choice,
    };

    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {});
  };

  const deletePostVote = (id) => {
    axios
      .delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <header>
        <img src={logo} alt="labenu-icone" />
        <button onClick={() => goToLoginPage(navigate, "logout")}>
          Logout
        </button>
      </header>
      <div onSubmit={createPost}>
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Título"
          required
        />
        <textarea
          name="body"
          value={form.body}
          onChange={onChange}
          placeholder="Escreva seu post"
          required
        ></textarea>
        <button type="submit" onClick={createPost}>Postar</button>
      </div>
      <hr />
      <div>{renderPosts}</div>
      <button onClick={() => setVisible(visible + 5)}>Ver mais</button>
      <div></div>
    </div>
  );
}

export default FeedPage;