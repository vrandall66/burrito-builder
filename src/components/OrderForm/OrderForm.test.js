import React from 'react';
import { shallow } from 'enzyme';
import { setOrders, addOrder } from '../../actions';
import { createOrder } from '../../apiCalls';
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';

jest.mock('../../apiCalls');

describe('OrderForm', () => {
  let wrapper;
  createOrder.mockImplementation(() => {
    return Promise.resolve({
      name: 'Vanessa Randall',
      ingredients: ['beans', 'cheese', 'chicken']
    });
  });
  const mockEvent = {
    target: {
      name: 'name',
      value: 'Vanessa Randall'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<OrderForm />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update it's state property onChange of name input", () => {
    wrapper.instance().handleNameChange(mockEvent);

    expect(wrapper.state()).toEqual({
      name: 'Vanessa Randall',
      ingredients: []
    });
  });

  it.skip('should call clearInputs when handleSubmit is invoked', () => {
    wrapper.instance().forceUpdate();
    const event = { preventDefault: () => {}, target: { name: 'beans' } };
    jest.spyOn(event, 'preventDefault');
    wrapper.find('#beans').simulate('click', event);
    wrapper.instance().clearInputs = jest.fn();
    wrapper.find('#submit').simulate('click', event);

    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  });

  it.skip('should call addOrder when handleSubmit is invoked', () => {
    const event = { preventDefault: () => {}, target: { name: 'beans' } };
    jest.spyOn(event, 'preventDefault');
    // wrapper.instance().handleClick = jest.fn();
    // wrapper.find('#beans').simulate('click', event);
    // wrapper.instance().handleSubmit = jest.fn();
    // wrapper.find('#submit').simulate('click', event);
    wrapper.instance().addOrder = jest.fn();
    wrapper.instance().handleSubmit(event);

    expect(addOrder).toHaveBeenCalled();
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
