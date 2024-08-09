const express = require('express');
const router = express.Router();
const { createClass, deleteClass, updateClass, getAllClasses, getClassById, getClassByCode } = require('../controllers/classController');


// Define route for creating a class
router.post('/', createClass);
router.delete('/:id', deleteClass);
router.put('/:id', updateClass);
router.get('/', getAllClasses);
router.get('/:id', getClassById);
router.get('/code/:code', getClassByCode);

module.exports = router;