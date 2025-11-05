// Step 1: Import the built-in HTTP module
const http = require('http');

// Step 2: Create a web server
const server = http.createServer((req, res) => {
  console.log('Request received from client...');

  // Step 3: Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Step 4: Execute JavaScript logic
  const currentTime = new Date().toLocaleTimeString();
  const message = "Welcome to Node.js Web Server!";
  const sum = 10 + 20; // Example JavaScript execution

  // Step 5: Send the response
  res.write(`<h1>${message}</h1>`);
  res.write(`<p>Server Time: ${currentTime}</p>`);
  res.write(`<p>Result of 10 + 20 = ${sum}</p>`);
  res.end('<p>Response sent successfully!</p>');

  console.log('Response sent to client.\n');
});

// Step 6: Server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
