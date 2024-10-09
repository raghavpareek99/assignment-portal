// routes/assignment.js
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const auth = require('../middlewares/auth');

router.post('/upload', auth, assignmentController.uploadAssignment);
router.get('/admins', auth, assignmentController.getAllAdmins);
router.get('/', auth, assignmentController.getAssignmentsForAdmin);
router.post('/:id/accept', auth, assignmentController.acceptAssignment);
router.post('/:id/reject', auth, assignmentController.rejectAssignment);

module.exports = router;
