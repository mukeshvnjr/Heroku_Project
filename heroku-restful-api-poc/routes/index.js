var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const contactController = require('../controllers').contact;
router.get('/api/contact', contactController.list);
router.get('/api/contact/:id', contactController.getById);
router.post('/api/contact', contactController.add);
router.put('/api/contact/:id', contactController.update);
router.delete('/api/contact/:id', contactController.delete);

const accountController = require('../controllers').account;
router.get('/api/account', accountController.list);
router.get('/api/account/:id', accountController.getById);
router.post('/api/account', accountController.add);
router.put('/api/account/:id', accountController.update);
router.delete('/api/account/:id', accountController.delete);