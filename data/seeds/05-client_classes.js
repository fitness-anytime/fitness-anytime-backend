
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('client_classes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('client_classes').insert([
        {user_id: 2, class_id: 1}
      ]);
    });
};
