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

  // EXERCICIO 4: 

  enum SETORES {
    MARKETING = "Marketing",
    FINANCEIRO = "Financeiro",
    VENDAS = "Vendas"
  }

  type Funcionario = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean
  }

  const funcionarios: Funcionario[] = [
	{ nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
]

function retornaMarketingPresencial (lista: Funcionario[]): Array<Funcionario> {
    const listaAtualizada: Funcionario[] = lista.filter((funcionario) => {
      return  funcionario.setor === SETORES.MARKETING && funcionario.presencial === true
    })
    return listaAtualizada
}
console.log("Exercicio 4:")
console.table(retornaMarketingPresencial(funcionarios))

// EXERCICIO 5:

type Usuario = {
    name: string,
    email: string, 
    role: string
}


const usuarios: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaEmailAdmins(lista: Usuario[]): string[] {
    const usuarioFiltrado: Usuario[] = lista.filter((usuario) =>{
        return usuario.role === "admin"
    })
    const emails: string[] = usuarioFiltrado.map((usuario) => {
        return usuario.email
    })
    return emails
}
console.log("Exercicio 5:")
console.table(retornaEmailAdmins(usuarios))

// EXERCICIO 6: 

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}


const contasClientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
 
const criaListaDeContasNegativadas = (contasClientes: Cliente[]): Cliente[] => {
    contasClientes.forEach((cliente) => {
        let soma = 0 
        for (let i = 0; i <= cliente.debitos.length - 1; i++) {
            soma += cliente.debitos[i]
        }
        cliente.saldoTotal = cliente.saldoTotal - soma 
        cliente.debitos = []
    })
    const listaDeSaldosNegativos = contasClientes.filter((cliente) => {
        return cliente.saldoTotal < 0
    })
    return listaDeSaldosNegativos
}

console.log("Exercicio 6:",criaListaDeContasNegativadas(contasClientes))

// EXERCICIO 7: 

type Produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const estoque: Produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const atualizaEOrdenaEstoque = (estoque: Produto[]) => {
    estoque.forEach((produto) => {
        produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)
    })
    const estoqueOrdenado = estoque.sort((a,b) => {
        if (a.quantidade > b.quantidade){
            return 1
        } else if (a.quantidade < b.quantidade){
            return -1
        }else {
            return 0
        }
    })
    return estoqueOrdenado
}
console.log("Exercicio 7:")
console.table(atualizaEOrdenaEstoque(estoque))

// EXERCICIO 8:

const exercicio8 = (
    dataNascimento: string,
    dataDocumento: string
  ): boolean | string => {
    const dataAtualTimestamp: number = new Date().getTime();
    const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
    const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
    const anoNascTimestamp: number = new Date(
      `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
    ).getTime();
    const dataDocTimestamp: number = new Date(
      `${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`
    ).getTime();
    const idade: number = dataAtualTimestamp - anoNascTimestamp;
    const ultimaRenovacao: number = dataAtualTimestamp - dataDocTimestamp;
    const umAnoEmTimestamp: number = 31556926000;
  
    if (idade <= 20 * umAnoEmTimestamp) {
      return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
    } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
      return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
    } else if (idade >= 50 * umAnoEmTimestamp) {
      return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
    } else {
      return "algo deu errado";
    }
  };
  console.log("Exercicio 8:", exercicio8("21/01/1998", "05/04/2022"));

// EXERCICIO 9:

const exercicio9 = (palavra: string): number => {
    let quantidadeLetras = palavra.length
    
    if (quantidadeLetras === 0){
        return 1;
    }
    let resultado = 1

    for(let i = quantidadeLetras; i > 0; i--){
        resultado *= i
    }

    return resultado
}
console.log("Exercicio 9:", exercicio9("Murilo"))

// EXERCICIO 10:

const verificaPrimeiroDigito = (digitos: string): boolean => {
    let multiplicador = 10,
      somatorio = 0;
    for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
      var digito = Number(digitos.charAt(_i));
      somatorio += digito * multiplicador;
    }
    let modOnze = somatorio % 11;
    let resultado = 11 - modOnze;
    if (resultado >= 10) {
      resultado = 0;
    }
    return resultado === Number(digitos.charAt(9));
  };

  const verificaSegundoDigito = (digitos: string): boolean => {
    let multiplicador = 11,
      somatorio = 0;
    for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
      var digito = Number(digitos.charAt(_i));
      somatorio += digito * multiplicador;
    }
    let modOnze = somatorio % 11;
    let resultado = 11 - modOnze;
    if (resultado >= 10) {
      resultado = 0;
    }
    return resultado === Number(digitos.charAt(10));
  };
  
  function mesmosDigitos(cpf: string) {
    var i = cpf.length;
    var char = cpf.charAt(0);
    while (i--) {
      if (cpf[i] !== char) {
        return false;
      }
    }
    return true;
  }
  
  const exercicio10 = (cpf: string): boolean => {

    let cpfApenasNumeros = cpf.split(".").join("");
    cpfApenasNumeros = cpfApenasNumeros.replace("-", "");

    if (!mesmosDigitos(cpfApenasNumeros)) {

      if (verificaPrimeiroDigito(cpfApenasNumeros)) {
        if (verificaSegundoDigito(cpfApenasNumeros)) {
          return true;
        }
      }
    }
    return false;
  };
  

  console.log("Exercicio 10:",exercicio10("459.550.548.55"));


// EXERCICIO 11:

const exercicio11 = (numeroInicial: number): string => {
    const numRomanos: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let romanos = "",
      i;
    for (i in numRomanos) {
      while (numeroInicial >= numRomanos[i]) {
        romanos += i;
        numeroInicial -= numRomanos[i];
      }
    }
    return romanos;
  };
  console.log("Exercicio 11:", exercicio11(1998));
