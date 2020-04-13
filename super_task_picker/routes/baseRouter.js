const express = require('express');
const knex = require('../db/connection');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('home');
});

module.exports = router;
