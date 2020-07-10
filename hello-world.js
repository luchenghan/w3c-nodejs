
const http = require("http");   //Include Http Modules, use the require() function
const dt = require("./myfirstmodule");  //Include your own Module    ./ use to locate in the same folder
const url = require("url")
const hostname = "127.0.0.1";
const port = "3000";


const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");  //Set http header
  res.write("The date and time are currently: " + dt.myDateTime() + "\n"); // write a response to the client
  res.write("Querystring : "+req.url+"\n");  //read the query string
  var  q = url.parse(req.url, true).query;  //split the query string
  var txt = q.year + " " + q.month;

  res.write(txt+" ");
  res.end("Hello World!\n");  // end the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("The date and time currently: " + dt.myDateTime());
});   // server object listen on port 3000
