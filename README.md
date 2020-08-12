# British Red Cross Family Tracing

![Test and Deploy](https://github.com/madetech/redcross-family-tracing/workflows/Test%20and%20Deploy/badge.svg?branch=master)

Simple web application to help people find out if they are eligible for help finding lost family members.

## Requirements

The app requires [Node.js 12](https://nodejs.org/en/download/) installed to run locally.

We recommend using [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) then you can just run `nvm use` in your terminal and the correct version of Node.js will be installed (if required) and used.

## Installation

    git clone git@github.com:madetech/redcross-family-tracing.git
    cd redcross-family-tracing
    npm install

## Start the app

    npm run dev

This will recompile and restart the app any time you make changes to the source or sass files.

## Run the Cypress tests

    npm run test:cypress:open

Then you can just click `All.features` or a specific feature to run the tests. They will re run automatically any time you make a change to one of the test files.

You can run the tests slower to demonstrate to stakeholders, e.g.

    CYPRESS_COMMAND_DELAY=1000 npm run test:cypress:open

## Formatting the code

To apply our standard rules across the codebase run...

    npm run lint:fix

## Continuous integration/deployment pipeline

The app uses GitHub Actions to build/test all commits to master and deploys them to Heroku at https://redcross-family-tracing.herokuapp.com/ if the tests are successful.

If they are changed you will need to update the `HEROKU_API_KEY` and `HEROKU_EMAIL` secrets in GitHub.

## Sending of Enquiries

The app uses SendGrid to send emails to the Red Cross once the 'Make an Equiry' form has been submitted. There are a couple of Environment Variables that control this:

| Env. Var         | Details                                                        |
| ---------------- | -------------------------------------------------------------- |
| SENDGRID_API_KEY | Obtained from SendGrid, used for authentication                |
| EMAIL_FROM_ADDR  | The email address that the enquiry should come from            |
| EMAIL_FROM_NAME  | The name that the enquiry should come from                     |
| EMAIL_TO_ADDR    | Comma separated list of email addresses to send the enquiry to |
| EMAIL_SUBJECT    | The subject of the email being sent                            |
