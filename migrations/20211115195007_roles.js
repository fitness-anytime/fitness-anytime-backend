
exports.up = function(knex) {
  return knex.schema.createTable('roles', tbl => {
    tbl.increments();
    tbl
      .string('name', 128)
      .unique()
      .notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};

// exports.up = function(knex) {
//   return knex.schema
//   .createTable('roles', table => {
//     table.increments('role_id')
//     table.string('role')
//       .notNullable()
//       .unique()
//   })
// }
// exports.down = function(knex) {
//   return knex.schema
//     .dropTableIfExists('roles')
// };