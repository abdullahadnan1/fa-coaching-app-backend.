const express = require('express');
const router = express.Router();
const { createSubject,  deleteSubject, updateSubject, getSubjectByCode, getSubjectById, getAllSubjects} = require('../controllers/subjectController');

router.post('/', createSubject);
router.delete('/:id',  deleteSubject);
router.put('/:id', updateSubject);
router.get('/code/:code', getSubjectByCode);
router.get('/:id', getSubjectById);
router.get('/', getAllSubjects);

module.exports = router;