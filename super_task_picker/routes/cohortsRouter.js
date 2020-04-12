const express = require('express');
// const knex = require('../db/connections');
const router = express.Router();

router.get('/new', (request, response) => {
  response.render('cohorts/new');
});

module.exports = router;
