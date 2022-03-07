function sayHello(message, city){
    var city =city
    return function(name){
        return message + ' ' +  name + ' ' + city
    }
}

var wishMe = sayHello('Welcome' , 'Boston')
console.log(wishMe)
var message = wishMe('Scott')

console.log(message)