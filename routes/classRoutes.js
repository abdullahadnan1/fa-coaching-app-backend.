const express = require('express');
const router = express.Router();
const { createClass, deleteClass, updateClass, getAllClasses, getClassById, getClassByCode } = require('../controllers/classController');


// Define route for creating a class
router.post('/classes', createClass);
router.delete('/classes/:id', deleteClass);
router.put('/classes/:id', updateClass);
router.get('/classes', getAllClasses);
router.get('/classes/:id', getClassById);
router.get('/classes/code/:code', getClassByCode);

module.exports = router;