// var employee = {
//     id: 1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

var employee = {
    id: 1,
    greet: function(){
        console.log(this)
        setTimeout(function(){
            console.log(this)
            console.log(this.id)
        }, 1000)
    }
}

employee.greet()

//var self 

var employee = {
    id: 1,
    greet: function(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log(self.id)
        }, 3000)
    }
}

employee.greet()

// using bind

var employee = {
    id: 1,
    greet: function(){
        setTimeout(function(){
            console.log(this)
            console.log(this.id)
        }.bind(this), 3000)
    }
}

employee.greet()

// with arrow function 

var employee = {
    id: 1,
    greet: function(){
        setTimeout(() =>{
            console.log(this)
            console.log(this.id)
        }, 3000)
    }
}

employee.greet()