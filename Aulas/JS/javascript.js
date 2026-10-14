//comentario


// Tres formas de declarar uma variavel  (sem tipo)


//O var e o lef se distinguem pelo escopo e declaracação

let nome = "Robson"
var sobrenome; 

if(nome == "Robson"){
    sobrenome = "Machado"
    let idade = 20;
    var pet = "dog";
    console.log("nome: " + nome + " Sobrenome: " + sobrenome + " idade: " + idade + " pet: " + pet)
}

//console.log("nome: " + nome + " Sobrenome: " + sobrenome + " idade: " + idade + " pet: " + pet)
let idade = 20;

if(idade == "20"){ //Compara se o valor da variável é igual 
    console.log("A")
}
if(idade === "20"){ //Compara o valor e o tipo da variavel 
    console.log("B")
}

peso = 80;
altura = 1.80;
imc = peso / (altura * altura);

if(imc < 18.5){
    console.log("Abaixo do peso")
}
else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal");
}
else if(imc >= 25){
    console.log("Acima do peso");
}


//switch case estrutura de selecao

a=2
switch(a){
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D");
}


//Estrutura de repeticao

let i = 0;

while(i<5){
    console.log(i);
    i++;
}

//for

for(let i = 0; i<5; i++){
    console.log(i);
}

//arrays

let carnes = ["picanha", "costela", "alcatra", "fraldinha"];



carnes.forEach( (v1, index) =>{
    console.log(v1 + "index:" + index);
})



var ItemChurrasco = [];
ItemChurrasco.push("Costela")
ItemChurrasco.push("Costela")
ItemChurrasco.push("Picanha")



for(let i = 0; i<ItemChurrasco.length-1; i++){
}

ItemChurrasco.forEach((e, i) =>{
    console.log(i+"-"+e);
})

nomev= "Joao Henrique Marcelo Boss"
console.log(nomev.split("").reverse().join(""));

//Funcao com array
//reverse, join, map

ItemChurrasco.map((e)=> {
    console.log(e.length);
})
//filter
console.log (ItemChurrasco.filter( (e, i) => {return i == 2}));
console.log (ItemChurrasco.filter( (e, i) => {

    return !e.split("").includes("P");



}));






