// A dead simple app server for now.
// When we need something more complex, these help:
// https://github.com/zeit/next.js/tree/master/examples/parameterized-routing
// https://github.com/zeit/next.js/tree/master/examples/custom-server
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const firebasePkg = require('firebase');
const clientCredentials = require('./firebaseCredentials').clientCredentials;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const firebase = firebasePkg.initializeApp(clientCredentials);

// const { parse } = require('url');
// const pathMatch = require('path-match');
// const route = pathMatch();
// const match = route('/blog/:id');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.use((req, res, next) => {
    req.firebaseServer = firebase;
    next();
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(80, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });

  // createServer((req, res) => {
  //   const parsedUrl = parse(req.url, true);
  //   // const { pathname, query } = parsedUrl;
  //   const { query } = parsedUrl;
  //   const params = false;
  //   // const params = match(pathname);
  //   if (params === false) {
  //     handle(req, res, parsedUrl);
  //     return;
  //   }
  //   // assigning `query` into the params means that we still
  //   // get the query string passed to our application
  //   // i.e. /blog/foo?show-comments=true
  //   app.render(req, res, '/blog', Object.assign(params, query));
  // })
  // .listen(3000, (err) => {
  //   if (err) throw err;
  //   console.log('> Ready on http://localhost:3000');
  // });
});
