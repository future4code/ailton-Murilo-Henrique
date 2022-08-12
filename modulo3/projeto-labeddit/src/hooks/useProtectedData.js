import { useEffect } from "react";
import { goToLoginPage } from "../routes/coordinator";


export const useProtectedPage = (navigate) => {

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token === null) {
      goToLoginPage(navigate)
      alert('Você precisa estar logado para acessar essa página')
    }
  }, [navigate]);
};