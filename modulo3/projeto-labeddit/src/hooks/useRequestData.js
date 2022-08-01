import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (visible, reRenderPosts) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(`${BASE_URL}/posts/?size=${visible}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data)
      })
  }, [visible, reRenderPosts]);

  return data
};