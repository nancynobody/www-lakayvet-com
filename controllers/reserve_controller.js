const nodemailer = require('nodemailer'); // sending confirmation emails, etc
const fs = require('fs');
const logger = require('../utils/logger');
const Reservation = require('../models/reserved_shares').Reservation;

exports.reserve_get = (req, res) => {
  logger.debug('Reserve get called');

  // Reservation.aggregate({
  //   $group: {
  //     _id: null,
  //     reservations: { $sum: 1 }, // count how many there are
  //     reserved: { $sum: '$amount' },
  //   } })
  //   .exec()
  //   .then((reservationTotals) => {
  //     let dbResult = null;
  //     if (!reservationTotals) { // if nothing in the DB
  //       dbResult = { reservations: 0, reserved: 0 };
  //     } else {
  //       dbResult = reservationTotals;
  //     }
      res.render('pages/reserve', {
        //dbResult,
        req,
        //captcha: req.recaptcha,
        page_name: 'reserve',
      });
    // });
    // TODO: @John, should I catch an error here?
};

// exports.reserve_post = (req, res, next) => {
//   logger.debug('Controller post called');
//
//   req.checkBody('first_name', 'Please enter a valid first name.')
//   .notEmpty().isAlpha();
//   req.sanitize('first_name').escape();
//   req.sanitize('first_name').trim();
//
//   req.checkBody('last_name', 'Please enter a valid last name.')
//   .notEmpty().isAlpha();
//   req.sanitize('last_name').escape();
//   req.sanitize('last_name').trim();
//
//   req.checkBody('email', 'Please enter a valid email')
//   .notEmpty().isEmail();
//   req.sanitize('email').escape();
//   req.sanitize('email').trim();
//
//   req.checkBody('phone')
//   .optional().isPhone();
//   req.sanitize('phone').escape();
//   req.sanitize('phone').trim();
//
//   req.checkBody('amount', 'Please enter a valid amount')
//   .notEmpty().isInt().isGteMin();
//   req.sanitize('amount').escape();
//   req.sanitize('amount').trim();
//
//   req.getValidationResult()
//   .catch((errors) => {
//     logger.debug('Validation Errors Found:');
//     res.json({
//       failure: 'Errors found',
//       status: 400,
//       errors,
//     });
//   });
//
//   const confirmationId = () => {
//     let text = '';
//     let i = 0;
//     const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (i = 0; i < 10; i += 1) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   };
//
//   const newReservation = new Reservation({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     amount: req.body.amount,
//     phone: req.body.phone,
//     confirmationId,
//   });
//
//   newReservation.save((err) => {
//     if (err) {
//       logger.error('some error saving reservation');
//     }
//     logger.info('Reservation saved successfully');
//   });
//
//   logger.debug('Reading html file');
//
//   req.toastr.success('Form submitted successfully', null, { positionClass: 'toast-top-left' });
//   res.json({
//     success: 'form submitted successfully',
//   });
//   next();
// };

// fs.readFile(__dirname + '/../public/templates/reservation_confirmation.html', 'utf8', function (err,data) {
//   if (err) {
//       return logger.error(err);
//   } else {
//
//     // Fill in the form data on the HTML template
//     data = data.replace("[AMOUNT]", req.body.amount);
//     data = data.replace("[FIRST_NAME]", req.body.first_name);
//     data = data.replace("[CONFIRMATION_ID]", confirmationId);
//
//     var mailOptions = {
//         from: 'info@lakayvet.com',
//         to: 'info@lakayvet.com', // TODO : update to req.body.email
//         subject: 'Share Reservation Confirmation - Lakay Vèt',
//         html: data,
//         attachments: [
//           {
//             filename: 'logo.png',
//             path: __dirname + '/../public/templates/images/logo.png',
//             cid: 'logo' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'facebook.png',
//             path: __dirname + '/../public/templates/images/facebook.png',
//             cid: 'facebook' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'instagram.png',
//             path: __dirname + '/../public/templates/images/instagram.png',
//             cid: 'instagram' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'twitter.png',
//             path: __dirname + '/../public/templates/images/twitter.png',
//             cid: 'twitter' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'youtube.png',
//             path: __dirname + '/../public/templates/images/youtube.png',
//             cid: 'youtube' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'divider.png',
//             path: __dirname + '/../public/templates/images/divider.png',
//             cid: 'divider' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'rounder-down.png',
//             path: __dirname + '/../public/templates/images/rounder-down.png',
//             cid: 'rounder-down' //same cid value as in the html img src
//           }
//           ,{
//             filename: 'rounder-up.png',
//             path: __dirname + '/../public/templates/images/rounder-up.png',
//             cid: 'rounder-up' //same cid value as in the html img src
//           }
//       ]
//     };
//
//     var transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         type: 'OAuth2',
//         user: config.get('mail.user'),
//         clientId: config.get('mail.clientId'),
//         clientSecret: config.get('mail.clientSecret'),
//         refreshToken: config.get('mail.refreshToken')
//       },
//       debug:true // include smtp traffic in the logs
//     });
//
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         logger.error(error);
//       } else {
//         logger.info('Email sent: ' + info.response);
//       }
//     });
//   }
// });
