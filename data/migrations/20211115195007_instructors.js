
exports.up = function(knex) {
  return knex.schema
    .createTable('roles', roles => {
        roles.increments('role_id')
        roles.string('role').notNullable().unique()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
    .dropTableIfExists('instructors')
};
