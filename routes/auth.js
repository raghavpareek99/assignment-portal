// routes/auth.js
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');

router.post('/upload', auth, assignmentController.uploadAssignment);
router.get('/admins', auth, assignmentController.getAssignmentsForAdmin);
router.get('/assignments', auth, assignmentController.getAssignmentsForAdmin);  
router.post('/assignments/:id/accept', auth, assignmentController.acceptAssignment);
router.post('/assignments/:id/reject', auth, assignmentController.rejectAssignment);
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
