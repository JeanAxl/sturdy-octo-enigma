import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 5002;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.end('Hello JeanJean');
});

server.listen(port);
