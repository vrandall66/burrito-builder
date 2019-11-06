import React from 'react';
import { shallow } from 'enzyme';
import { setOrders, addOrder } from '../../actions';
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';

describe('OrderForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OrderForm />);
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

  it('calls dispatch with addOrder', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addOrder({});

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addOrder({});

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
