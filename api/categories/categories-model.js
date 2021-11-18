const db = require('../../data/dbConfig');

function find() {
    return db('categories');
}

function findBy(filter) {
    return db('categories')
        .where('filter', filter)
        .returning('*')
}

function create(category) {
    return db('categories')
        .insert(category)
        .returning('*')
}

function update(id, category) {
    return db('categories')
        .where('id', id)
        .update(category)
        .returning('*')
}

function remove(category_id) {
    return db('categories')
        .where('category_id', category_id)
        .del()
}

module.exports = {
    find,
    findBy,
    create,
    update,
    remove
}