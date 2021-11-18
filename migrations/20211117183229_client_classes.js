
exports.up = function(knex) {
  return knex.schema.createTable('class_clients', tbl => {
    tbl
      .integer('classId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('clientId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
    tbl.primary(['classId', 'clientId']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('class_clients');
};

// exports.up = function(knex) {
//     return knex.schema
//       .createTable('client_classes', table => {
//         table.increments()
    
//         table.integer('user_id')
//           .notNullable()
//           .references('user_id')
//           .inTable('users')
//           .onDelete('CASCADE')
//           .onUpdate('CASCADE')
    
//         table.integer('class_id')
//           .notNullable()
//           .references('id')
//           .inTable('class')
//           .onDelete('CASCADE')
//           .onUpdate('CASCADE')
//       })
//   }
//   exports.down = function(knex) {
//     return knex.schema
//       .dropTableIfExists('client_classes')
//   };
