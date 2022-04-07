let array = ['vitor', 32, 'mariana', 29]


console.log('Imprimindo cada item do array: ')
array.forEach(function(item, index){console.log(item, index)})

console.log('Array original: ' + array)

array.push('Sara')
array.push(0.25)
array.push(1)
console.log('Array após 3 pushs: ' + array)

array.pop()
console.log('Array após 1 pop: ' + array)

array.unshift('Vitor')
console.log('Array após 1 unshift: ' + array)

array.shift()
console.log('Array após 1 shift: ' + array)

console.log('Índice do item "Sara" = ' + array.indexOf('Sara'))

/* Splice remove parte do array e, opcionalmente, substitui os itens removidos*/
array.splice(0,3, 'Vitor', 32, 'Mariana')
console.log('Array após o splice: ' + array)

let novoArray = array.slice(4,)
console.log('Array após slice: ' + novoArray)


/* OBJETOS */

let sara = {pai: 'Vitor', mae: 'Mariana', idade: 1, sexo: 'feminino', time: 'Cruzeiro'}

console.log(sara)
console.log('Os pais da Sara se chamam: ' + sara.pai + ' e ' + sara.mae)

var {pai, time}=sara
console.log(pai, time)