// const mongoose = require('mongoose');
//
// const logger = require('../utils/logger');
//
// const Schema = mongoose.Schema;
//
// // CREATE SCHEME
// const reserveSchema = new Schema({
//   first_name: { type: String, required: true, max: 100 },
//   last_name: { type: String, required: true, max: 100 },
//   email: { type: String, required: true, max: 100 },
//   amount: { type: Number, required: true },
//   phone: { type: String, required: false, max: 100 },
//   confirmationId: { type: String, required: true, max: 10 },
// });
//
// // the schema is useless so far we need to create a model using it
// const Reservation = mongoose.model('Reservation', reserveSchema);
//
// module.exports = { Reservation };
