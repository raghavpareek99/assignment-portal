// controllers/assignmentController.js
const Assignment = require('../models/Assignment');
const User = require('../models/User');

exports.uploadAssignment = async (req, res) => {
    const { task, admin } = req.body;
    try {
        const adminUser = await User.findOne({ email: admin, role: 'admin' });
        if (!adminUser) {
            return res.status(400).json({ msg: 'Admin not found' });
        }
        const newAssignment = new Assignment({
            userId: req.user.id,
            task,
            admin:adminUser._id
        });

        const assignment = await newAssignment.save();
        res.json(assignment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAssignmentsForAdmin = async (req, res) => {
    try {
        const assignments = await Assignment.find({ admin: req.user.id }).populate('userId', 'name');
        res.json(assignments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.acceptAssignment = async (req, res) => {
    try {
        let assignment = await Assignment.findById(req.params.id);
        if (!assignment) {
            return res.status(404).json({ msg: 'Assignment not found' });
        }
        if (assignment.admin.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        assignment.status = 'accepted';
        await assignment.save();
        res.json(assignment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.rejectAssignment = async (req, res) => {
    try {
        let assignment = await Assignment.findById(req.params.id);
        if (!assignment) {
            return res.status(404).json({ msg: 'Assignment not found' });
        }
        if (assignment.admin.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        assignment.status = 'rejected';
        await assignment.save();
        res.json(assignment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllAdmins = async (req, res) => {  // New function to fetch all admins
    try {
        const admins = await User.find({ role: 'admin' }).select('name email');
        res.json(admins);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
