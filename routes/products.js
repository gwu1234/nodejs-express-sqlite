const express = require('express');
const router = express.Router();
const products = require('../services/products');

/* GET product listing. */
router.get('/', async function(req, res, next) {
  try {
    let result = await products.getProducts()
    return res.status(200).json(result)
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

/* POST product */
router.post('/', async function(req, res, next) {
  try {
    let result = await products.create(req.body)
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while posting product `, err.message);
    res.json({message: "posting failed"});
  }
});

module.exports = router;