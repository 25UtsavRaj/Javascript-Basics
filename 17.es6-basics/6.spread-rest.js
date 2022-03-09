/**
 * ? ... spread operator - unpacks the elements of the array
 * ? ... rest operator - packs the elements into array
 */

// Spread
const odd = [1,3,5]
const combined = [2,4,6,...odd]
console.log(combined)

function display(a,b,c,...arguments){
    console.log(arguments)
}

display(1,2,3,4,5,6)

// Constructing an array literal 

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// Concating two arrays

let numbers = [1,2]
let morenumbers = [3,4]
let allNumbers = [...numbers, ...morenumbers]
console.log(allNumbers)

// Copy an array

let scores =[80, 70, 90]

let copiedScores = [...scores]

console.log(copiedScores)

// spread Operator and string 

let newChars = ['A', ...'BCEFG', 'D']

console.log(newChars)