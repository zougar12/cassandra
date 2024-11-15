// src/controllers/itemController.js
const Item = require('../models/itemModel');

const createItem = async (req, res) => {
    try {
        const { name, description } = req.body;
        await Item.createItem(name, description);
        res.status(201).send('Item créé avec succès');
    } catch (err) {
        res.status(500).send('Erreur lors de la création de l\'item');
    }
};

const getItems = async (req, res) => {
    try {
        const items = await Item.getItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des items');
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, name, description } = req.body;
        await Item.updateItem(id, name, description);
        res.status(200).send('Item mis à jour avec succès');
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour de l\'item');
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.deleteItem(id);
        res.status(200).send('Item supprimé avec succès');
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression de l\'item');
    }
};

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem
};
