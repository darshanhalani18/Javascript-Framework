import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryDetail.css";

function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5600/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!category) return <p>Loading...</p>;

  return (
    <div className="detail-card">
      <h2>Category Detail</h2>
      <p>
        <strong>ID:</strong> {category.categoryID}
      </p>
      <p>
        <strong>Name:</strong> {category.name}
      </p>
    </div>
  );
}

export default CategoryDetail;
