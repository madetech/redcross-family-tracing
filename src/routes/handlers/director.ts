import * as express from 'express';

// Not unit tested as the behaviour is covered by the Cypress UI tests
export function directorPost(req: express.Request, res: express.Response) {
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
}
