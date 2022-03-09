// Private Method
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }

// })()

// console.log(Module)

// Return 
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){
        
//     }

//     return {
//         publicMethod : publicMethod
//     }

// })()

// console.log(Module)

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     return {
//         publicMethod : function(){
//             return 'This is public Method'
//         }
//     }

// })()

// console.log(Module.publicMethod())

// // Anonymous Object Literal 

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     return {
//         publicMethodOne : function(){
//             return 'This is public Method One'
//         },
//         publicMethodTwo : function(){
//             return 'This is public Method Two'
//         },
//         publicMethodOThree : function(){
//             return 'This is public Method Three'
//         }
//     }

// })()

// console.log(Module)

// // Locally Scoped Object Literal 

// var Module = (function(){

//     var myObj = {}

//     var privateMethod = function(){

//     }

//     myObj.publicMethod = function(){

//     }
    
//     myObj.someMethod = function(){

//     }

//     return myObj

// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal 

// var Module = (function(){

//     var myObj = {
//         publicMethod : function(){

//         },
        
//         someMethod : function(){
    
//         }
//     }

//     var privateMethod = function(){

//     }



//     return myObj

// })()

// console.log(Module)

// Revealing Module Pattern 
var Module = (function(){

    var privateMethod = function(){

    }

    var someMethod  = function (){

    }

    var anotherMethod = function(){

    }

    return {
        someMethod : someMethod, 
        anotherMethod: anotherMethod
    }

})()

console.log(Module)

// Accessing Private Methods

var Module =(function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }
})()

Module.publicMethod('I am able to access the private method')
