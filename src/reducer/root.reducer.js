export default (state, action) => {

    const {payload, type} = action;

  switch (type) {
    case "REPLACE_ACTIVE_ATTRIBUTE":
      return {
        ...state,
        activeAttributes: payload
      };

    case "ADD_PRODUCT":
    return {
        ...state,
        selectedProductIds: [...state.selectedProductIds, payload]
    };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        selectedProductIds: state.selectedProductIds.filter(id => id !== payload)
      };
    default:
      return state;
  }
};
