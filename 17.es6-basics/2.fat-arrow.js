// var add = function(x, y){
//     return x + y
// }

// var add = (x, y) =>{
//     return x + y
// }

/**
 * ? () => x+y
 * ? () => {return x+y}
 */

//var add = (x, y) => x + y

var add = (x, y) => { return x + y}

console.log(add(10,20))


//sort an array
// let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return b-a
// })

// console.log(numbers)

let numbers = [4,2,6]

numbers.sort((a,b) => b-a)

console.log(numbers)

// Takes single paramter
/**
 * ? (param) => param +10
 * ? param => param + 10
 */

let names =['Scott', 'Adam', 'Tuan', 'Uma']

let lengths = names.map(name => name.length)

console.log(lengths)

// with no parameters
let logDocument = () => console.log(window.document)

logDocument()

// Line Breaks
// let multiply = (x,y)  /// This syantx will give error
// => x*y

let multiply = (x,y) => 
x*y

console.log(multiply(2,3))

// let setColor = function(color){
//     return {value: color}
// }

// let backGroundColor = setColor('Green')
// console.log(backGroundColor)

let setColor = (color) =>({value: color})

let backGroundColor = setColor('Green')
console.log(backGroundColor)