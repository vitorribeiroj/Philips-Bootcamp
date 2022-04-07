let array = prompt("Digite os número da array usando espaços: ")

if (!array) {
    console.log(-1)
}
else {
    array = array.split(" ")
    for (elemento in array) {
        array[elemento] = Number(array[elemento])
        if (array[elemento] % 2 == 0) {
            array[elemento] = 0
        }
    }
    console.log(array)
}



