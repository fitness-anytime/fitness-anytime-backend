
exports.up = function(knex) {
  return knex.schema
  .createTable('roles', table => {
    table.increments('role_id')
    table.string('role')
      .notNullable()
      .unique()
  })
  .createTable('users', table => {
    table.increments('user_id')
    table.string('firstName', 128)
      .notNullable()
    table.string('lastName', 128)
      .notNullable() 
    table.string('user_email')
      .notNullable()
      .unique()
    table.string('user_password')
      .notNullable()
    table.integer('role_id')
      .notNullable()
      .unsigned()
      .references('role_id')
      .inTable('roles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })

  .createTable('categories', table => {
    table.increments('category_id')
    table.strig('category_name', 128)
      .notNullable()
    table.string('description', 300)
  })

  .createTable('classes', table => {
    table.increments('class_id');
    table.string('class_name')
      .notNullable()
      .unique()
      .index();
    table.string('instructor_name').notNullable();
    table.string('type')
      .notNullable();
    table.string('intensity')
      .notNullable()
      .index();
    table.string('date')
      .notNullable()
      .index();
    table.string('location')
      .notNullable()
      .index();
    table.integer('max_size')
      .notNullable();
    table.float('duration')
      .notNullable();
    table.bool('signedUp')
      .defaultTo('false');
    table.integer('current_members')
      .defaultTo(0);
  })

  .createTable('instructors', table => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .unique()
      .references('user_id')
      .inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    table.integer('class_id')
      .notNullable()
      .unique()
      .references('class_id')
      .inTable('classes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
    .createTable('roles', roles => {
        roles.increments('role_id')
        roles.string('role').notNullable().unique()
    })

    .createTable('user_classes', table => {
      table.increments()
  
      table.integer('user_id')
        .notNullable()
        .references('user_id')
        .inTable('user')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  
      table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('class')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
}
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructors')
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
};
