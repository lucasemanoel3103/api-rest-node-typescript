import express from 'express';

const server = express();



server.post('/teste', (req, res) => {
  res.send('API running!');
})

export { server } ;