// function DBConnection(){
//     console.log('Connection created')
// }

// var dbCon1 = new DBConnection()
// console.log(dbCon1)
// var dbCon2 = new DBConnection()
// console.log(dbCon2)
// var dbCon3 = new DBConnection()
// console.log(dbCon3)
// var dbCon4 = new DBConnection()
// console.log(dbCon4)

var DBConnection = (function(){
    var connection = null

    var createConnection = function(){
        var obj = new Object()
        console.log('Connection is created')
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    var obj = {getConnection: getConnection}

    return obj
})()

//var db = new DBConnection() - This is not possible

var dbCon1 = DBConnection.getConnection()
console.log(dbCon1)

var dbCon2 = DBConnection.getConnection()
console.log(dbCon2)

var dbCon3 = DBConnection.getConnection()
console.log(dbCon3)

var dbCon4 = DBConnection.getConnection()
console.log(dbCon4)