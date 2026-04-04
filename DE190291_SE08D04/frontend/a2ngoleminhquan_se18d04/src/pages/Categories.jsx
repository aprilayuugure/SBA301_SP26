import { useReducer } from "react";
import { categoryInitialState, categoryReducer } from "../stores/CategoryReducer";
import { useCategories } from "../hooks/useCategories";

function Categories() {
    const [state, dispatch] = useReducer(categoryReducer, categoryInitialState);

    const { deleteCategory } = useCategories(state, dispatch);    

    return (
    <>
        <h3 className = "text-center align-items-center py-3">Category Management</h3>

        <div className = "d-flex justify-content-center my-3">
            <button className = "btn btn-primary">Add category</button>
        </div>

        <table className = "table table-striped table-hover align-middle px-5" >
            <thead className="table-primary text-white">
                <tr>
                    <th className = "px-3 py-2">ID</th>
                    <th className = "px-3 py-2">Name</th>
                    <th className = "px-3 py-2">Description</th>
                    <th className = "px-3 py-2">Parent</th>
                    <th className = "px-3 py-2">Is active?</th>
                </tr>
            </thead>

            <tbody>
                {state.categories.map(category => (
                    <tr key = {category.categoryId}>
                        <td className = "px-3">{category.categoryId}</td>
                        <td className = "px-3">{category.categoryName}</td>
                        <td className = "px-3">{category.categoryDescription}</td>
                        <td className = "px-3">{category.parentCategory?.categoryName}</td>
                        <td className = "px-3">{category.isActive ? "ACTIVE" : "INACTIVE"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Categories;