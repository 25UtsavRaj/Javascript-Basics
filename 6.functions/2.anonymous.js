
   
function add(a,b){
    return a+b
}
var add  = 1
var add = function(a,b){
    return a+b
}
var add = true

console.log(add, typeof add)

console.log(getFullName)
//console.log(getFullName)


var getFullName = function(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(getFullName())

var add = function(a,b){
    return a+b
}

console.log(add(2,3))

var test = function multiply(a,b){
    return a*b
}

console.log(test(2,3))
//console.log(multiply(2,3)) Will throw an error