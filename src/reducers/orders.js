export const orders = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    default:
      return state;
  }
};
