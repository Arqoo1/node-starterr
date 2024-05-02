const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});