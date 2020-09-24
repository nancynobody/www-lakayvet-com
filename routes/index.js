/*
* MAIN ROUTER
 */

const express = require('express');

const router = express.Router();

const mainController = require('../controllers/main_controller');

// const reserveController = require('../controllers/reserve_controller');

router.get('/', mainController.index);

// router.get('/fr', mainController.set_fr_cookie);
//
// router.get('/en', mainController.set_en_cookie);
//
// router.get('/ht', mainController.set_cpf_cookie);

// router.get('/transparency', mainController.transparency);

router.get('/press', mainController.press);

router.get('/data', mainController.data);

// router.get('/partners', mainController.partners);

router.get('/careers', mainController.careers);

router.get('/workshops', mainController.workshops);

router.get('/visit', mainController.visit);

router.get('/research', mainController.research);

// router.get('/contact', mainController.contact);

// router.get('/reserve', reserveController.reserve_get);

// router.post('/addReservation', reserveController.reserve_post);

// ERROR AND MAINTENANCE PAGES
router.get('/404', mainController.page_not_found);
router.get('/error', mainController.error);
router.get('/maintenance', mainController.maintenance);

module.exports = router;
