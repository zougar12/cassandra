// src/models/itemModel.js
const db = require('../utils/db');

const createItem = async (name, description) => {
    const query = 'INSERT INTO items (id, name, description) VALUES (uuid(), ?, ?)';
    await db.execute(query, [name, description], { prepare: true });
};

const getItems = async () => {
    const query = 'SELECT * FROM items';
    const result = await db.execute(query);
    return result.rows;
};

const updateItem = async (id, name, description) => {
    const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    await db.execute(query, [name, description, id], { prepare: true });
};

const deleteItem = async (id) => {
    const query = 'DELETE FROM items WHERE id = ?';
    await db.execute(query, [id], { prepare: true });
};

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem
};
