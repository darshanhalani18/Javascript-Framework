const express = require("express");
const router = express.Router();
const db = require("../db");

// Get All Orders
router.get("/", (req, res) => {
  const query = `Select o.orderID , o.quantity , p.name as productName
                    from orders o
                    join
                    product p
                    on o.productID = p.productID
                    `;
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Get Order By ID

router.get("/:id", (req, res) => {
  const orderID = req.params.id;

  const query = `SELECT o.orderID, o.quantity, p.name AS productName
                 FROM orders o
                 JOIN product p ON o.productID = p.productID
                 WHERE o.orderID = ?`;

  db.query(query, [orderID], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Order not found" });
    res.json(result[0]);
  });
});

// Create Order
router.post("/", (req, res) => {
  const { productID, quantity } = req.body;

  const query = "INSERT INTO orders (productID, quantity) VALUES (?, ?)";
  db.query(query, [productID, quantity], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({
      message: "Order created successfully",
      orderID: result.insertId,
    });
  });
});

// Update Order
router.put("/:id", (req, res) => {
  const orderID = req.params.id;
  const { productID, quantity } = req.body;

  const query = `UPDATE orders SET productID = ?, quantity = ? WHERE orderID = ?`;

  db.query(query, [productID, quantity, orderID], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order updated successfully" });
  });
});

// Delete Order
router.delete("/:id", (req, res) => {
  const orderID = req.params.id;

  const query = `DELETE FROM orders WHERE orderID = ?`;

  db.query(query, [orderID], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  });
});

module.exports = router;
