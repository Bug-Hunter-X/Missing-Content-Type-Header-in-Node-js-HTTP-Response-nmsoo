# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common but easily overlooked error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  Without this header, the browser may misinterpret the response data, leading to unexpected behavior or errors.

## Bug

The `bug.js` file shows a simple Node.js HTTP server that responds with 'Hello World!' but *fails to set the Content-Type header*. This can cause the browser to handle the response incorrectly, potentially displaying it as plain text when it should be HTML or JSON.

## Solution

The `bugSolution.js` file demonstrates the correct approach. It includes the `Content-Type` header in the response, explicitly specifying the content type (in this example, text/plain). This ensures that the browser correctly interprets the response.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` and observe the browser's response when accessing http://localhost:3000 in your browser. 
4. Then run `node bugSolution.js` and observe the correct behaviour.