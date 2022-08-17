"use strict";
// 1. a) utiliza-se o comando process.argv[x]
//QUESTÃO 1b
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos.");

//QUESTÃO 1c
const futureAge = Number(process.argv[3]) + 7
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos. Em sete anos você terá ", futureAge,".");
