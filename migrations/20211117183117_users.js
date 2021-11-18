
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('firstName', 128);
    tbl.string('lastName', 128);
    tbl.string('email', 128);
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128);
    tbl.timestamps(true, true);
    tbl
      .integer('roleId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('roles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};

// exports.up = function(knex) {
//     return knex.schema
//     .createTable('users', table => {
//       table.increments('user_id')
//       table.string('firstName', 128)
//         .notNullable()
//       table.string('lastName', 128)
//         .notNullable() 
//       table.string('user_email')
//         .notNullable()
//         .unique()
//       table.string('username')
//         .notNullable()
//         .unique()
//       table.string('user_password')
//         .notNullable()
//       table.integer('role_id')
//         .notNullable()
//         .unsigned()
//         .references('role_id')
//         .inTable('roles')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE')
//     })
//   }
//   exports.down = function(knex) {
//     return knex.schema
//       .dropTableIfExists('users')
//   };