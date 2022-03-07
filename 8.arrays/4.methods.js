// Concat
var fruits = ["Apples", "Oranges", "Guava", "Banana"]

var vegetables = ["Potato", "Tomato", "Egg Plant", "Drumstick"]

var mixOne = fruits.concat(vegetables)
console.log(mixOne)

var mixTwo = vegetables.concat(fruits)
console.log(mixTwo)

// Join - Coverting an array into string values

var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "MARS"]

var movieString = movies.join(",")
//var movieString = movies.join(" ")
//var movieString = movies.join("")

console.log(movieString, typeof movieString)

// split - Converting string into an array

var fullName = "John Galt"

//var array = fullName.split("")
var array = fullName.split(" ")

console.log(array)

// push - will add the item to array at the end
// unshift - will add the item to array at the begining 
// pop - will remove the item from an array at the end 
// shift - will remove the item from an array at the begining

var numbers = [1,2,3]


numbers.push(4)
numbers.push(5)
numbers.push(6)

numbers.unshift(0)
numbers.unshift(-1)
numbers.unshift(-2)

numbers.pop()
numbers.pop()
numbers.pop()

numbers.shift()
numbers.shift()
numbers.shift()


console.log(numbers)

/**
 * * Splice Method()
 * ? The splice() method adds and/or removes array elements.
 * ? The splice() method overwrites the original array
 */

 var fruits = ["Banana", "Orange", "Apple", "Mango"];

 // Add elements
 fruits.splice(3, 0, "Guava", "Dragonfruit")
 //console.log(fruits)
// ['Banana', 'Orange', 'Apple', 'Guava', 'Dragonfruit', 'Mango']

 // Remove Elements
fruits.splice(2, 1);
console.log(fruits)

/**
 *  *  Slice Method()
 *  ? The slice() method returns selected elements in an array, as a new array.
 *  ? The slice() method selects from a given start, up to a (not inclusive) given end.
 *  ? The slice() method does not change the original array.
 */

var names = ["Scott", "Adam", "Tuan" ,"Uma", "Johngalt"]
//                0       1       2      3       4
//slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3)
//slice(1,3) extracts the second element through the third element (elements indexed 1, 2)
//slice(1,2) extracts only second element (element indexed 1)
//slice(1,1) extracts only empty array 
var selectedNames = names.slice(1,4)

console.log(names)
console.log(selectedNames)