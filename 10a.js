// 1. Import the 'http' module
const http = require('http');

// 2️. Create a web server using createServer() method
const server = http.createServer((req, res) => {
  
  // 3️. Display that a request has been received
  console.log("Request received from browser...");

  // 4️. Set the response header (status code & content type)
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // 5️. Write the response content (HTML code)
  res.write("<h2>Welcome to Node.js Web Server!</h2>");
  res.write("<p>This page is generated using JavaScript running on the server.</p>");
  res.write("<p><b>Request URL:</b> " + req.url + "</p>");

  // 6️. End the response
  res.end("<h4>Response sent successfully!</h4>");
});

// 7️. Make the server listen on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});