// import http from 'http';
import 'dotenv/config';
import app from './src/app.js';

const PORT = 3000;

// const routes = {
//   '/': 'Hello, World!',
//   '/about': 'This is the about page',
//   '/contact': 'This is the contact page'
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(routes[req.url] || '404 Not Found');
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
