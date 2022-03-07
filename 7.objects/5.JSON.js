var todo = {
    userId: 1,
    id: 1, 
    title: 'delectus aut autem',
    completed:false
}
console.log(todo)

var JSONObj = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

console.log(JSONObj)

// JSON.stringify 

var JSONStringify = JSON.stringify(JSONObj)
console.log(JSONStringify, typeof JSONStringify)

// JSON.parse

var JSONParse = JSON.parse(JSONStringify)
console.log(JSONParse, typeof JSONParse)