export function firstDateLine(v) {
  return String(v ?? "")
    .trim()
    .split(/\r?\n/)[0]
    .trim();
}

/** Strict dd/MM/yyyy: day and month must be two digits (01/02/2025, not 1/2/2025). */
const DD_MM_YYYY = /^(\d{2})\/(\d{2})\/(\d{4})$/;

function isRealLocalDate(year, month, day) {
  const d = new Date(year, month - 1, day);
  return (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
}

function toIsoFromParts(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Strict dd/MM/yyyy (two-digit day & month) → yyyy-MM-dd for API, or null. */
export function toIsoDateForApi(v) {
  if (v == null || typeof v !== "string") return null;

  const line = firstDateLine(v);
  const match = line.match(DD_MM_YYYY);
  if (!match) return null;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  if (!isRealLocalDate(year, month, day)) return null;

  return toIsoFromParts(year, month, day);
}

export function validateDate(value, { required, format }) {
  if (!firstDateLine(value)) {
    return { iso: null, error: required };
  }
  const iso = toIsoDateForApi(value);
  return iso ? { iso, error: null } : { iso: null, error: format };
}

export function isValidDateInput(v) {
  return firstDateLine(v) !== "" && toIsoDateForApi(v) != null;
}

/** Payload for POST /shoes with dates as ISO strings. */
export function withShoesDatesForApi(data) {
  return {
    ...data,
    productionDate: toIsoDateForApi(data.productionDate),
    importDate: toIsoDateForApi(data.importDate),
  };
}

export function validateShoesForm(shoes) {
  const errors = {};

  if (!String(shoes.shoesName ?? "").trim()) {
    errors.shoesName = "Name is required";
  }

  const rawPrice = shoes.price;
  const priceNum = Number(rawPrice);
  if (
    rawPrice === "" ||
    rawPrice == null ||
    !Number.isFinite(priceNum) ||
    priceNum <= 0
  ) {
    errors.price = "Price is required and must be greater than 0";
  }

  if (!String(shoes.manufacturer ?? "").trim()) {
    errors.manufacturer = "Manufacturer is required";
  }

  const production = validateDate(shoes.productionDate, {
    required: "Production date is required",
    format: "Use dd/MM/yyyy (e.g. 01/02/2025)",
  });
  if (production.error) errors.productionDate = production.error;

  const import_ = validateDate(shoes.importDate, {
    required: "Import date is required",
    format: "Use dd/MM/yyyy (e.g. 01/02/2025)",
  });
  if (import_.error) errors.importDate = import_.error;

  if (production.iso && import_.iso && import_.iso <= production.iso) {
    errors.importDate = "Import date must be later than production date";
  }

  if (shoes.categoryId == null) {
    errors.categoryId = "Category is required";
  }

  return errors;
}
