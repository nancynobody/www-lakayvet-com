// TODO : @John, should config files be in my .gitignore?

const express = require('express');
// const mongoose = require('mongoose'); // used for async mongo db
// const i18n = require('i18n'); // multi-language tool
const session = require('cookie-session'); // storing session cookies
const cookieParser = require('cookie-parser'); // parsing cookies
const bodyParser = require('body-parser');
const expressValidator = require('express-validator'); // form validation
const recaptcha = require('express-recaptcha');
const flash = require('connect-flash');
const helmet = require('helmet');
const path = require('path');
const toastr = require('express-toastr'); // toast and snackbar functionality
// const config = require('config');
const sslRedirect = require('heroku-ssl-redirect');

// TODO : @John Can I avoid requiring winston 2x (once in logger and again here)
const winston = require('winston');
const expressWinston = require('express-winston');

const app = express();
const logger = require('./utils/logger');
const index = require('./routes/index');

const transportArry = [
  new (winston.transports.File)({
    name: 'info-file',
    filename: 'logs/info.log',
    level: 'info',
  }),
  new (winston.transports.File)({
    name: 'warning-file',
    filename: 'logs/warning.log',
    level: 'warning',
  }),
  new (winston.transports.File)({
    name: 'error-file',
    filename: 'logs/error.log',
    level: 'error',
  }),
  new (winston.transports.Console)({
    colorize: true,
    level: 'warning',
  })];
app.use(sslRedirect());
app.use(expressWinston.logger({ // use BEFORE router
  transports: transportArry,
}));
app.use(helmet());
recaptcha.init(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
}));
app.use(flash());
app.use(toastr());
// i18n.configure({
//   locales: ['en', 'fr', 'cpf'],
//   cookie: 'i18n',
//   directory: path.join(__dirname, '/locales'),
//   defaultLocale: 'en',
// });
// app.use(i18n.init);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator({
  // customValidators: {
  //   isPhone(value) {
  //     if (value) {
  //       return true;
  //     }
  //     return true;
  //   },
  //   isGteMin(intNum) {
  //     return intNum >= process.env.MIN_INVESTMENT;
  //   },
  // },
})); // Keep this after the bodyParser middlewares!

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/vendor')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);
app.use('/', index); // mount index at /
app.use((req, res) => {
  res.redirect('/404');
});

app.use(expressWinston.errorLogger({ // use AFTER router
  transports: transportArry,
}));

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGO_DB, { useMongoClient: true });
// const db = mongoose.connection;
// TODO @John, how can I make this more robust in case I get a
// connection error or anything
// db.on('error', logger.error.bind(console, 'MongoDB connection error:'));

app.listen(app.get('port'), () => {
  logger.info(`Running in:  ${process.env.NODE_ENV}`);
  logger.info('Node app is running on port', app.get('port'));
});
