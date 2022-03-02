const http = require('http');
const helloModule = require('./helloModule')
const faker = require('faker')

const randomName = faker.name.findName();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end(`Hasil dari random name: ${randomName}`);

  //=>sample routing
  const url = req.url
  if(url==='/users') {
    res.end('halo page user')
  }  else if (url==='/category') {
    res.end('welcome in category page.')
  } else {
    res.end(`page home : ${randomName}`)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});