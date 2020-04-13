exports.up = function(knex, Promise) {
  return knex.schema.creatTable('cohorts', table => {
    table.increments('id');
    table.string('name');
    table.string('members');
    table.string('logoUrl');
    table.timestamp(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohorts');
};
