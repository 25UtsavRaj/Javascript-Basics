// function sample(){
//     var foo ="blue"
//     console.log(foo)
// }

// sample()
//console.log(foo)

// Blue and undefined 
// 

function display(){
    if(1==1){
        var foo ="Hello"
        let bar = "How are you ?"
        const baz = "I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)
    }

    console.log(foo)
    // console.log(bar) //ReferenceError: bar is not defined
    // console.log(baz) // ReferenceError: bar is not defined
}

display()

// // var outside for-loop
// for(var amount=0; amount<3; amount++){
//     console.log(amount)
// }

// //100 coding lines in between

// if(amount >=3){
//     console.log('You have balance')
// } else {
//     console.log('You dont have balance')
// }


// let outside for-loop
for(let amount=0; amount<3; amount++){
    console.log(amount)
}
//console.log(amount) // ReferenceError: amount is not defined
//100 coding lines in between

// if(amount >=3){
//     console.log('You have balance')
// } else {
//     console.log('You dont have balance')
// }

function test(){
    let foo =1;
        foo =100;
    //let foo =101
    console.log(foo)
}

test()
// Var
var a =10
var a =20

console.log(a)

//Let 
let b
 b =57

console.log(b)

// Const
const c =10
console.log(c)

// Const using Object types

const names = ["Scott", "Adam", "Tuan"]
names.push('Uma')

console.log(names)