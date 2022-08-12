export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goToLoginPage = (navigate, logout) => {
    navigate("/");
    if (logout === "logout") {
      window.localStorage.clear();
    }
  };

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goBack = (navigate) => {
    navigate(-1);
  };

export const goToSignUpPage = (navigate) => {
    navigate("/sign-up")
}