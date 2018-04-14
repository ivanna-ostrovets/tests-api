const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res) => res.json())
  .post((req, res) => res.json());

router.route('/:id')
  .get((req, res) => res.json())
  .delete((req, res) => res.json());

module.exports = router;
