// const i18n = require('i18n'); // multi-language tool
const logger = require('../utils/logger');
const moment = require('moment');

// exports.partners = (req, res) => {
//   res.render('pages/partners', {
//     page_name: 'partners',
//     // i18n: res,
//     req,
//   });
// };

exports.careers = (req, res) => {
  res.render('pages/careers', {
    page_name: 'careers',
    // i18n: res,
    req,
  });
};

exports.data = (req, res) => {
  res.render('pages/data', {
    page_name: 'data',
    // i18n: res,
    req,
  });
};

exports.research = (req, res) => {
  res.render('pages/research', {
    page_name: 'research',
    // i18n: res,
    req,
  });
};

// exports.contact = (req, res) => {
//   res.render('pages/contact', {
//     page_name: 'contact',
//     // i18n: res,
//     req,
//   });
// };

exports.press = (req, res) => {
  res.render('pages/press', {
    page_name: 'press',
    // i18n: res,
    req,
  });
};

// exports.transparency = (req, res) => {
//   res.render('pages/transparency', {
//     page_name: 'transparency',
//     i18n: res,
//     req,
//   });
// };

exports.workshops = (req, res) => {
  res.render('pages/workshops', {
    page_name: 'workshops',
    // i18n: res,
    req,
  });
};


exports.visit = (req, res) => {
  res.render('pages/visit', {
    page_name: 'visit',
    // i18n: res,
    req,
  });
};


exports.index = (req, res) => {
  // i18n.setLocale(req, req.cookies.i18n);
  // req.toastr.success('Click here to sign up/"<br>/" for our monthly newsletter',
  //  'Stay Informed!', {
  //    closeButton: true,
  //    positionClass: 'toast-bottom-left',
  //    timeOut: 0,
  //    extendedTimeOut: 0,
  //    escapeHtml: false
  //  });
   // TODO : why doesn't this work???
  // toastr.options.onclick = function () { console.log("Notification clicked"); };
  // http://eepurl.com/cWe6jz

  res.render('pages/index', {
    page_name: 'home',
    // i18n: res,
    moment: moment,
    req,
  });
};

// exports.set_fr_cookie = (req, res) => {
//   res.cookie('i18n', 'fr');
//   res.redirect(req.get('referer'));
// };

// exports.set_en_cookie = (req, res) => {
//   res.cookie('i18n', 'en');
//   res.redirect(req.get('referer'));
// };

// exports.set_cpf_cookie = (req, res) => {
//   res.cookie('i18n', 'cpf');
//   res.redirect(req.get('referer'));
// };

exports.page_not_found = (req, res) => {
  res.render('pages/404', {
    page_name: 'error',
    // i18n: res,
    req,
  });
};

exports.error = (req, res) => {
  res.render('pages/error', {
    page_name: 'error',
    // i18n: res,
    req,
  });
};

exports.maintenance = (req, res) => {
  res.render('pages/maintenance', {
    page_name: 'maintenance',
    // i18n: res,
    req,
  });
};
