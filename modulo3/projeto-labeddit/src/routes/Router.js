import React from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.js/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/post/:id" element={<PostPage/>} />
                <Route path="/sign-up" element={<SignUpPage/>} />
                <Route path="/" element={<FeedPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router



