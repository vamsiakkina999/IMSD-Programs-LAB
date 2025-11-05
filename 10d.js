// Import required modules
const http = require('http');

// Import the URL module (URL class is global in Node.js >= 10)
const { URL } = require('url');


// Create a web server
const server = http.createServer((req, res) => {

// Define a sample URL
const myUrl = new URL('https://www.example.com:8080/path/page.html?name=JohnDoe&age=25#section2');

// Parse the URL components
console.log('✅ URL Parsing Result:');
console.log('Full URL     :', myUrl.href);
console.log('Protocol     :', myUrl.protocol);   // https:
console.log('Host         :', myUrl.host);       // www.example.com:8080
console.log('Hostname     :', myUrl.hostname);   // www.example.com
console.log('Port         :', myUrl.port);       // 8080
console.log('Pathname     :', myUrl.pathname);   // /path/page.html
console.log('Search       :', myUrl.search);     // ?name=JohnDoe&age=25
console.log('Hash         :', myUrl.hash);       // #section2

// Access query parameters
console.log('Query Parameters:');
console.log('N ame         :', myUrl.searchParams.get('name')); // JohnDoe
console.log('Age          :', myUrl.searchParams.get('age'));  // 25

// Add or modify a query parameter
myUrl.searchParams.append('country', 'India');
console.log('Updated URL  :', myUrl.href);

   
  });

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000/');
});