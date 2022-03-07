var person1 = {firstName: 'Scott', lastName: 'Destanick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', lastName: 'Bui'}

// this.firstName ='Uma'
// this.lastName ='Mahesh'

function display(message, city){
    return message + ' '+ 
           this.firstName + ' ' + 
           this.lastName + '!!! Welcome to '+ 
           city
}

var displayUsingBind = display.bind(person1,'Hello', 'Boston')
console.log(displayUsingBind())

// var displayUsingBind = display.bind(person1)
// console.log(displayUsingBind('Hello', 'Boston'))

var displayUsingCall = display.call(person2, "Hola", "Sydney")
console.log(displayUsingCall)

var displayUsingApply = display.apply(person3, ["Hey", "Vietnam"])
console.log(displayUsingApply)

var obj = {
    name: 'Scott',
    getName: function(){    
        console.log(this)
        this.name = 'Great Scott'
        console.log(this)

        var updateName = function(){
            this.name = 'Scott Desatnick'
            console.log(this)
        }.bind(this)

        updateName()
        
        // var callme = updateName.bind(this)
        // callme()

       //updateName.bind(this)()
    }
}

obj.getName()