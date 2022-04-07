function funcao(){
    console.log('Sou uma função declarativa')
}
funcao();

var funcao2 = function(){
    console.log('Sou uma função do tipo expressão')
}

funcao2();

var funcao3 = ()=>{
    console.log('Sou uma arrow function')
}

funcao3();