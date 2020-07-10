var fs = require('fs');
var http = require('http');

http.createServer(function (req,res){
    fs.readFile('demofile.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(3000);

fs.appendFile('mynewfile.txt', 'Hello content!', function(err){     // First time create a new file using the appendFile() method ,if the file is exists,append specified content at the end of the file
    if(err) throw err;
    console.log('Saved!')
})

fs.open('mynewfile2.txt', 'w', function(err,file){       // Open for writing and create new empty file
    
    if(err) throw err;
    console.log('Write Success')
})

fs.writeFile('mynewfile3.txt', 'Write new file Success!!', function(err){    //fs.wirtefile method replaces the specified file and content if it exists
    if(err) throw err;
    console.log('Write new file Success');
})

fs.unlink('mynewfile2.txt', function(err){      //fs.unlink method delete specified file
    if(err) throw err;
    console.log('Delete the file');
})

fs.rename('mynewfile.txt','myrenamedfile.txt', function(err){   //fs.rename method rename the specified file
    if(err) throw err;
    console.log('file renamed');
})