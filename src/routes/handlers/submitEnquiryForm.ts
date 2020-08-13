import * as express from 'express';
import { body, validationResult } from 'express-validator';

// Not unit tested as the behaviour is covered by the Cypress UI tests

export function addSubmitEnquiryRoute(router: express.Router) {
  const path = '/submit-an-enquiry';
  router.get(path, (req: express.Request, res: express.Response) => {
    const backLink = req.headers['referer'];
    res.render('submit-an-enquiry', { backLink });
  });
  router.post(
    path,
    [
      body('first-name').notEmpty().withMessage('First name is required'),
      body('last-name').notEmpty().withMessage('Last name is required'),
      body('email')
        .isEmail()
        .withMessage('Email must be a valid email address')
        .notEmpty()
        .withMessage('Email is required'),
      body('phone').notEmpty().withMessage('Phone is required'),
      body('how-should-we-contact-you')
        .notEmpty()
        .withMessage('How should we contact you? is required'),
      body('postcode').notEmpty().withMessage('Postcode is required'),
      body('how-old-are-you').notEmpty().withMessage('How old are you? is required'),
      body('referrer-first-name')
        .if(body('how-old-are-you').equals('Under 18'))
        .notEmpty()
        .withMessage('First name is required'),
      body('referrer-last-name')
        .if(body('how-old-are-you').equals('Under 18'))
        .notEmpty()
        .withMessage('Last name is required'),
      body('referrer-email')
        .if(body('how-old-are-you').equals('Under 18'))
        .isEmail()
        .withMessage('Email must be a valid email address')
        .notEmpty()
        .withMessage('Email is required')
    ],
    (req: express.Request, res: express.Response) => {
      const rawErrors = validationResult(req)['errors'];
      if (rawErrors.length === 0) {
        res.redirect(307, '/send-enquiry');
        return;
      }
      const errors: any = {
        'first-name': undefined,
        'last-name': undefined,
        email: undefined,
        phone: undefined,
        'how-should-we-contact-you': undefined,
        postcode: undefined,
        'how-old-are-you': undefined,
        'referrer-first-name': undefined,
        'referrer-last-name': undefined,
        'referrer-email': undefined
      };
      rawErrors.forEach((rawError: any) => {
        errors[rawError['param']] = { text: rawError['msg'] };
      });
      res.render('submit-an-enquiry', { errors, body: req.body, hasErrors: rawErrors.length > 0 });
    }
  );
}
