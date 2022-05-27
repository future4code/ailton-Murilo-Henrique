```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const salarioFixo = 2000

let comissao = (valorTotalVendas * 0.05)
let totalRecebidoCarros = (qtdeCarrosVendidos * 100)

const salario = (comissao + salarioFixo + totalRecebidoCarros)

return salario
}
```