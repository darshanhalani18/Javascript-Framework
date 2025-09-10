const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors()); // allow all origins (frontend can access)
app.use(express.json());

// Routes

app.use("/categories", require("./routes/category"));
app.use("/products", require("./routes/product"));
app.use("/orders", require("./routes/order"));

const PORT = 5600;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5600");
});
