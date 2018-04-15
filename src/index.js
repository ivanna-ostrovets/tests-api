const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const subjects = require('./routes/subjects');
const categories = require('./routes/categories');
const tests = require('./routes/tests');

const PORT = 3000;

const app = express();

const router = express.Router();

router.use('/subjects', subjects);
router.use('/categories', categories);
router.use('/tests', tests);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', router);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
