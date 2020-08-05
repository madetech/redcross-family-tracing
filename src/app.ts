import express from 'express';

const path = require('path');
const nunjucks = require('nunjucks');

// Helper variables
// const isDev: Boolean = ENV === 'development';
// const lang: string = nconf.get('lang');

// Express
const app: express.Application = express();

// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))

// View engine setup
const views: string[] = [
    path.join(__dirname, 'views'),
    'node_modules/govuk-frontend/'
];
const nunjucksEnvironment = nunjucks.configure(views, {
    autoescape: true,
    express: app,
    watch: true
});
app.engine('njk', nunjucks.render);
app.set('views', views);
app.set('view engine', 'njk');

// Routes
app.use(require('./routes'));

const listeningPort = process.env.PORT || 3000;
app.listen(listeningPort, () => {
  console.log(`Listening on http://localhost:${listeningPort}`);
});
