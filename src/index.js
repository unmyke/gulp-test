import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.send('Hello');
  throw new Error('Test sourcemap');
});

server.listen(8080, 'localhost', () => {
  console.log('server started');
});
