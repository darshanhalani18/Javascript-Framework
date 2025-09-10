import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CategoryList.css";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5600/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5600/categories/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setCategories(categories.filter((c) => c.categoryID !== id));
        }
      })
      .catch((err) => console.error("Error deleting category:", err));
  };

  return (
    <div className="list-container">
      <h2>All Categories</h2>
      <table className="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.categoryID}>
              <td>{cat.categoryID}</td>
              <td>
                <Link to={`/categories/${cat.categoryID}`}>{cat.name}</Link>
              </td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/categories/edit/${cat.categoryID}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(cat.categoryID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;
