import { Button } from "react-bootstrap";

function RestaurantsPagination({ page, numberOfElements, totalPages, totalElements, pageSize, onPageChange }) {
  if (totalPages < 1) return null;

  return (
    <div className = "d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
      <span className = "text-muted small">
        Showing {numberOfElements} of {totalElements} records
      </span>
      <div>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={page <= 0}
          onClick={() => onPageChange(page - 1)}
        >
          Prev
        </Button>
        <span className="mx-2 small">
          {page + 1} / {totalPages}
        </span>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={page >= totalPages - 1}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default RestaurantsPagination;
