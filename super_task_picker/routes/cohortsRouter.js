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
      logoUrl: cohortData.logoUrl,
      name: cohortData.name,
      members: cohortData.members
    })
    .returning('*')
    .then(post => {
      response.redirect(`/cohorts/${post[0].id}`);
    });
});

router.get('/', (request, response) => {
  knex('cohorts')
    .orderBy('created_at', 'desc')
    .then(posts => {
      //   response.send(posts);
      response.render('cohorts/index', { posts: posts });
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
        response.render('cohorts/show', { post: post });
      } else {
        response.redirect('/cohorts/');
      }
    });
});

router.get('/:id/edit', (request, response) => {
  knex('cohorts')
    .where('id', request.params.id)
    .first()
    .then(post => {
      response.render('cohorts/edit', { post: post });
    });
});

router.patch('/:id', (request, response) => {
  const updatedPost = {
    logoUrl: request.body.logoUrl,
    name: request.body.name,
    members: request.body.members
  };

  knex('cohorts')
    .where('id', request.params.id)
    .update(updatedPost)
    .then(() => {
      response.redirect(`/cohorts/${request.params.id}`);
    });
});

module.exports = router;
