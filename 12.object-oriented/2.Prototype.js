// function Student(){
//     this.name ='John'
//     this.gender ='Male'
// }

// var stuObj1 = new Student()
// stuObj1.age = 35
// console.log(stuObj1.age)
// console.log(stuObj1)

// var stuObj2 = new Student()
// console.log(stuObj2.age)
// console.log(stuObj2)

// function Student(){
//     this.name ='John'
//     this.gender ='Male'
// }

// Student.prototype.age = 35


// var stuObj1 = new Student()
// console.log(stuObj1.age)
// console.log(stuObj1)

// var stuObj2 = new Student()
// console.log(stuObj2.age)
// console.log(stuObj2)

// function Student(){
//     this.name ='John'
//     this.gender ='Male'
// }

// var stuObj = new Student()

// console.log(Student.prototype)
// console.log(stuObj.prototype)
// console.log(stuObj.__proto__)

// console.log(typeof Student.prototype)
// console.log(typeof stuObj.__proto__)

// console.log(Student.prototype === stuObj.__proto__)

function Customer(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     retrun this.firstName + ' ' + this.lastName
    // }
}

Customer.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Customer.prototype.city ='Boston'

var customer1 = new Customer('Scott', 'Desatnick')
console.log(customer1)
console.log(customer1.getFullName())

var customer2 = new Customer('Adam', 'Colson')
console.log(customer2)
console.log(customer2.getFullName())