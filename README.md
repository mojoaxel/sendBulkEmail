# sendBulkEmail
A node.js script to send mass eMail

## Setup

```
npm install
```

## Send Mails

1. create a *settings.json* and add your mailserver an send parameters
2. create a *recipients.csv* and add all email-adresses you want to send to. A field "email" must be specified.
3. create a *template.tpl by* using the fields used in *recipients.csv*
 
```
node sendBulkMail.js
```