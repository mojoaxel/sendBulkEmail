'use strict';

var nodemailer = require('nodemailer');
var async = require('async');
var fs = require('fs');
var handlebars = require("handlebars");
var Converter = require('csvtojson').core.Converter;

var settings = require('./settings.json');
var template = fs.readFileSync("./template.tpl", "utf8");

var csvConverter = new Converter();
var transporter = nodemailer.createTransport(settings.transporterOptions);
var templateRenderer = handlebars.compile(template);

csvConverter.on("end_parsed",function(recipients){
	async.eachSeries(recipients, function(recipient, callback){
		var message = {
			from: settings.send.from,
			subject: settings.send.subject,
			to: recipient.email,
			html: templateRenderer(recipient)
		};

		transporter.sendMail(message, function(error, info) {
			if (error) {
				console.log(recipient.email + ' - Error: ', error.message);
				return;
			}
			console.log(recipient.email + ' - OK: ', info.response);
			callback();
		});
		
	});
});
fs.createReadStream('./recipients.csv').pipe(csvConverter);

