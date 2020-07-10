
var formidable = require('formidable');
var http = require('http');
var fs = require('fs')

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.path;      //File's local path
            var newpath = 'C:/Users/Eric PC/NodeProject/w3c-nodejs/fileupload/'+ files.filetoupload.name;   //upload path
            
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('File uploaded and moved!!');
                res.end();
            });
        });
    }else{
        fs.readFile('demofile.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text-html'});
            res.write(data);
            return res.end();
        });
    }    
}).listen(8080);