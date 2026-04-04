import { Button } from "react-bootstrap";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function RestaurantsPagination({
  page,
  totalPages,
  totalElements,
  onPageChange,
}) {
  const { state } = useRestaurantContext();
  const recordsOnPage = state.restaurantList?.length ?? 0;

  const nTotal = Number(totalElements);
  const y = Number.isFinite(nTotal) ? Math.max(0, Math.floor(nTotal)) : 0;

  const nOnPage = Number(recordsOnPage);
  const x = Number.isFinite(nOnPage) ? Math.max(0, Math.floor(nOnPage)) : 0;

  const nPage = Number(page);
  const rawPage = Number.isFinite(nPage) ? Math.floor(nPage) : 0;

  const nTotalPages = Number(totalPages);
  const pages =
    y === 0
      ? 0
      : Number.isFinite(nTotalPages) && nTotalPages > 0
        ? Math.floor(nTotalPages)
        : 1;

  const safePage =
    y === 0 || pages === 0
      ? 0
      : Math.min(Math.max(0, rawPage), Math.max(0, pages - 1));

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
      <span className="text-muted small">
        Showing {x} of {y} records.
      </span>
      <div>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={y === 0 || pages === 0 || safePage <= 0}
          onClick={() => onPageChange(safePage - 1)}
        >
          Prev
        </Button>
        <span className="mx-2 small">
          {pages === 0 ? 0 : safePage + 1} / {pages === 0 ? 0 : pages}
        </span>
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={y === 0 || pages === 0 || safePage >= pages - 1}
          onClick={() => onPageChange(safePage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default RestaurantsPagination;
