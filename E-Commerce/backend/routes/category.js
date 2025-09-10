const express = require("express");

const router = express.Router();
const db = require("../db");

// Get all categories
router.get("/", (req, res) => {
  db.query("SELECT * FROM category", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Get category by ID
router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM category where categoryID = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result[0]);
    }
  );
});

// Add Category
router.post("/", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO category (name) VALUES (?)", [name], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Category added");
  });
});

// Update category
router.put("/:id", (req, res) => {
  const { name } = req.body;
  db.query(
    "UPDATE category SET name = ? WHERE categoryID = ?",
    [name, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Category updated");
    }
  );
});

// Delete category
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM category WHERE categoryId = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Category deleted");
    }
  );
});

module.exports = router;
