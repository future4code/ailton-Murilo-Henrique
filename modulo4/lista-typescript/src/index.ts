// EXERCICIO 1:

function dadoDoUsuario(nome:string, dataDeNascimento:string):string{

    const [dia, mes, ano] = dataDeNascimento.split("/")

    return `Olá me chamo ${nome}, nasci dia ${dia} do mês de ${mes} do ano de ${ano}`
}

console.log("Exercicio 1:",dadoDoUsuario("Murilo", "21/01/1998"))

// EXERCICIO 2:

function variasPossibilidades(variavel:any):void{
    console.log("Exercicio 2:", typeof variavel)
}

variasPossibilidades(true)

// EXERCICIO 3: 

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
  }
  
  type filme = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuacao?: number;
  };
  
  const organizaEmType = (
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number
  ): filme => {
    if (nota) {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota
      };
    } else {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero
      };
    }
  };
  console.log("Exercicio 3:", organizaEmType("Duna", 2021, GENERO.ACAO, 74));