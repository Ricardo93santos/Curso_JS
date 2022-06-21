//If-Else
let btn = document.querySelector("#enviar")
btn.addEventListener("click", mostrarResultado)
 
function mostrarResultado(){
    let idade = document.querySelector("#idade").value
    let res = document.querySelector("#res")
    if(idade == ""){
      res.innerHTML = "Informe uma idade"
    }else if(idade == 0 && idade <= 10){
      res.innerHTML = `Você é uma criança`
    }else if(idade >= 11 && idade <= 17){
      res.innerHTML = `Você é um adolecente`
    }else if(idade > 17 && idade <= 30){
      res.innerHTML = `Você é um jovem adulto`
    }else if(idade > 30 && idade <= 59){
      res.innerHTML = `Você é um adulto`
    }else if(idade > 50){
      res.innerHTML = `Você é um idoso`
    }else{
      res.innerHTML = `Informe uma idade válida`
    }
  }
//Switch  
let btn2 = document.querySelector("#enviar2")
btn2.addEventListener("click", validarIdade)
function validarIdade(){  
  let numero = document.querySelector("#numero").value
  let res = document.querySelector("#res2")
    switch (numero){
      case "0":
        res.innerHTML = `Você escolheu 0.`
        break;
      case "1":
        res.innerHTML = `Você escolheu 1.`
        break;
      case "2":
        res.innerHTML = `Você escolheu 2.`
        break;
      case "3":
        res.innerHTML = `Você escolheu 3.`
        break;
      case "4":
        res.innerHTML = `Você escolheu 4.`
        break;
      case "5":
        res.innerHTML = `Você escolheu 5.`
        break;
      default:
      res.innerHTML = `Infome um número entre 0 e 5.`

    }
}

//Operador Ternário

let btnClaro = document.querySelector("#claro")
let btnEscuro = document.querySelector("#escuro")

btnEscuro.addEventListener("click", adicionarTemaEscuro)

function adicionarTemaEscuro(){
  let temaEscuro = document.querySelector("#tema")
  let h1 = document.querySelector("#h1")
  temaEscuro.style.background = "black"
  temaEscuro.style.color ="#fff"
  h1.innerHTML = `Você está no tema escuro`
}

btnClaro.addEventListener("click", function removerEventoEscuro(){
  let temaEscuro = document.querySelector("#tema")
  let h1 = document.querySelector("#h1")
  temaEscuro.style.background = "#fff"
  temaEscuro.style.color ="#000"
  h1.innerHTML = `Você está no tema claro`
})

