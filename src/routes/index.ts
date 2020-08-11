import * as express from 'express';
import { directorPost } from './handlers/director';
import { whereGet, wherePost } from './handlers/where-start-looking';

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

router.get('/where-start-looking', whereGet);
router.post('/where-start-looking', wherePost);

router.get('/not-eligible', (req, res) => {
  res.render('not-eligible');
});

router.get('/in-hiding', (req, res) => {
  res.render('in-hiding');
});

router.get('/eligible-both', (req, res) => {
  res.send('eligible both, desktop 38');
});

router.get('/eligible-one', (req, res) => {
  res.send('eligible one, desktop 37');
});

router.post('/director', directorPost);

router.get('/finding-registering', (req, res) => {
  res.render('finding-registering');
});

// 404 errors
router.get('*', function (req, res) {
  res.status(404).render('error', { errorHeading: 'Page Not Found' });
});

module.exports = router;
