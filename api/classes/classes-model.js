const db = require('../../data/dbConfig');

function find() {
    return db('classes');
}

function findBy(filter) {
    return db('classes')
        .where('filter', filter)
        .returning('*')
}

function create(newClass) {
    return db('classes')
        .insert(newClass)
        .returning('*')
}

function update(class_id, classToUpdate) {
    return db('classes')
        .where('class_id', class_id)
        .update(classToUpdate)
        .returning('*')
}

function remove(class_id) {
    return db('classes')
        .where('class_id', class_id)
        .del()
}

module.exports = {
    find,
    findBy,
    create,
    update,
    remove
}