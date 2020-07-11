var http = require('http');
var fs = require('fs');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=July';
var q = url.parse(adr, true);

console.log(q.host);    //return 'localhost:8080'
console.log(q.pathname);    //return 'default.htm'
console.log(q.search);  //reurn '?year=2020&month=July'

var qdata = q.query;    //return an object: { year: '2020', month: 'July'}
console.log(qdata);
console.log(qdata.month);   //return 'July'

http.createServer(function(req, res){
    var requrl = url.parse(req.url, true);
    var filename = "." + requrl.pathname;

    fs.readFile(filename, function(err, data){
        
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

    })
}).listen(8080);