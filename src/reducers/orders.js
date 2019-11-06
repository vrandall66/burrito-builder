export const orders = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'ADD_ORDER':
      return [...state, action.order];
    default:
      return state;
  }
};
