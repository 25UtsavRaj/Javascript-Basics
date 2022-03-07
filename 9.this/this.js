console.log(this)

function test(){
    console.log(this)
}

test()

var obj = {
    name: 'Scott',
    getName: function(){
        var self = this
        
        console.log(self)
        self.name = 'Great Scott'
        console.log(self)

        var updateName = function(){
            self.name = 'Scott Desatnick'
            console.log(self)
        }

        updateName()
    }
}

obj.getName()