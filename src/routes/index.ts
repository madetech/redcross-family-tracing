import * as express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        page: 'Home'
    });
});

router.get('/enquiry', (req, res) => {
    res.render('enquiry', {
        page: 'Make an Enquiry'
    });
});

export = router;