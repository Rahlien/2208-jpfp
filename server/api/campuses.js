const router = require('express').Router();
const Campus = require('../db/models/Campus');


// GET /api/campuses
router.get('/', async (req, res, next) => {
  try {
    res.send(await Campus.findAll());
  } catch (error) {
    next(error);
  }
});

// GET /api/campuses/:id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Campus.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

// POST /api/campuses
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/campuses/:id
router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    res.send(await campus.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/campuses/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;