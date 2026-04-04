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
  categoryId: null,
};

const defaultPagination = {
  pageNumber: 0,
  totalPages: 0,
  pageSize: 10,
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
    case "SET_RESTAURANTS_PAGE":
      return {
        ...state,
        restaurantList: action.payload.content || [],
        pagination: {
          ...state.pagination,
          page: action.payload.pageNumber,
          totalPages: action.payload.totalPages,
          size: action.payload.pageSize,
          totalElements: action.payload.totalElements ?? 0,
        },
        errors: {},
        generalError: "",
    };

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
            pageNumber: 0 
        }
    };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "FIELD_CHANGE": {
      return {
        ...state,
        restaurant: {
            ...state.restaurant,
            [action.field]: action.value
            },

        errors: {
            ...state.errors,
            [action.field]: null
            }
        }
    };

    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurantList: [...state.restaurantList, action.payload],
        restaurant: newRestaurant,
        pagination: { 
          ...state.pagination, 
          pageNumber: 0 
        },
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
