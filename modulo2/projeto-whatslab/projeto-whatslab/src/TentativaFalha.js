// import "./App.css";
// import styled from "styled-components";
// import React from "react";
// import { render } from "@testing-library/react";

// const HeaderEdicao = styled.header`
//   height: 10vh;
//   background-color: darkgreen;
//   color: greenyellow;
//   width: 60vw;
// `;

// const AreaMensagens = styled.div`
//   height: 85vh;
//   background-color: red;
//   width: 60vw;
// `;
// const AreaFooter = styled.div`
//   width: 60vw;
//   height: 5vh;
//   display: flex;
//   flex-direction: row;
// `;

// class Aplicativo extends React.Component {
//   state = {
//     mensagens: [
//       {
//         nome: "Murilo",
//         texto: "Estou conseguindo realizar a atividade"
//       }
//     ],
//     valorInputPessoa: "",
//     valorInputTexto: ""
//   };
// }
// adicionaTextos = () => {
//   const novoTexto = {
//     nome: this.state.valorInputPessoa,
//     texto: this.state.valorInputTexto
//   };

//   const novosTextos = [...this.state.mensagens, novoTexto];

//   this.setState({ nome: novosTextos });
//   this.setState({ valorInputPessoa: "" });
//   this.setState({ valorInputTexto: "" });
// };
//   onChangeInputPessoa = (event) => {
//     this.setState({ valorInputPessoa: event.target.value });
//   };
//   onChangeInputTexto = (event) => {
//     this.setState({ valorInputTexto: event.target.value });
//   };

// render(){

//   const listaDeMensagens = this.state.mensagens.map((mensagens) => {
//     return (
//       <p>
//         {mensagens.nome} - {mensagens.texto}
//       </p>
//     );
//   });



// function App() {
//   return (
//     <div>
//       <HeaderEdicao>
//         <h1>WHATSTUBE</h1>
//       </HeaderEdicao>

//       <AreaMensagens>
//         <p>
//          {listaDeMensagens}
//         </p>
//       </AreaMensagens>

//       <AreaFooter>
//         <input
//           value={this.state.valorInputPessoa}
//           onChange={this.onChangeInputPessoa}
//           placeholder={"Nome"}
//         />
//         <input
//           value={this.state.valorInputTexto}
//           onChange={this.onChangeInputTexto}
//           placeholder={"Mensagem"}
//         />
//         <button onClick={this.adicionaTextos}>ENVIAR</button>
//       </AreaFooter>
//     </div>
//   );
// }

// export default App;
