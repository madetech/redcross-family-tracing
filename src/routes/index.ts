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
  res.render('eligible', { eligibleBoth: true, backLink: '/in-hiding' });
});

router.get('/eligible-country-not-sure', (req, res) => {
  res.render('eligible', { showNotSureAdvice: true, backLink: '/where-start-looking' });
});

router.get('/eligible-no-country-active', (req, res) => {
  res.render('eligible', {
    showNoActiveCountriesAdvice: true,
    backLink: '/where-start-looking'
  });
});

router.get('/eligible-not-public', (req, res) => {
  res.render('eligible', {
    showNoPublicServicesAdvice: true,
    backLink: '/in-hiding'
  });
});

router.post('/director', directorPost);

router.get('/finding-registering', (req, res) => {
  res.render('finding-registering');
});

router.get('/finding-searching', (req, res) => {
  res.render('finding-searching');
});

router.get('/submit-an-enquiry', (req, res) => {
  res.render('submit-an-enquiry');
});

router.get('/enquiry-sent', (req, res) => {
  res.render('enquiry-sent', { enquiryReference: '123456' });
});

// ToDo: https://trello.com/c/cbLIko8D/44-send-enquiry-desktop-15
router.post('/send-enquiry', (req, res) => {
  res.send('ToDo: send enquiry, desktop 37\n\n' + JSON.stringify(req.body));
});

// 404 errors
router.get('*', function (req, res) {
  res.status(404).render('error', { errorHeading: 'Page Not Found' });
});

module.exports = router;
