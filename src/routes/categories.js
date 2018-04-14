const express = require('express');
const Category = require('./../models/category');

const router = express.Router();

// TODO: use midlware to handle errors

router.route('/')
  .get((req, res) => {
    Category.find((err, category) => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(category);
    });
  })
  .post((req, res) => {
    const newCategory = new Category(req.body);

    newCategory.save(err => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(newCategory);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Category.findById(req.params.id, (err, category) => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(category);
    });
  })
  .put((req, res) => {
    Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, category) => {
        if (err) {
          return res.status(400).json(err);
        }

        return res.json(category);
      },
    );
  })
  .delete((req, res) => {
    Category.findByIdAndRemove(req.params.id, (err, category) => {
      if (err) {
        return res.status(400).json(err);
      }

      const response = {
        message: 'Category successfully deleted',
        id: category._id,
      };

      return res.json(response);
    });
  });

module.exports = router;
