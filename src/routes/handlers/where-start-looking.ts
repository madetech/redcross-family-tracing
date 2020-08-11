import * as express from 'express';
import { allCountries } from '../../assets/data/all-countries';

const fs = require('fs');
const path = require('path');
const viewData = {
  countries: allCountries
};

export function whereGet(req: express.Request, res: express.Response) {
  res.render('where-start-looking', viewData);
}

// Not unit tested as the behaviour is covered by the Cypress UI tests
export function wherePost(req: express.Request, res: express.Response) {
  const where = req.body.where;
  switch (where) {
    case 'countries': {
      let selectedCountries: string[] = req.body.country;
      selectedCountries = selectedCountries.filter((val: string) => val);
      if (selectedCountries.length === 0) {
        res.render('where-start-looking', viewData);
        break;
      }

      const foundActive = checkCountries(selectedCountries);
      if (foundActive) {
        res.redirect('/in-hiding');
        break;
      } else {
        res.send('no active countries');
        break;
      }
    }
    case 'not-sure': {
      res.send('Im not sure');
      break;
    }
    default: {
      res.render('where-start-looking', viewData);
      break;
    }
  }
}

function checkCountries(countries: string[]) {
  const activePath = path.join(__dirname, '..', '..', 'assets', 'data', 'active-countries.txt');
  const activeCountries = fs
    .readFileSync(activePath)
    .toString()
    .split('\n')
    .filter((val: string) => val !== '');
  return countries.some((r) => activeCountries.indexOf(r) >= 0);
}
