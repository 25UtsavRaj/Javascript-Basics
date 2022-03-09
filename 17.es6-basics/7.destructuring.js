// Array
let arr = ["scott", "adam", "Tuan"]

let [name1, name2, name3] = arr

console.log(name1) // arr[0]
console.log(name2) // arr[1]
console.log(name3) // arr[2]

let [firstName, lastName] = "Scott Desatnick".split(' ')

console.log(firstName)
console.log(lastName)

let [fName, , title1] = ["Scott", "Desatnick", "Great Boss"]

console.log(fName)
console.log(title1)

// Object
let user = {
    fullname: 'scott',
    city: 'boston',
    age: 45
}

let {fullname, city, age} = user

console.log(fullname)
console.log(city)
console.log(age)

let options = {
    title: "Menu",
    width: 100,
    height:200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)