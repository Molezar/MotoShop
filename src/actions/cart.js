export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});
export const decrement = id => ({
  type: 'DECREMENT',
  payload: id,
});
export const increment = id => ({
  type: 'INCREMENT',
  payload: id,
});

