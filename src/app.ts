import express from 'express';

const path = require('path');
const nunjucks = require('nunjucks');

// Express
const app: express.Application = express();

// Middleware
app.use(express.urlencoded({
  extended: true
}));
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
