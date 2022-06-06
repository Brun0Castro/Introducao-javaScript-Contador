/* Exercicio - 01 */

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

/* Exercicio - 02 usando addEventListener */

var currentNumberWrapper02 = document.getElementById("currentNumber02");
var currentNumber02 = 0;

var diminuir = document.getElementById("sub");
diminuir.addEventListener("click" , () => {
    currentNumber02 = currentNumber02 - 1;
    currentNumberWrapper02.innerHTML = currentNumber02;
});

var soma = document.getElementById("som");
soma.addEventListener("click" , ()=> {
    currentNumber02 = currentNumber02 + 1;
    currentNumberWrapper02.innerHTML = currentNumber02;
});

/* Exercicio - 03 - Contador Limitado de -5 a 5 - Desabilita butão*/

var currentNumberWrapper03 = document.getElementById("currentNumber03");
var currentNumber03 = 0;

var diminuir = document.getElementById("sub03");
diminuir.addEventListener("click" , () => {
    currentNumber03 = currentNumber03 - 1;
    currentNumberWrapper03.innerHTML = currentNumber03;
    
    if (currentNumber03 == -5) {
          document.getElementById("sub03").disabled = true;
    };

});

var soma = document.getElementById("som03");
soma.addEventListener("click" , ()=> {
    currentNumber03 = currentNumber03 + 1;
    currentNumberWrapper03.innerHTML = currentNumber03;

    if (currentNumber03 == 5) {
        document.getElementById("som03").disabled = true;
  };

});

/* Exercicio - 04 - Contador Muda cor da Fonte qndo mumero negativo */


var currentNumberWrapper04 = document.getElementById("currentNumber04");
var currentNumber04 = 0;

var diminuir = document.getElementById("sub04");
diminuir.addEventListener("click" , () => {
    currentNumber04 = currentNumber04 - 1;
    currentNumberWrapper04.innerHTML = currentNumber04;
    
    
    if (currentNumber04 < 0) {
          document.getElementById("currentNumber04").style.color="red";
    };
     

});

var soma = document.getElementById("som04");
soma.addEventListener("click" , ()=> {
    currentNumber04 = currentNumber04 + 1;
    currentNumberWrapper04.innerHTML = currentNumber04;

    if (currentNumber04 >= 0 ) {
        document.getElementById("currentNumber04").style.color="black";
  };

});

   
   


