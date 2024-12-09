const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting Content-Type, browser may interpret response incorrectly
  res.end('Hello World!'); 
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});