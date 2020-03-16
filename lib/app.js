const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET') {
      client.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(request.path === '/' && request.method === 'POST') {
      client.end(createResponse({ body: `${request.body}`, status: '200 OK', contentType: 'text/plain' }));
    } else if(request.path === '/red' && request.method === 'GET') {
      client.end(createResponse({ body: '<h1>red</h1>', status: '200 OK', contentType: 'text/html' }));
    } else if(request.path === '/blue' && request.method === 'GET') {
      client.end(createResponse({ body: '<h1>blue</h1>', status: '200 OK', contentType: 'text/html' }));
    } else if(request.path === '/green' && request.method === 'GET') {
      client.end(createResponse({ body: '<h1>green</h1>', status: '200 OK', contentType: 'text/html' }));
    } else {
      client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
