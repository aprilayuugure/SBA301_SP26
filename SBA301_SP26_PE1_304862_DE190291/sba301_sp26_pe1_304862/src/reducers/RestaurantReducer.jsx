import { DEFAULT_PAGE_SIZE } from "../constants/pagination";

const newRestaurant = {
  restaurantId: null,
  restaurantName: "",
  priceFrom: 0.0,
  priceTo: 0.0,
  ownerName: "",
  openDate: "",
  address: "",
  categoryId: null,
};

const defaultFilter = {
  name: "",
  categoryId: "",
};

const defaultPagination = {
  page: 0,
  totalPages: 0,
  size: DEFAULT_PAGE_SIZE,
  totalElements: 0,
};

export const restaurantInitialState = {
  restaurant: newRestaurant,
  restaurantList: [],
  categories: [],
  filter: defaultFilter,
  pagination: defaultPagination,
  errors: {},
  generalError: "",
};

export function restaurantReducer(state, action) {
  switch (action.type) {
    case "SET_RESTAURANTS_PAGE": {
      const p = action.payload || {};
      const content = Array.isArray(p.content) ? p.content : [];
      const rawSize = Number(p.pageSize ?? state.pagination.size ?? DEFAULT_PAGE_SIZE);
      const pageSize =
        Number.isFinite(rawSize) && rawSize > 0 ? Math.floor(rawSize) : DEFAULT_PAGE_SIZE;
      const rawTotal = Number(p.totalElements);
      const totalElements = Number.isFinite(rawTotal) ? Math.max(0, Math.floor(rawTotal)) : 0;
      let totalPages = Number(p.totalPages ?? 0);
      if (!Number.isFinite(totalPages) || totalPages < 0) totalPages = 0;
      else totalPages = Math.floor(totalPages);
      let page = Number(p.pageNumber ?? p.currentPage ?? 0);
      if (!Number.isFinite(page) || page < 0) page = 0;
      else page = Math.floor(page);

      if (totalElements === 0) {
        totalPages = 0;
        page = 0;
      } else {
        const computedPages = Math.ceil(totalElements / pageSize) || 1;
        totalPages = Math.max(totalPages, computedPages, 1);
        const maxPage = totalPages - 1;
        if (page > maxPage) page = maxPage;
        if (page < 0) page = 0;
      }

      return {
        ...state,
        restaurantList: content,
        pagination: {
          ...state.pagination,
          page,
          totalPages,
          size: pageSize,
          totalElements,
        },
        errors: {},
        generalError: "",
      };
    }

    case "SET_RESTAURANT": {
      const category = state.categories.find(
        (c) => c.categoryName === action.payload.categoryName
      );
      return {
        ...state,
        restaurant: {
          ...action.payload,
          categoryId: category ? category.categoryId : null,
        },
        errors: {},
        generalError: "",
      }
    };

    case "FILTER_CHANGE":
      return {
        ...state,
        filter: { ...state.filter, [action.field]: action.payload },
        pagination: { 
            ...state.pagination, 
            page: 0 
        }
    };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "FIELD_CHANGE": {
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          [action.field]: action.payload,
        },
        errors: {
          ...state.errors,
          [action.field]: null,
        },
      };
    };

    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurantList: [...state.restaurantList, action.payload],
        restaurant: newRestaurant,
        pagination: { ...state.pagination, page: 0 },
        errors: {},
        generalError: "",
      };

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurantList: state.restaurantList.filter((r) => r.restaurantId !== action.payload),
      };

    case "SET_ERRORS": {
      const p = action.payload && typeof action.payload === "object" ? action.payload : {};
      const general = p.general || "";
      const errors = { ...p };
      delete errors.general;
      return { ...state, errors, generalError: general };
    }

    case "CLEAR_ERRORS":
      return { ...state, errors: {}, generalError: "" };

    case "RESET_FORM":
      return {
        ...state,
        restaurant: { ...newRestaurant },
        errors: {},
        generalError: "",
      };

    default:
      return state;
  }
}
