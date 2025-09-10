// Axios automatically converts JSON (no need res.json()).

import API from "../API";

import { useEffect, useState } from "react";

function AxiosExample() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Categories with Axios</h2>
      <ul>
        {categories.map((c) => (
          <li key={c.categoryID}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosExample;
