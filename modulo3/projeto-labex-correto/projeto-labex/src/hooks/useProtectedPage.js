import { useEffect } from "react";
import { useNavigate } from "react-router";

const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            navigate('/login')
            alert('Você precisa estar logado para acessar essa página')
        }
    }, [navigate])
}

export default useProtectedPage