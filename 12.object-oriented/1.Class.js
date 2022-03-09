/**
 * ? Class
 */

 function Student(){

}

/**
 * ? Instance
 */

function Person(){
    
}

var person1 = new Person() // person1 is the instance
var person2 = new Person() // person2 is the instance

/**
 * ? Constructor
 */

function Order(){
    console.log('Order is initiated')
}

var order1 = new Order() // Order() is the constructor

/**
 * ? property
 */

function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer('Female')
var customer2 = new Customer('Male')

console.log(customer1)
console.log(customer2)