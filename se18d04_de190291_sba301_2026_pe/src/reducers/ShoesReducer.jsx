const newShoes = {
  shoesId: null,
  shoesName: "",
  price: 0,
  quantity: 0,
  manufacturer: "",
  productionDate: "",
  importDate: "",
  categoryId: null,
};

const defaultFilter = {
  name: "",
  category: "",
};

const defaultPagination = {
  page: 0,
  totalPages: 0,
  size: 10,
  totalElements: 0,
};

export const shoesInitialState = {
  shoes: newShoes,
  shoesList: [],
  categories: [],
  filter: defaultFilter,
  pagination: defaultPagination,
  errors: {},
  generalError: "",
};

export function shoesReducer(state, action) {
  switch (action.type) {
    case "SET_SHOES_PAGE":
      return {
        ...state,
        shoesList: action.payload.content || [],
        pagination: {
          ...state.pagination,
          page: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          size: action.payload.pageSize,
          totalElements: action.payload.totalElements ?? 0,
        },
        errors: {},
        generalError: "",
      };

    case "SET_SHOES": {
      const category = state.categories.find(
        (c) => c.categoryName === action.payload.categoryName
      );
      return {
        ...state,
        shoes: {
          ...action.payload,
          categoryId: category ? category.id : null,
        },
        errors: {},
        generalError: "",
      };
    }

    case "FILTER_CHANGE":
      return {
        ...state,
        filter: { ...state.filter, [action.field]: action.payload },
        pagination: { ...state.pagination, page: 0 },
      };

    case "SET_SHOES_CATEGORIES":
      return { ...state, categories: action.payload };

    case "FIELD_CHANGE": {
      const nextErrors = { ...state.errors };
      delete nextErrors[action.field];
      return {
        ...state,
        shoes: { ...state.shoes, [action.field]: action.payload },
        errors: nextErrors,
      };
    }

    case "ADD_SHOES":
      return {
        ...state,
        shoesList: [...state.shoesList, action.payload],
        shoes: newShoes,
        pagination: { ...state.pagination, page: 0 },
        errors: {},
        generalError: "",
      };

    case "DELETE_SHOES":
      return {
        ...state,
        shoesList: state.shoesList.filter((s) => s.shoesId !== action.payload),
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

    case "RESET_NEW_SHOES":
      return {
        ...state,
        shoes: { ...newShoes },
        errors: {},
        generalError: "",
      };

    default:
      return state;
  }
}
