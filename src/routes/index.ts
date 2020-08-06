import * as express from 'express'

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

router.post('/director', (req, res) => {
    res.redirect(req.body.page);
});

router.get('*', function(req, res){
    res.send('404');
  });

export = router;
