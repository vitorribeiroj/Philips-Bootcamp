let array1 = [30, 30, 40, 5, 223, 2049, 3034, 5]
let set1 = new Set(array1)
let array2 = Array.from(set1)

console.log(`Array original: ${array1}\n`)
console.log(`Array sem repetições: ${array2}`)