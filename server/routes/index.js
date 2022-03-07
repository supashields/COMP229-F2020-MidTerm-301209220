/* index.js, Jiu Qiang Xu, 301209220, COMP229-F2020-MidTerm-301209220*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});




module.exports = router;
