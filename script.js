
// botao de incremento sumir e aparecer

var tipoCodificacao = document.querySelector("select")
var campoIncremento = document.querySelector("#idIncremento")

tipoCodificacao.addEventListener ("change", function (evento) {
    evento.preventDefault()

    var campoIncremento = document.querySelector("#idIncremento")

    if (evento.target.value == "cifra") {
      campoIncremento.style = "display: flex";
    } else {
      campoIncremento.style = "display: none";
    }
  })

//   input atribuido a uma variavel

var btn = document.querySelectorAll('input[name="ativar"]');

btn.forEach((radio) => {
    radio.addEventListener("change", function (evento) {
        evento.preventDefault();

        var botaoEnviar = document.querySelector("#submit")

        if (evento.target.value == "decodificar") {
            botaoEnviar.innerHTML = "Decodificar mensagem"
        } else {
            botaoEnviar.innerHTML = "Codificar mensagem"

        }
    });
});
// atribuindo váriaveis para eu conseguir manipular os elementos
var entradaTexto1 = document.querySelector('#texto1')
var saidaTexto2 = document.querySelector('#texto2')
var tipoCodificacao = document.querySelector("select")
var campoincremento = document.querySelector("#idIncremento")
var numerosIncremento = document.querySelector('#numerosIncremento')
var codificar = document.querySelector('#codificar')
var decodificar =document.querySelector('#decodificar')
var botaoEnviar = document.querySelector("#submit")

 


// "ligando" o campo  tipo de codificação com os códigos que irão codificar/decodificar

botaoEnviar.addEventListener("click", function (evento) {
  evento.preventDefault();
  if (codificar.checked && tipoCodificacao.value == "cifra") {
    saidaTexto2.value = codificarCifraDeCesar(entradaTexto1.value, parseInt(numerosIncremento.value));
  } else if (decodificar.checked && tipoCodificacao.value == "cifra") {
    saidaTexto2.value = decodificarCifraDeCesar(
      entradaTexto1.value.split(""),
      parseInt(numerosIncremento.value));
      
    } else if (codificar.checked && tipoCodificacao.value == "base") {
      saidaTexto2.value = codificarBase64(entradaTexto1.value);
    } else if (decodificar.checked && tipoCodificacao.value == "base") {
      saidaTexto2.value = decodificarBase64(entradaTexto1.value);
    }
  });
  
  //função para codificar em Cifra de cesar
  
  botaoEnviar.addEventListener("click", function (evento){
    codificarCifraDeCesar();
    evento.preventDefault();
  })
function codificarCifraDeCesar(entradaTexto1, numerosIncremento) {
  var resultD = [];
  var decodeC;
  for (var i = 0; i < entradaTexto1.length; i++) {
    if (entradaTexto1[i].charCodeAt() >= 65 && entradaTexto1[i].charCodeAt() <= 90) {
      console.log('oi')
      decodeC = ((entradaTexto1[i].charCodeAt() - 65 + numerosIncremento) % 26) + 65;
      resultD.push(String.fromCharCode(decodeC));
    } else if (entradaTexto1[i].charCodeAt() >= 97 && entradaTexto1[i].charCodeAt() <= 122) {
      decodeC = ((entradaTexto1[i].charCodeAt() - 97 + numerosIncremento) % 26) + 97;
      resultD.push(String.fromCharCode(decodeC));
    } else {
      resultD.push(entradaTexto1[i]);
     
    }
  }
  return resultD.join("");
  
}

function decodificarCifraDeCesar(entradaTexto1, numerosIncremento) {
  var resultD = [];
  var decodeC;
  for (var i = 0; i < entradaTexto1.length; i++) {
    if (entradaTexto1[i].charCodeAt() >= 65 && entradaTexto1[i].charCodeAt() <= 90) {
      decodeC = ((entradaTexto1[i].charCodeAt() - 90 - numerosIncremento) % 26) + 90;
      resultD.push(String.fromCharCode(decodeC));
    } else if (entradaTexto1[i].charCodeAt() >= 97 && entradaTexto1[i].charCodeAt() <= 122) {
      decodeC = ((entradaTexto1[i].charCodeAt() - 122 - numerosIncremento) % 26) + 122;
      resultD.push(String.fromCharCode(decodeC));
    } else {
      resultD.push(entradaTexto1[i]);
    }
  }
  return resultD.join("");
}

function codificarBase64(entradaTexto1) {
  return btoa(entradaTexto1);
}

// 8- Função para decodificar em Base64:

function decodificarBase64(entradaTexto1) {
  return atob(entradaTexto1);
}