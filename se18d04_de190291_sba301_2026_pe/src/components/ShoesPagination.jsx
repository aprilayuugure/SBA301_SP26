import { Button } from "react-bootstrap";

function ShoesPagination({ page, totalPages, totalElements, pageSize, onPageChange }) {
  if (totalPages < 1) return null;

  const from = totalElements === 0 ? 0 : page * pageSize + 1;
  const to = Math.min((page + 1) * pageSize, totalElements);

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
      <span className="text-muted small">
        {totalElements === 0 ? "No items" : `${from}–${to} of ${totalElements}`}
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

export default ShoesPagination;
