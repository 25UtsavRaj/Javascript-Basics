try {
    // Code that may or may not throw errors
} catch (ex){
    // Code to be exucted if an error occurs
} finally {
    // Code to be executed regardless of an error
}

try {
    console.log('This is try block')
    var output = getMessage('Hello', 'Uma')
} catch(error){
    console.log('this is catch block')
    console.log(error.name)
    console.log(error.message)
    console.log(error)
} finally {
    // Code clean up
    // Close DB Connections
    // Close Network Connections
    // Close File Connections
    console.log('This is finally block')
}

try {
    throw "Error Occured"
} catch(ex){
    console.log(ex)
}

// Trying to get the student with Id , what if we get two students

try {
    var studentCount =2 // Value coming fro DB
    if(studentCount > 1){
        var errorObj = {
            id: 101,
            message: 'There are duplicate records for this Id'
        }
        throw errorObj
    }
} catch(ex){
    console.log(ex)
}