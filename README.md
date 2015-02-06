# sendBulkEmail
A node.js script to send mass eMail

## Setup

```
npm install
```

## Send Mails

 # create a settings.json and add your mailserver an send parameters
 # create a recipients.csv and add all email-adresses you want to send to. A field "email" must be specified.
 # create a template.tpl by using the fields used in recipients.csv
 
```
node sendBulkMail.js
```