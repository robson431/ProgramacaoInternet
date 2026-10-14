//no navegador o js tem window
console.log(window.screen)

window.document.body.innerHTML = "<p> OLÀ</p>"

document.body.style.backgroundColor = "yellow"

let div = document.createElement("div");

let pnome = document.createElement("p");

pnome.innerHTML= "Informe seu nome "

div.appendChild(pnome);

document.body.appendChild(div);

div.appendChild(document.createElement("input"))



let pAltura = document.createElement("p")

pAltura.innerHTML = "Informe sua altura"

div.appendChild(pAltura);
temp = document.createElement("input")
temp.id = "inputAltura"

div.appendChild(temp)



let pPeso = document.createElement("p")

pPeso.innerHTML = "Informe seu peso"

div.appendChild(pPeso);
temp = document.createElement("input")
temp.id = "inputPeso"

div.appendChild(temp)



//adicionando botao
div.appendChild(document.createElement("br"))

tmp=document.createElement("button");

tmp.id = "btnCalcular"

tmp.innerHTML = "calcular"

div.append(tmp)


tmp.addEventListener("click", () =>{
inputPeso=document.getElementById("inputPeso")
inputAltura=document.getElementById("inputAltura")
peso=Number.parseFloat(inputPeso.value)
altura=Number.parseFloat(inputAltura.value)
imc = peso/(altura * altura);
console.log(imc)


result = document.createElement("p");
result.innerHTML = imc;
div.appendChild(result);



})


