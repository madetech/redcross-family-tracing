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

export = router;
