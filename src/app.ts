import express, { NextFunction } from 'express';

const path = require('path');
const nunjucks = require('nunjucks');

// Express
const app: express.Application = express();

// Middleware
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// View engine setup
const views: string[] = [path.join(__dirname, 'views'), 'node_modules/govuk-frontend/'];
nunjucks.configure(views, {
  autoescape: true,
  express: app,
  watch: true
});
app.engine('html', nunjucks.render);
app.set('views', views);
app.set('view engine', 'html');

// Routes
app.use(require('./routes'));

// Handle other unexpected errors
app.use(function (error: Error, req: express.Request, res: express.Response, next: NextFunction) {
  res.status(500).render('error', { errorHeading: 'Something went wrong :-(' });
  next();
});

const listeningPort = process.env.PORT || 3000;
app.listen(listeningPort, () => {
  console.log(`Listening on http://localhost:${listeningPort}`);
});
