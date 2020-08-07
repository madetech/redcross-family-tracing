import * as express from 'express';
import { countries } from '../assets/data/country';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/enquiry', (req, res) => {
  res.render('enquiry');
});

router.get('/what-help', (req, res) => {
  res.render('what-help');
});

router.get('/family-reunion', (req, res) => {
  res.render('family-reunion');
});

router.get('/find-two-ways', (req, res) => {
  res.render('find-two-ways');
});

router.get('/relative-message', (req, res) => {
  res.render('relative-message');
});

router.get('/check-eligibility', (req, res) => {
  res.render('check-eligibility');
});

router.get('/how-lose-contact', (req, res) => {
  res.render('how-lose-contact');
});

router.get('/where-start-looking', (req, res) => {
  res.render('where-start-looking');
});

router.get('/not-eligible', (req, res) => {
  res.send("We can't help");
});

router.get('/data/countries', (req, res) => {
  res.send(countries);
});

router.post('/director', (req, res) => {
  const page = req.body.page;
  if (page) {
    res.redirect(page);
    return;
  }

  const originalPage = req.headers.referer;
  if (originalPage) {
    res.redirect(originalPage);
    return;
  }

  console.error('There was an error at /director. Page: %d, referer: %d', page, originalPage);
  res.send('error');
});

router.get('*', function (req, res) {
  res.send('404');
});

module.exports = router;
