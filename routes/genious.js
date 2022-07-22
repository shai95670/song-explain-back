const express = require('express');
const router = express.Router();
const geniousController = require('../controllers/genious.controller');

router.get('/search', async (req, res, next) => {
  const { q } = req.query;
  try {
    const searches = await geniousController.searchSongs(q);
    res.json(searches);
  } catch(error) {
    console.error(error);
    res.json([]);
  }
});

module.exports = router;
