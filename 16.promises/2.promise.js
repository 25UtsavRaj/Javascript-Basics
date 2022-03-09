// Print one, two , three in order
function printInOrder(){
    return new Promise(function(resolve, reject){
        var count =5
        if(count>4){
            setTimeout(function(){
                resolve('Two')
            }, 3000)
            
        } else {
            reject('Your promise has failed')
        }
    })
}

console.log('One')

printInOrder()
.then(function(data){
    console.log(data)
    console.log('Three')
    return "This will go to second then"
}).then(function(data){
    console.log(data)
})
.catch(function(data){
    console.log(data)
})