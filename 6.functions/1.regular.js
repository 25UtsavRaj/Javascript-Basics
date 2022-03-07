function display(){
    console.log('Hello')
}

display()

function getName(){
    return "Scott"
}

var fullName = getName()
console.log(fullName)

console.log(getName())

function getValue(){
    console.log(10)
}

console.log(getValue())

function test(){
   // return 1
   // return "Scott"
   // return  true
   // return  null
   // return undefined
   // return  {}
   // return function(){}
   // return []
   return 
}
console.log(test())

function one() {
    return {
        a :1
    }
}
function two() {
    return 
    {
        a :1
    }
}


console.log(one())
console.log(two())

function getFullName(){
    return "Scott" + " " +  "Desatnick"
}

function getFullName(firstName, lastName){
    return firstName + " " +  lastName
}

function getFullName(firstName, lastName){
    return "Hello World"
}

console.log(getFullName())
console.log(getFullName())
console.log(getFullName())

function displayFullName(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(displayFullName('Scott', 'Desatnick'))
console.log(displayFullName('Adam', 'Colson'))
console.log(displayFullName('Tuan', 'Bui'))
console.log(displayFullName('John'))
console.log(displayFullName('Uma','Maheswararao', 'Meka'))