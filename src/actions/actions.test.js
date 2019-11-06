import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_ORDERS', () => {
    const orders = [{}, {}, {}];

    const result = actions.setOrders(orders);

    expect(result).toEqual({ orders: [{}, {}, {}], type: 'SET_ORDERS' });
  });

  it('should have a type of ADD_ORDER', () => {
    const newOrder = {
      name: 'Vanessa Randall',
      ingredients: ['chicken', 'cheese', 'awesome sauce']
    };

    const result = actions.addOrder(newOrder);

    expect(result).toEqual({
      order: {
        name: 'Vanessa Randall',
        ingredients: ['chicken', 'cheese', 'awesome sauce']
      },
      type: 'ADD_ORDER'
    });
  });
});
