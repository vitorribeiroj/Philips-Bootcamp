/* ------------------------------------------------------------------------ */
/* Tipos de função */
/* ------------------------------------------------------------------------ */

/* Função autoinvocável - IIFE (Immediately Invoked Function Expression) */
console.log('-----------------------------------------')
console.log("Tipos de função")
console.log('-----------------------------------------')

console.log(

 /*  A chamada para a função começa aqui  */ 
(
    function(a,b){
        return a + b;
    }
)(3,2)
/* Encerramento da chamada  */

)

let x = (function(a,b){
    return a+b;
})(3,7)

console.log(x)


/* Callback --> uma função é passada como parâmetro de outra função */


/* ------------------------------------------------------------------------ */
/* Valores padrão */
/* ------------------------------------------------------------------------ */

function exponencial(num, exp=1){
    return num**exp;
}

let a = exponencial(4,2)
let b = exponencial(4)

console.log('-----------------------------------------')
console.log("Valores padrão")
console.log('-----------------------------------------')
console.log(a)
console.log(b)

/* ------------------------------------------------------------------------ */
/* Número de argumentos indefinido */
/* ------------------------------------------------------------------------ */

function findMax(){
    let max = -Infinity;
    for(element of arguments){
        if(element>max){
            max = element;
        }
    }
    return max;
}

console.log('-----------------------------------------')
console.log("Número indefinido/variável de argumentos")
console.log('-----------------------------------------')

console.log(findMax(3, 1, 12, 2, 27, 19, 11, 5))


