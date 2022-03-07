function Student(){
    this.firstName = 'Scott' 
    this.lastName = 'Desatnick'
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

//var studentObj =  Student() This is function invocation which returns undefined
var studentObj = new Student() // Here new keyword creates new Object
console.log(studentObj)
console.log(studentObj.firstName)
console.log(studentObj.lastName)
console.log(studentObj.getFullName())