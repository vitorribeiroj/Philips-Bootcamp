let string = prompt('Digite sua string para verificar se consiste em um palíndromo: ').toLowerCase()


let stringArray = string.split(" ").join("").split("")

let stringArrayReverso = []

for (i=0; i < stringArray.length; i++){
    stringArrayReverso.unshift(stringArray[i])
};

let palindromo = String(stringArray)==String(stringArrayReverso)

if (palindromo){
    alert('A string é um palíndromo!')
}
else{
    alert('A string NÃO é um palíndromo!')
}