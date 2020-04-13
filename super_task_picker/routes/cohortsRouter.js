const express = require('express');
const knex = require('../db/connection');
const router = express.Router();

router.get('/new', (request, response) => {
  response.render('cohorts/new');
});

router.post('/', (request, response) => {
  //
  const cohortData = request.body;
  knex('cohorts')
    .insert({
      content: cohortData.content
    })
    .returning('*')
    .then(post => {
      response.redirect(`/cohorts/${post[0].id}`);
    });
});

router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex('cohorts')
    .where('id', id)
    .first()
    .then(post => {
      console.log(post);
      if (post) {
        response.render('cohorts/show', { cohorts: post });
      } else {
        response.redirect('/cohorts/');
      }
    });
});

module.exports = router;
