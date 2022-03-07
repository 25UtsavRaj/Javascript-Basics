var person = {} // Object Literal Syntax


person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName ="city"
person[cityName] ="Boston"


console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])
console.log(person[cityName])
//console.log(person.cityName) undefined

console.log(person.firstName)
console.log(person.lastName)
console.log(person.city)

person.address = {}

person.address.street = '1st Main'
person.address.state = 'Massacchusets'

person.getFullName = function(){
    return person.firstName + ' ' + person.lastName
}

// person.getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }

console.log(person.address.state)
console.log(person.address.street)
console.log(person.getFullName())

console.log(person)

// Another way of assigning properties and methods
var student = {
    id: 1001,
    firstName: 'Scott',
    lastName: 'Desatnick',
    isAdmin: true,
    details: null,
    branch: undefined,
    address: {
        state : 'Massacchusets'
    },
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    },
    subjects: ['Maths', 'Physics', 'Chemistry']
}

console.log(student.firstName)
console.log(student.lastName)
console.log(student.getFullName())
console.log(student.id)
console.log(student.isAdmin)

console.log(student)

// Create propeties using defineProperty method
var customer = {}

Object.defineProperty(customer,'firstName', {value: 'Scott'})
Object.defineProperty(customer,'lastName', {value: 'Desatnick'})
Object.defineProperty(customer,'city', {value: 'Boston'})
Object.defineProperty(customer,'age', {value: 45})

console.log(customer)