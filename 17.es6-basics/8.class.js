class Student {
    constructor(firstName, lastName){
       this.firstName =  firstName
       this.lastName = lastName
    }

    getFullName(){
        return this.firstName + ' '+ this.lastName
    }

    getMessage(){
        return "Welcome to ES6 Classes"
    }

}

let student1 = new Student('Scott', 'Desatnick')

console.log(student1)
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.getFullName())
console.log(student1.getMessage())
