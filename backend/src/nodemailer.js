const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  service:'gmail',
  auth: {
     user: 'taitest78190@gmail.com',
     pass: '*TropSecurise78'
  }
});

module.exports = transport