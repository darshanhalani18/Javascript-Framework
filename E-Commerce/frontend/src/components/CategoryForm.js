import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoryForm.css";

function CategoryForm({ edit }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (edit && id) {
      fetch(`http://localhost:5600/categories/${id}`)
        .then((res) => res.json())
        .then((data) => setName(data.name))
        .catch((err) => console.error(err));
    }
  }, [edit, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = edit ? "PUT" : "POST";
    const url = edit
      ? `http://localhost:5600/categories/${id}`
      : "http://localhost:5600/categories";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then(() => navigate("/categories"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h2>{edit ? "Edit" : "Add"} Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{edit ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default CategoryForm;
