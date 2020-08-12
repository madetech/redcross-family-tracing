import * as express from 'express';
import { exception } from 'console';
import { mail } from 'sendgrid';
import { StringBuilder } from 'typescript-string-operations';
import { nanoid } from 'nanoid';

const newLine = process.platform === 'win32' ? '\r\n' : '\n';

export function sendEnquiryPost(req: express.Request, res: express.Response) {
  const enquiryId = nanoid(5);
  const content: string = buildContent(enquiryId, req);
  sendEmail(enquiryId, content);

  res.redirect(`/enquiry-sent?id=${enquiryId}`);
}

function buildContent(enquiryId: string, req: express.Request): string {
  const firstName: string = req.body['first-name'];
  const lastName: string = req.body['last-name'];
  const email = req.body['email'] || '';
  const phone = req.body['phone'] || '';
  const postcode = req.body['postcode'] || '';
  const howContact = req.body['how-should-we-contact-you'];
  const interpreter = req.body['interpreter-needed-primary-language'];
  const referrerRelationship = req.body['referrer-relationship'];
  const referrersEmailAddress = req.body['referrers-email-address'];

  let builder = new StringBuilder('Family Tracing Enquiry');
  builder.Append(newLine);
  builder.AppendFormat('EnquiryId: {0} {1}', enquiryId, newLine);
  builder.Append(newLine);
  builder.AppendFormat('Name: {0} {1} {2}', firstName, lastName, newLine);
  builder.AppendFormat('Email: {0} {1}', email, newLine);
  builder.AppendFormat('Phone: {0} {1}', phone, newLine);
  builder.AppendFormat('How to contact: {0} {1}', howContact, newLine);
  builder.AppendFormat('Postcode: {0} {1}', postcode, newLine);
  builder.Append(newLine);
  builder.AppendFormat('Interpreter language: {0} {1}', interpreter || 'N/A', newLine);
  builder.Append(newLine);
  builder.AppendFormat('Referer relationship: {0} {1}', referrerRelationship, newLine);
  builder.AppendFormat('Referer email: {0} {1}', referrersEmailAddress, newLine);

  return builder.ToString();
}

function sendEmail(enquiryId: string, content: string): void {
  const emailFromAddress: any = process.env.EMAIL_FROM_ADDR;
  const emailFromName: any = process.env.EMAIL_FROM_NAME;
  const emailToAddresses: string[] | undefined = process.env.EMAIL_TO_ADDR?.split(',');
  const emailSubject: any = process.env.EMAIL_SUBJECT + ' - ' + enquiryId;

  if (emailToAddresses === undefined) {
    console.error('No valid email to addresses');
    throw exception('No valid email to addresses');
  }

  const fromEmail: any = new mail.Email(emailFromAddress, emailFromName);
  const emailContent: any = new mail.Content('text/plain', content);
  const email: any = new mail.Mail();
  email.setFrom(fromEmail);
  email.setSubject(emailSubject);
  email.addContent(emailContent);

  let personalization = new mail.Personalization();

  emailToAddresses.forEach((e) => {
    let emailToAdd = new mail.Email(e);
    personalization.addTo(emailToAdd);
  });

  email.addPersonalization(personalization);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: email.toJSON()
  });

  sg.API(request, (error: any, response: any) => {
    if (error) {
      console.log(response.statusCode);
      console.error(error);
    }
  });
}
