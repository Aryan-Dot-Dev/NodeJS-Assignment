const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

let employees = [];
let nextId = 1;

router.post('/employees', (req, res) => {
    const { name, projectDetails, status } = req.body;
    const employee = { emp_id: nextId++, name, projectDetails, status };
    employees.push(employee);
    res.status(201).json(employee);
});

router.get('/employees', (req, res) => res.json(employees));

router.get('/employees/:id', (req, res) => {
    const employee = employees.find(e => e.emp_id == req.params.id);
    if (employee) res.json(employee);
    else res.status(404).send('Employee not found');
});

router.put('/employees/:id', (req, res) => {
    const employee = employees.find(e => e.emp_id == req.params.id);
    if (employee) {
        Object.assign(employee, req.body);
        res.json(employee);
    } else res.status(404).send('Employee not found');
});

router.delete('/employees/:id', (req, res) => {
    const index = employees.findIndex(e => e.emp_id == req.params.id);
    if (index !== -1) {
        employees.splice(index, 1);
        res.sendStatus(204);
    } else res.status(404).send('Employee not found');
});

app.use('/api', router);
app.listen(3000, () => console.log('Server running on port 3000'));
