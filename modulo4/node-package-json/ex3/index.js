//QUESTÃO 3
const tasks = ['Wake up',
'Brush teeth',
'Drink water'];
let newtask = process.argv[2];
let tasksList = [...tasks, newtask]

console.log('Tarefa adicionada com sucesso:', tasksList); 