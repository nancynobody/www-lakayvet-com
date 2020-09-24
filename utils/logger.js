/*
* This file contains logger configurations so that when you require
* this file all configs are automagically pulled in
*/

const winston = require('winston');

const transportArry = [
  new (winston.transports.File)({
    name: 'info-file',
    filename: 'logs/info.log',
    level: 'info',
  }),
  new (winston.transports.File)({
    name: 'warn-file',
    filename: 'logs/warn.log',
    level: 'warn',
  }),
  new (winston.transports.File)({
    name: 'error-file',
    filename: 'logs/error.log',
    level: 'error',
  }),
  new (winston.transports.Console)({
    colorize: true,
    level: 'warn',
  })];

const logger = new winston.Logger({
  transports: transportArry,
});

// TODO : I am having trouble linking winston to papertrail because I don't
// know how to get the host and port that I am suppoed to use...?
// Requiring winston-papertrail will expose winston.transports.Papertrail`
// require('winston-papertrail').Papertrail;
// var winstonPapertrail = new winston.transports.Papertrail({
//     host: 'logs.papertrailapp.com',
//     port: 12345
//   })

module.exports = logger;
