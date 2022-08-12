type pokemon = {
    name: string;
    types: string;
    healthPoints: number;
  };
  
  const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28,
  };
  
  const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31,
  };
  
  const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35,
  };
  
// c: para transpilar utiliza-se o comando "tsc && .build/ex4.js", assim ele converte em JS os arquivos TS na pasta build.