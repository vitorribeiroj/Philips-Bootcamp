/* Manipular Array com "Spread" --> usar ... anter do array
para utilizar os elementos separadamente pela função*/

function soma(x, y, z){
    return x+y+z;
}

let numbers = [1,3,5]

console.log(soma(...numbers))


/* Rest: combina os argumentos em um array */

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho()
confereTamanho(1,2)
confereTamanho(3,4,5)