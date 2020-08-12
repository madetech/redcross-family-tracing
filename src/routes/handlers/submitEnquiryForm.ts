import * as express from 'express';
import { body, validationResult } from 'express-validator';

// Not unit tested as the behaviour is covered by the Cypress UI tests

export function addSubmitEnquiryRoute(router: express.Router) {
  const path = '/submit-an-enquiry';
  router.get(path, (req: express.Request, res: express.Response) => {
    res.render('submit-an-enquiry');
  });
  router.post(
    path,
    [
      body('first-name').isLength({ min: 1 }).withMessage('First name is required'),
      body('last-name').isLength({ min: 1 }).withMessage('Last name is required'),
      body('email').isLength({ min: 1 }).withMessage('Email is required'),
      body('phone').isLength({ min: 1 }).withMessage('Phone is required'),
      body('how-should-we-contact-you')
        .isLength({ min: 1 })
        .withMessage('How should we contact you? is required'),
      body('postcode').isLength({ min: 1 }).withMessage('Postcode is required')
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
        postcode: undefined
      };
      rawErrors.forEach((rawError: any) => {
        errors[rawError['param']] = { text: rawError['msg'] };
      });
      res.render('submit-an-enquiry', { errors, body: req.body });
    }
  );
}
