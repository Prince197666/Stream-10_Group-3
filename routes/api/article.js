const express = require('express');
const router = express.Router();

// Load Article model
const Article = require('../../models/Article');

// @route GET api/articles/status/:status
// @description Get articles by status
// @access Public
router.get("/status/:status", (req, res) => {
  Article.find({ status: req.params.status })
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      res.status(404).json({ noarticlesfound: "No Articles found" });
    });
});

// @route GET api/articles/id/:status
// @description Get articles by status
// @access Public
router.get("/id/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      res.status(404).json({ noarticlesfound: "No Articles found" });
    });
});

module.exports = router;