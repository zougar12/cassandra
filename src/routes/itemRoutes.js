// src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Créer un nouvel item
router.post('/items', itemController.createItem);

// Récupérer tous les items
router.get('/items', itemController.getItems);

// Mettre à jour un item spécifique
router.put('/items/:id', itemController.updateItem);

// Supprimer un item spécifique
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
