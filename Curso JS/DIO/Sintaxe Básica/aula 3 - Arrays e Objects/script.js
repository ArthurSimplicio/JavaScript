//o que são vetores ou arrays
/*
//como declarar um array
let array = ['string', 1, true]
console.log(array)*/

//pode guardar vários tipos de dados 
let array = ['string', 1, true, ['array1'], ['array2'], ['arrya3'], ["array4"]]
/*console.log(array)

//ForEach
array.forEach(function(item, index){console.log(item, index)})

//Push
array.push([])
console.log(array)

//Pop
array.pop()
console.log(array)

//Shift
array.shift()
console.log(array)

//UnShift
array.unshift('novo item no inicio')
console.log(array)

//indexOf
console.log(array.indexOf(true))

//Splice
array.splice(0, 3)
console.log(array)

//Slice
let novoArray = array.slice(0, 3)
console.log(novoArray)*/

//Objects
let object = {string:'string', number:  1, Boolean: true, array:["array"], objectInterno: {objectInterno: 'objeto interno'}}
/*console.log(object)
var string = object.string
console.log(string)

let arrayInterno = object.array
console.log(arrayInterno)*/

var {string, Boolean, objectInterno} = object
console.log({string, Boolean, objectInterno})