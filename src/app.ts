import express from 'express';

const path = require('path');
const nunjucks = require('nunjucks');

// Helper variables
// const isDev: Boolean = ENV === 'development';
// const lang: string = nconf.get('lang');
const views: string = path.join(__dirname, 'views');

// Express
const app: express.Application = express();


const listeningPort = process.env.PORT || 3000;

// View engine setup
app.engine('njk', nunjucks.render);
app.set('views', views);
app.set('view engine', 'njk');

const env = nunjucks.configure(views, {
  autoescape: true,
  express: app,
  watch: true
});

app.use('/public', express.static(path.join(__dirname, '/public')))


// Routes
app.use(require('./routes'));

app.listen(listeningPort, () => {
  console.log(`Listening on http://localhost:${listeningPort}`);
});
