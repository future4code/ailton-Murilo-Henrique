import styled, { createGlobalStyle } from "styled-components";

// Global STYLING

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;
export const ContainerApp = styled.div`
 
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  width: 100%;
  height: 100px;
  background-color: black;
`;

export const ImgHeader = styled.img`
  height: 100%;
`;

//AdminHomePage STYLING

export const ContainerAdminPage = styled.div`
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

export const ButtonAreaAdmin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
`;

export const BackButtonAdmin = styled.button`
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

export const CreateTripButton = BackButtonAdmin;
export const LogoutButton = BackButtonAdmin;

export const AdminTripsArea = styled.div`
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

export const TravelCardAdmin = styled.div`
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

// ApplicationFormPage STYLING

export const ApplicationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

`;

export const FormSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  form,
  input {
    margin-bottom: 15px;
  }
  form,
  select,
  input {
    width: 500px;
  }
  select,
  input {
    padding: 5px;
    margin-bottom: 15px;
  }
  h1 {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export const ButtonAreaFormPage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
`;

export const BackButtonFormPage = styled.div`
  padding: 10px;
  min-width: 20%;
  display: flex;
  justify-content: center;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

export const SendButtonFormPage = styled.button`
  padding: 10px;
  min-width: 20%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

// CreateTripPage STYLING

export const CreateTripContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  
`;

export const FormSelectContainerCreateTrip = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  div,
  input {
    margin-bottom: 15px;
  }
  form,
  select,
  input {
    width: 500px;
  }
  select,
  input {
    padding: 5px;
  }
  h1 {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export const ButtonAreaCreateTrip = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: 20px;
`;

export const BackButtonCreateTrip = styled.span`
  padding: 10px;
  display: flex;
  justify-content: center;
  min-width: 30%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

export const ButtonCreateTrip = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  min-width: 30%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

// HOME PAGE STYLING

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BodyHome = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  background-image: url("https://mega.ibxk.com.br//2020/07/17/17103741568418.jpg?ims=1200x480");
  background-size: cover;
  color: white;
  justify-content: space-between;
  padding-right: 200px;
`;
export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 150px;
  gap: 20px;
  align-items: center;
`;

export const ImgHome = styled.img`
  height: 100%;
  width: 50%;
  padding-left: 50px;
`;

export const LogoHome = styled.img`
  width: 45%;
`;
export const ButtonHome = styled.button`
  height: 60px;
  width: 400px;
  background-color: black;
  color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.2, 1.2);
  }
`;

// ListTripPages STYLING

export const ContainerTripsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  flex-wrap: wrap;
`;

export const ButtonAreaListTrip = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const BackButtonListTrip = styled.button`
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

export const SubscribeButton = BackButtonListTrip;

export const TravelArea = styled.div`
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

export const TravelCardListTrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0px 2px 10px gray;
  margin-bottom: 20px;
  width: 100%;
  p {
    margin-bottom: 5px;
  }
`;

// LoginPage STYLING

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 15px;
  }
`;

export const FormAreaLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 15px;
    width: 500px;
    padding: 5px;
  }
`;

export const ButtonAreaLogin = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 10px;
`;

export const BackButtonLogin = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  min-width: 20%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

export const LoginButton = styled.button`
  padding: 10px;
  min-width: 20%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

// TripDetailsPage STYLING

export const ContainerTripDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const TripDetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    max-width: 500px;
    margin-bottom: 10px;
  }
`;

export const CandidatesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 2px 10px gray;
  width: 40%;
  padding: 20px;
  margin-bottom: 20px;
  p {
    margin-bottom: 10px;
  }
`;

export const ButtonAreaTripDetails = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px;
`;

export const BackButtonTripDetails = styled.button`
  padding: 10px;
  min-width: 8%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
  :hover {
    background-color: #dae5e8;
  }
`;
