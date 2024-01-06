const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

export const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DATA_FETCHING":
      return { ...state, isLoading: true, error: null };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
