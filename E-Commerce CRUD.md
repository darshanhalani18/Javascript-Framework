
# E-Commerce CRUD API Using Node.js, Express & MySQL
It includes three main tables:

- **Category** : stores category names.
- **Product**  :  stores product details and links each product to a category
- **Order**    : stores quantity of product ordered and links to product.
## 🗃️ Database Tables
### 🗂️ Table-1: Category

| Column     | Type           | Constraint                      |
| ---------- | -------------- | ------------------------------- |
| categoryID | `int`          | `AUTO_INCREMENT`, `PRIMARY KEY` |
| name       | `varchar(100)` | `NOT NULL`                      |

### 🛍️ Table-2: Product
| Column     | Type           | Constraint                                    |
| ---------- | -------------- | --------------------------------------------- |
| productID  | `int`          | `AUTO_INCREMENT`, `PRIMARY KEY`               |
| name       | `varchar(100)` | `NOT NULL`                                    |
| price      | `decimal(8,2)` | `NOT NULL`                                    |
| categoryID | `int`          | `FOREIGN KEY REFERENCES Category(categoryID)` |

### 📦 Table-3: Orders
| Column    | Type  | Constraint                                  |
| --------- | ----- | ------------------------------------------- |
| orderID   | `int` | `AUTO_INCREMENT`, `PRIMARY KEY`             |
| quantity  | `int` | `NOT NULL`                                  |
| productID | `int` | `FOREIGN KEY REFERENCES Product(productID)` |

## 🗂️ Database Connection – db.js

```bash
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e-commerce",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("Connection failed!!", err.message);
    return;
  }
  console.log("Successfully Connected to MySQL");
});

module.exports = db; // default export

// module.exports = {db}; // named export

```
This connects to the MySQL e-commerce database using mysql2. It logs a success or error and exports the db object for use in other files.

## 🚀 Server Setup – server.js

```bash
const express = require("express");
const app = express();

app.use(express.json());

// Routes

app.use("/categories", require("./routes/category"));
app.use("/products", require("./routes/product"));
app.use("/orders", require("./routes/order"));

const PORT = 5600;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5600");
});
```
This is the main file where the server starts.

app.use(express.json()) to allow the app to read JSON data from the request body.

We use app.use() to connect different route files:
- /categories → goes to category.js
- /products → goes to product.js
- /orders → goes to order.js

Think of app.use() like a middleman -

When someone sends a request, it checks the path and passes the request to the right file.

## 📁 Inside routes/ – category.js
Handles all CRUD operations for the Category module using Express routes.

```bash
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

```
Here, **const router = express.Router()**

creates a mini Express app specifically for defining routes.Instead of writing all routes directly in server.js, we use express.Router() to separate code by features, like for categories, products, or orders.

and, **module.exports = router**

This line exports the router so it can be used in other files.

In our case, we import this router in server.js and connect it to a path like /categories.

### 🔸We use module.exports = router; — do not use module.exports = category; because we are exporting the router object

## GET /products – Get All Products with Their Category Name

This route uses SQL JOIN to fetch product details along with their corresponding category name.
Instead of returning just the categoryID, it joins the product and category tables to return category names.

```bash
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
```
## Query 
```bash
SELECT 	product.productID,
		product.name as productName,
        product.price,
        category.name as categoryName
        FROM product
        JOIN
        category
        ON product.categoryID = category.categoryID
```

👉 You can perform similar CRUD operations for the orders table, and also use JOIN to fetch related data (like product or category details in each order).
