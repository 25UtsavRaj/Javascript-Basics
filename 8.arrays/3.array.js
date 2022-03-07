var data = [
    1,
    "scott",
    true,
    null,
    undefined,
    {name:'scott'},
    function(name){
        return name
    },
    ["red", "green", "blue"]
]

console.log(data)

// Get the function 
// Invoke the function 
// Pass the parameter to the function
// pass name property of the object 
console.log(data[6](data[5].name))

// Get the Object
// Get the array value blue
// Print message : "Scott Likes Blue"
console.log(data[5].name + " Likes " + data[7][2])