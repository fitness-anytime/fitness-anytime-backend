
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {class_name: '30-minute-core', instructor_id: 1, category_id: 2, intensity: '2'}
      ]);
    });
};
