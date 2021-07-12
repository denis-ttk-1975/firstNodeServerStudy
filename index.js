const http = require('http');

http.createServer((request, response) => {
	response.write('Hello, Denis!');
	response.end;
}).listen(3000);