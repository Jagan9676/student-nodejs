const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:rollno', studentController.getStudentById);
router.put('/students/:rollno', studentController.updateStudent);
router.delete('/students/:rollno', studentController.deleteStudent);

module.exports = router;
