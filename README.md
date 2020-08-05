# British Red Cross Family Tracing

![Test and Deploy](https://github.com/madetech/redcross-family-tracing/workflows/Test%20and%20Deploy/badge.svg?branch=master)

Description TBC

## Installation

    git clone git@github.com:madetech/redcross-family-tracing.git 
    cd redcross-family-tracing
    npm install

## Start the app

    npm run start:watch

This will recompile and restart the app any time you make changes to the source files.

## Run the Cypress tests

    npm run test:cypress:open

Then you can just click `All.features` or a specific feature to run the tests. They will re run automatically any time you make a change to one of the test files.

## Continuous integration/deployment pipeline

The app uses GitHub Actions to build/test all commits to master and deploys them to Heroku at https://redcross-family-tracing.herokuapp.com/ if the tests are successful.

If they are changed you will need to update the `HEROKU_API_KEY` and `HEROKU_EMAIL` secrets in GitHub.
