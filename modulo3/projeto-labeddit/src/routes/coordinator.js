export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1);
  };

export const goToSignUp = (navigate) => {
    navigate("/sign-up")
}