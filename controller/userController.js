// controllers/userController.js
const fs = require('fs');
const path = require('path');

exports.getUsers = (req, res) => {
    fs.readFile(path.join(__dirname, '../jsondb/users.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users.json');
            return;
        }
        console.log(data);
        res.send(data);
    });
};