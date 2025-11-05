// Import required modules
const http = require('http');
const fs = require('fs');

// Create a web server
const server = http.createServer((req, res) => {
  // Define file name and content
  const fileName = 'src.txt';
  const content = 'HTML, CSS, JavaScript, TypeScript, MongoDB, Express.js, React.js, Node.js';

  // Create or overwrite the file
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('❌ Error creating file.');
      console.error('Error:', err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('✅ File "src.txt" created successfully with the given content!');
      console.log(`File "${fileName}" created successfully.`);
    }
  });
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000/');
});
