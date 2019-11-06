import React from 'react';
import { shallow } from 'enzyme';
import { setOrders } from '../../actions';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';

describe('Orders', () => {
  let wrapper;
  let orders = [
    { ingredients: [{}, {}] },
    { ingredients: [{}, {}] },
    { ingredients: [{}, {}] }
  ];

  beforeEach(() => {
    wrapper = shallow(<Orders orders={orders} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with an orders object', () => {
    const mockStoreState = {
      orders: { orders: [{}, {}, {}] }
    };

    const expected = {
      orders: { orders: [{}, {}, {}] }
    };

    const mappedProps = mapStateToProps(mockStoreState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with setOrders', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setOrders([{}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setOrders([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
