
exports.up = function(knex) {
  return knex.schema.createTable('categories', tbl => {
    tbl.increments();
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    tbl.string('description', 128);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories');
};

// exports.up = function(knex) {
//     return knex.schema
//     .createTable('categories', table => {
//       table.increments('category_id')
//       table.strig('category_name', 128)
//         .notNullable()
//       table.string('description', 300)
//     })
//   }
//   exports.down = function(knex) {
//     return knex.schema
//       .dropTableIfExists('categories')
//   };
