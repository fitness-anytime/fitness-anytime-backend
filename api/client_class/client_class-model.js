const db = require('../../data/dbConfig');

function find() {
    return db('client_class');
}

function findBy(filter) {
    return db('client_class')
        .where('filter', filter)
        .returning('*')
}

function create(newClient_class) {
    return db('client_class')
        .insert(newClient_class)
        .returning('*')
}

function remove(client_class_id) {
    return db('client_class')
        .where('client_class_id', client_class_id)
        .del()
}

module.exports = {
    find,
    findBy,
    create,
    remove
}