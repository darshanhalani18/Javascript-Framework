import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "12px 20px",
        background: "#f8f8f8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>E-Commerce App</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </Link>
        <Link
          to="/categories"
          style={{ textDecoration: "none", color: "#333" }}
        >
          Categories
        </Link>
        <Link
          to="/categories/add"
          style={{ textDecoration: "none", color: "#333" }}
        >
          Add Category
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
