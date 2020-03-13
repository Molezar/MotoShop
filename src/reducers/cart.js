const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(o => o.id !== action.payload)
      };
    case "INCREMENT":
      const item = state.items.find(p => p.id === action.payload);
      state.items.push(item);
      return {
        ...state,
      };
    case "DECREMENT":
      const items = state.items;
      for (var i = 0; i < items.length; i++) {
        var obj = items[i];
    
        if (action.payload === obj.id) {
          items.splice(i, 1);
          break;
        }
      }
      var response = {
        ...state,
        items:items,      
      };
      return response;

    default:
      return state;
  }
};
