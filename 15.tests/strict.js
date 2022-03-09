'use strict'

var x = 3.14;  
console.log(this)

function sample(){
    console.log(this)
}

sample.bind(this)()

myFunction();

function myFunction() {
  var y = 3.14;   
}