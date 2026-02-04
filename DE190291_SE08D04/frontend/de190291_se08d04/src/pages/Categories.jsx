import axios from "axios";
import { useEffect, useState } from "react";

function Categories() {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/categories")
      .then(res => setCategories(res.data));
  }, []);

  return (
    <>
        <h3 className = "text-center align-items-center py-3">Category Management</h3>

        <table className = "table table-striped table-hover align-middle px-5" >
            <thead className="table-primary text-white">
                <tr>
                    <th className = "px-3 py-2">ID</th>
                    <th className = "px-3 py-2">Name</th>
                    <th className = "px-3 py-2">Description</th>
                    <th className = "px-3 py-2">Parent ID</th>
                    <th className = "px-3 py-2">Is active?</th>
                </tr>
            </thead>

            <tbody>
                {categories.map(category => (
                    <tr>
                        <td className = "px-3">{category.category_id}</td>
                        <td className = "px-3">{category.category_name}</td>
                        <td className = "px-3">{category.category_description}</td>
                        <td className = "px-3">{category.parentcategoryid}</td>
                        <td className = "px-3">{category.isactive}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Categories;