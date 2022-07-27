import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import TripDetailsPage from "./TripDetailsPage";
import useProtectedPage from "../hooks/useProtectedPage";
import LogoHeader from "../images/labexHeader.png";
import {
  ContainerAdminPage,
  ButtonAreaAdmin,
  BackButtonAdmin,
  CreateTripButton,
  LogoutButton,
  AdminTripsArea,
  TravelCardAdmin,
  Header,
  ImgHeader
} from "./Styles";

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
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips",
    "getTrips"
  );

  const deleteTrip = (tripId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-caun-ailton/trips/${tripId}`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Viagem deletada com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerAdminPage>
      <Header>
        <ImgHeader src={LogoHeader} />
      </Header>
      <AdminTripsArea>
      {console.log(window.localStorage.getItem("token"))}
      <h1>Painel Administrativo</h1>
      <ButtonAreaAdmin>
        <BackButtonAdmin onClick={goBack}>Voltar</BackButtonAdmin>
        <CreateTripButton onClick={createTrip}>Criar Viagem</CreateTripButton>
        <LogoutButton onClick={logOut}>Logout</LogoutButton>
      </ButtonAreaAdmin>
      
        {data &&
          data.data &&
          data.data.trips.map((data) => {
            return (
              <TravelCardAdmin
                key={data.name}
                onClick={() => goToTripDetails(data?.id)}
              >
                <p>{data.name}</p>
                <button onClick={() => deleteTrip(data.id)}>X</button>
              </TravelCardAdmin>
            );
          })}
      </AdminTripsArea>
    </ContainerAdminPage>
  );
};

export default AdminHomePage;
