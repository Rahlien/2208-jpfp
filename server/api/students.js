const router = require('express').Router();
const Student = require('../db/models/Student');


// GET /api/students
router.get('/', async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (error) {
    next(error);
  }
});

// GET /api/students/:id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Student.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

// POST /api/students
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/students/:id
router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.send(await student.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/students/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.send(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;