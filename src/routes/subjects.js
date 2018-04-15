const express = require('express');
const Subject = require('./../models/subject');

const router = express.Router();

// TODO: use midlware to handle errors

router.route('/')
  .get((req, res) => {
    Subject.find((err, subject) => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(subject);
    });
  })
  .post((req, res) => {
    const newSubject = new Subject(req.body);

    newSubject.save(err => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(newSubject);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Subject.findById(req.params.id, (err, subject) => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(subject);
    });
  })
  .put((req, res) => {
    Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, subject) => {
        if (err) {
          return res.status(400).json(err);
        }

        return res.json(subject);
      },
    );
  })
  .delete((req, res) => {
    Subject.findByIdAndRemove(req.params.id, (err, subject) => {
      if (err) {
        return res.status(400).json(err);
      }

      const response = {
        message: 'Subject successfully deleted',
        id: subject._id,
      };

      return res.json(response);
    });
  });

module.exports = router;
