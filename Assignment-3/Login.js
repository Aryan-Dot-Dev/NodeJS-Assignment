const express = require('express');
const router = express.Router();
let session = {};

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password123") {
        session.user = username;
        res.send("Login successful!");
    } else {
        res.status(401).send("Invalid username or password");
    }
});

router.post('/logout', (req, res) => {
    session = {};
    res.send("Logout successful!");
});

const app = express();
app.use(express.json());
app.use('/auth', router);

app.listen(3000, () => console.log('Server running on port 3000'));