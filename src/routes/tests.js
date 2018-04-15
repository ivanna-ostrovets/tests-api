const express = require('express');
const Test = require('./../models/test');

const router = express.Router();

// TODO: use midlware to handle errors

router.route('/')
  .get((req, res) => {
    Test.find(req.query || {})
      .exec((err, test) => {
        if (err) {
          return res.status(400).json(err);
        }

        return res.json(test);
      });
  })
  .post((req, res) => {
    const newTest = new Test(req.body);

    newTest.save(err => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(newTest);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Test.findById(req.params.id, (err, test) => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(test);
    });
  })
  .put((req, res) => {
    Test.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, test) => {
        if (err) {
          return res.status(400).json(err);
        }

        return res.json(test);
      },
    );
  })
  .delete((req, res) => {
    Test.findByIdAndRemove(req.params.id, (err, test) => {
      if (err) {
        return res.status(400).json(err);
      }

      const response = {
        message: 'Test successfully deleted',
        id: test._id,
      };

      return res.json(response);
    });
  });
module.exports = router;
