
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category_name: 'Yoga'},
        {category_name: 'Insanity'},
        {category_name: 'RIPPED'},
        {category_name: 'Pilates'},
        {category_name: 'Aerobic'},
        {category_name: 'Karate'}
      ]);
    });
};
