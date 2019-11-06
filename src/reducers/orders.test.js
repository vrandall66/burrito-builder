import { orders } from './orders';

describe('orders', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = orders(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_ORDERS action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_ORDERS',
      orders: [{}, {}, {}]
    };

    const result = [{}, {}, {}];

    expect(orders(initialState, action)).toEqual(result);
  });

  it('should not output the case of SET_ORDERS action type with the incorrect action', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'TOGGLE_ORDERS',
      orders: false
    };

    expect(orders(initialState, incorrectAction)).toEqual(initialState);
  });

  it('should output the correct case of ADD_ORDER action type', () => {
    const initialState = [];
    const action = {
      type: 'ADD_ORDER',
      order: {}
    };

    const result = [{}];

    expect(orders(initialState, action)).toEqual(result);
  });

  it('should not output the case of ADD_ORDER action type with the incorrect action', () => {
    const initialState = [];
    const incorrectAction = {
      type: 'DELETE_ORDER',
      orders: false
    };

    expect(orders(initialState, incorrectAction)).toEqual(initialState);
  });
});
