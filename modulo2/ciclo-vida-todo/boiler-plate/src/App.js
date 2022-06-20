import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0px;
  width: 200px;
 
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};

`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  padding:10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Warm-up",
        completa: false, 
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    {
      localStorage.setItem("id", JSON.stringify(this.state.tarefas));
  }
  }
  componentDidMount() {
    if(localStorage.getItem("id")){
      const arrayTarefasConvertido = JSON.parse(localStorage.getItem("id"));
      this.setState({tarefas: arrayTarefasConvertido})
    }

  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas];

    this.setState({ tarefas: novaListaDeTarefas });
    this.setState({ inputValue: "", filtro:"" });
    this.setState({addButton: "Nenhum"})
  };

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaListaDeTarefas });
  };

  onChangeFilter = (event) => {

    this.setState({filtro: event.target.value});

  };
  removerTudo = () => {
    const novaListaTarefaTotal = this.state.tarefas.filter((tarefa) => {
      return tarefa.id === this.state.tarefas;
    });
    this.setState({tarefas: novaListaTarefaTotal})
  }
  

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa} value={this.state.addButton}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
          <button onClick={this.removerTudo}>Remover Tudo</button>
        </TarefaList>
      </div>
    );
  }
}

export default App;
