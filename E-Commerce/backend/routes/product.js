const express = require("express");
const router = express.Router();

const db = require("../db");

// Get all products with category name

router.get("/", (req, res) => {
  const query = `Select p.productID , p.name as productName , p.price , c.name as categoryName
                      from product p
                      join
                      category c
                      on p.categoryID = c.categoryID
                      `;
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Get product by ID
router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM product WHERE productID = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result[0]);
    }
  );
});

// Add product
router.post("/", (req, res) => {
  const { name, price, categoryID } = req.body;
  db.query(
    "INSERT INTO product (name, price, categoryID) VALUES (?, ?, ?)",
    [name, price, categoryID],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Product added");
    }
  );
});

// Update product
router.put("/:productID", (req, res) => {
  const { name, price, categoryID } = req.body;
  db.query(
    "UPDATE product SET name = ?, price = ?, categoryID = ? WHERE productID = ?",
    [name, price, categoryID, req.params.productID],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Product updated");
    }
  );
});

// Delete product
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM product WHERE productID = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Product deleted");
    }
  );
});

module.exports = router;
