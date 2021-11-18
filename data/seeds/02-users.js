
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstName: 'Abe', lastName: 'Johnson', user_email: 'abejohnson@yahoo.com', username: 'lambda@gmail.com', user_password: 'school', role_id: '1'},
        {firstName: 'Jo', lastName: 'Smith', user_email: 'josmith@gmail.com', username: 'apple@gmail.com', user_password: '123456', role_id: '2'}
      ]);
    });
};
