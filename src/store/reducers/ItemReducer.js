export const ItemReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case "FOOD_ITEMS":
      return { ...state, items: action.payload };
    case "ADD_NEW_FOOD_ITEMS":
      return { ...state, items: [...state.items, action.payload] };

    default:
      return state;
  }
};
