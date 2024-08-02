const express = require('express');
const router = express.Router();
const { createClass } = require('../controllers/classController');
const { deleteClass } = require('../controllers/classController');
const { updateClass } = require('../controllers/classController');
const { getAllClasses} = require('../controllers/classController');
const { getClassById } = require('../controllers/classController');
const { getClassByCode } = require('../controllers/classController');

// Define route for creating a class
router.post('/classes', createClass);
router.delete('/classes/:id', deleteClass);
router.put('/classes/:id', updateClass);
router.get('/classes', getAllClasses);
router.get('/classes/:id', getClassById);
router.get('/classes/code/:code', getClassByCode);

module.exports = router;