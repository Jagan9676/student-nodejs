const db = require('../config/db');

exports.createStudent = (req, res) => {
    const { name, mobileno, email } = req.body;
    const query = 'INSERT INTO student_details (name, mobileno, email) VALUES (?, ?, ?)';
    db.query(query, [name, mobileno, email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Student created successfully', status: 1, data: { success: true } });
    });
};

exports.getAllStudents = (req, res) => {
    db.query('SELECT * FROM student_details', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getStudentById = (req, res) => {
    const { rollno } = req.params;
    db.query('SELECT * FROM student_details WHERE rollno = ?', [rollno], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.updateStudent = (req, res) => {
    const { rollno } = req.params;
    const { name, mobileno, email } = req.body;
    const query = 'UPDATE student_details SET name = ?, mobileno = ?, email = ? WHERE rollno = ?';
    db.query(query, [name, mobileno, email, rollno], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Student updated successfully', status: 1, data: { success: true } });
    });
};

exports.deleteStudent = (req, res) => {
    const { rollno } = req.params;
    db.query('DELETE FROM student_details WHERE rollno = ?', [rollno], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Student deleted successfully', status: 1, data: { success: true } });
    });
};
