var names = ["scott", "Adam", "Tuan"]

// for loop
console.log('********** for loop **********')
for(var i=0; i<names.length; i++){
//           0 3
//           1 3
//           2 3
//           3 < 3 // Loop stops here
//           console.log(i, names.length)
    console.log(i, names[i])
}

// forEach
console.log('********** forEach loop **********')
names.forEach(function(value, index){
    console.log(value , index)
})

// map 
console.log('********** map loop **********')
names.map(function(value, index){
    console.log(value, index)
})

// Difference between forEach and map
var customers  = ["scott", "adam", "Tuan" ,"Uma"]

var customerListOne = customers.forEach(function(name, index){
                        return name + ' ' + index
                      })

var customerListTwo = customers.map(function(name, index){
                       // return name + index
                    //    var obj = {}
                    //    obj.id = index
                    //    obj.name = name
                    //    console.log(obj)
                    //     return obj
                      return {
                                id: index +1,
                                name: name
                            }
                      })

console.log(customerListOne)
console.log(customerListTwo)

var products = ["Desktop", "Laptop", "Mobile", "iPad"]

// for.. in 
console.log('********** for..in loop **********')
for(var index in products){
    console.log(index)
}

// for.. of
console.log('********** for..of loop **********')
for(var item of products){
    console.log(item)
}

// for of
console.log(Object.entries(products))
// ['0', 'Desktop']
// ['1', 'Laptop']
// ['2', 'Mobile']
// ['3', 'iPad']
for(var [index, item] of Object.entries(products)){
    console.log(index, item)
}

console.log('********** While loop **********')
var i=0;
while(i<products.length){
   console.log(products[i]) 
   i++;
}