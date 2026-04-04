import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import ShoesPagination from "../components/ShoesPagination";
import ConfirmationModal from "../components/ConfirmationModal";
import { useShoesContext } from "../contexts/ShoesContext";

function ShoesPage() {
  const { state, searchShoes, deleteShoes, goToPage, reloadList } = useShoesContext();
  const [selectedId, setSelectedId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    searchShoes({
      name: "",
      category: "",
      page: 0,
      size: 10,
      sortBy: "shoesId",
      direction: "asc",
    });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    const ok = await deleteShoes(selectedId);
    setShowConfirm(false);
    if (ok) reloadList();
  };

  const { page, totalPages, size, totalElements } = state.pagination;

  return (
    <Container>
      <h2 className="h4 mb-3">Shoes list</h2>
      <Filters />
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.shoesList?.length ? (
            state.shoesList.map((s) => (
              <tr key={s.shoesId}>
                <td>{s.shoesId}</td>
                <td>{s.shoesName}</td>
                <td>{s.categoryName}</td>
                <td>{s.manufacturer}</td>
                <td>{s.price}</td>
                <td>
                  <Link to={`/shoes/${s.shoesId}`}>View</Link>
                  {" · "}
                  <a href="#del" onClick={(e) => handleDelete(e, s.shoesId)}>
                    Delete
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-muted py-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <ShoesPagination
        page={page}
        totalPages={totalPages}
        totalElements={totalElements}
        pageSize={size}
        onPageChange={goToPage}
      />

      {state.generalError ? (
        <p className="text-danger small mt-2">{state.generalError}</p>
      ) : null}

      <ConfirmationModal
        show={showConfirm}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
        message="Delete this item?"
      />
    </Container>
  );
}

export default ShoesPage;
