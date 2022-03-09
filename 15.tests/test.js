console.log(multiply(2)(3)(4)) // 24

function multiply(x){
    return function(y){
       return function(z){
           return x*y*z
       } 
    }
}

var a =10;
var b = a;
a=20;

console.log(a)
console.log(b)

// 20 10

var a =[ 1,2]
var b = a
a.push(3)

console.log(a)
console.log(b)

// [1,2,3] [1,2]
// [1,2,3] [1,2,3]

var a = [1,2]
var b = a
a = [1,2,3]

console.log(a)
console.log(b)

var output = (function(x){
    delete x
    return x
})(1)

console.log(output)

var output = (function(x){
    delete x
    return x
})({a:5})

console.log(output)

var output = (function(x){
    delete x.a
    return x
})({a:5})

console.log(output)

var output = (function(x){
    delete x.a
    return x.a
})({a:5})

console.log(output)

// Conditional statements

// var totalAmount = 10
// if(totalAmount>0){
//     console.log('There is Balance')
// } else {
//     console.log('There is no Balance')
// }

var totalAmount = 500000
if(totalAmount>500000){
    console.log('There is huge balance')
} else if(totalAmount >250000){
    console.log('There is better balance')
} else {
    console.log('There is no Balance')
}

// How to empty an array ?

var array = ['a', 'b', 'c', 'd', 'e', 'f']

// Method1
//array.splice(0,array.length)

// Method2
//array =[]

// Method3
// var count = array.length
// for(var i =0; i <count; i++){
//     console.log(i, count)
//     array.pop()
// }

// Method4
// while (array.length){
//     array.pop()
// }

//Method5
array.length = 0
console.log(array)

console.log(evenOrAdd(3)) // false
console.log(evenOrAdd(6)) // true
console.log(evenOrAdd(7)) // false

// function evenOrAdd(a){
//     if(a%2==0){
//         return true
//     } else {
//         return false
//     }
// }

function evenOrAdd(a){
    return a%2 ==0
}

// == and ===
console.log(1==1)
console.log(1=='1') // will only check for value
console.log(1==='1') // will check for value and type

console.log(extractExtension("resume.doc")) // doc
console.log(extractExtension("bangalore.txt")) // txt
console.log(extractExtension("notepad")) // false

// function extractExtension(fileName){
//     if(fileName.split('.').length >1){
//         return fileName.split('.')[1]
//     } else {
//         return false
//     }
// }

function extractExtension(fileName){
    return fileName.split('.').length >1 ? fileName.split('.')[1] : false
}

var total=11
var message = total >10 ? "Big Number" : "Small Number"
console.log(message)