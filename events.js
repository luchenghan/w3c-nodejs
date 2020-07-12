var fs = require('fs')
var rs = fs.createReadStream('./mynewfile2.txt')
var events = require('events')
var eventEmitter = new events.EventEmitter()

rs.on('open', function(){
    console.log('the file is open')
})


var myEventHandler = function() {       //create an event handler
    console.log('I hear a scream!')
}

eventEmitter.on('gg', myEventHandler)   //assign the event handler to an event

eventEmitter.emit('gg') //To fire an event, use the emit() method