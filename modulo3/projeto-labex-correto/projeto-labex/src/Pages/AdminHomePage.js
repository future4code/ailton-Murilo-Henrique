import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import TripDetailsPage from "./TripDetailsPage";
import useProtectedPage from "../hooks/useProtectedPage";

const ContainerAdminPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  flex-wrap: wrap;
  h1 {
    margin-bottom: 10px;
  }
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  min-width: 8%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const CreateTripButton = BackButton;
const LogoutButton = BackButton;

const AdminTripsArea = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 10px;
  }
`;

const TravelCard = styled.div`
  display: flex;
  flex-direction: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 2px 10px gray;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  p {
    margin-bottom: 5px;
  }
  button {
    margin-right: 10px;
    padding: 5px;
  }
  :hover {
    background-color: #b5dfeb;
  }
`;

const AdminHomePage = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const createTrip = () => {
    navigate("/admin/trips/create");
  };

  const logOut = () => {
    navigate("/login");
  };

  const goToTripDetails = (id, token) => {
    navigate(`/admin/trips/${id}`);
  };

  const data = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips", "getTrips"
  );

  const deleteTrip = (tripId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${tripId}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log(response)
      alert('Viagem deletada com sucesso')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <ContainerAdminPage>
      {console.log(window.localStorage.getItem('token'))}
      <h1>Painel Administrativo</h1>
      <ButtonArea>
        <BackButton onClick={goBack}>Voltar</BackButton>
        <CreateTripButton onClick={createTrip}>Criar Viagem</CreateTripButton>
        <LogoutButton onClick={logOut}>Logout</LogoutButton>
      </ButtonArea>
      <AdminTripsArea>
        {data &&
          data.data &&
          data.data.trips.map((data) => {
            return (
              <TravelCard key={data.name} onClick={() => goToTripDetails(data?.id)}>
                <p>{data.name}</p>
                <button onClick={() => deleteTrip(data.id)}>X</button>
              </TravelCard>
            );
          })}
      </AdminTripsArea>
    </ContainerAdminPage>
  );
};

export default AdminHomePage;
