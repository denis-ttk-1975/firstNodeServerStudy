const http = require('http');

http.createServer((request, response) => {
	response.write('Hello, Denis!');
	if (request.url === '/beNice') {
		response.write('How are you? Do you want some gift?!');
	} else {
		response.write('Glad to see you!');
	}
	response.end();
}).listen(3000);