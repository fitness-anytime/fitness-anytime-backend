
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
    table.integer('instructor_id')
      .notNullable()
      .unsigned()
      .references('instructor_id')
      .inTable('users')
      .onUpdate(CASCADE)
      .onDelete(CASCADE)
    table.integer('catagory_id')
      .notNullable()
      .unsigned()
      .references('catagory_id')
      .inTable('catagories')
      .onUpdate(CASCADE)
      .onDelete(CASCADE)
    table.string('intensity')
      .notNullable()
    table.string('date')
      .notNullable()
    table.string('address', 128)
      .notNullable()
    table.strig('city')
      .notNullable()
    table.strig('state')
      .notNullable()
    table.strig('zip')
      .notNullable()
    table.integer('max_size')
      .notNullable();
    table.float('duration')
      .notNullable()
    table.integer('current_members')
      .defaultTo(0);
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
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  
      table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('class')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructors')
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
};
