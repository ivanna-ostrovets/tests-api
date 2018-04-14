const express = require('express');
const db = require('./db');
const subjects = require('./routes/subjects');
const categories = require('./routes/categories');
const tests = require('./routes/tests');

const PORT = 3000;

const app = express();

app.use('/subjects', subjects);
app.use('/categories', categories);
app.use('/tests', tests);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
