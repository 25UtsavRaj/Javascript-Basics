var person = Object.create(null)


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

person.address = Object.create(null)

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

var student = Object.create({
    firstName: 'Scott',
    lastName: 'Desatnick'
})

console.log(student.firstName)
console.log(student.lastName)
