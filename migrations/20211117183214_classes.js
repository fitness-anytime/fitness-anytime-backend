
exports.up = function(knex) {
  return knex.schema.createTable('classes', tbl => {
    tbl.increments();
    tbl.string('title', 128).notNullable();
    tbl
      .integer('instructorId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('categoryId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.date('scheduleTime');
    tbl.string('address', 128);
    tbl.string('city', 128);
    tbl.string('state', 128);
    tbl.string('zipCode', 128);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('classes');
};

// exports.up = function(knex) {
//     return knex.schema
//     .createTable('classes', table => {
//       table.increments('class_id');
//       table.string('class_name')
//         .notNullable()
//         .unique()
//         .index();
//       table.integer('instructor_id')
//         .notNullable()
//         .unsigned()
//         .references('instructor_id')
//         .inTable('users')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE')
//       table.integer('catagory_id')
//         .notNullable()
//         .unsigned()
//         .references('catagory_id')
//         .inTable('catagories')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE')
//       table.string('intensity')
//         .notNullable()
//       table.string('date')
//         .notNullable()
//       table.string('address', 128)
//       table.strig('city')
//       table.strig('state')
//       table.strig('zip')
//       table.integer('max_size')
//         .notNullable();
//       table.float('duration')
//         .notNullable()
//       table.integer('current_members')
//         .defaultTo(0);
//     })
//   }
//   exports.down = function(knex) {
//     return knex.schema
//       .dropTableIfExists('classes')
//   };
