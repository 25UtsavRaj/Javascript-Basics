//ES5 fix
// function say(message){  
//     message = typeof message !== 'undefined' ? message : 'Hi'
//     console.log(message)
// }

// say()

function say(message='Hello'){
    console.log(message)
}

say('Hey')