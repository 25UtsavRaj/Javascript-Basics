console.log(this)
console.log(window)

console.log(document.getElementById('root'))

document.getElementById('root').innerText ="<h1>Hello World<h1>"
document.getElementById('root').innerHTML ="<h1>Hello World<h1>"

function invoke(){
    console.log('Hello World')
}