const express = require('express');
const router = express.Router();
const { createSection, deleteSection, updateSection, getSectionByCode, getAllSections } = require('../controllers/sectionController');

router.post('/sections', createSection);
router.delete('/sections/:id', deleteSection);
router.put('/sections/:id', updateSection);
router.get('/sections/code/:code', getSectionByCode);
router.get('/sections', getAllSections);

module.exports = router;