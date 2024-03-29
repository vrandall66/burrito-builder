import React from 'react';
import { shallow } from 'enzyme';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';

jest.mock('../../apiCalls');

describe('Orders', () => {
  let wrapper;
  let orders = [
    { ingredients: [{}, {}] },
    { ingredients: [{}, {}] },
    { ingredients: [{}, {}] }
  ];

  beforeEach(() => {
    wrapper = shallow(<Orders orders={orders} />);
    getOrders.mockImplementation(() => {
      return Promise.resolve([
        {
          name: 'Vanessa Randall',
          ingredients: ['chicken', 'cheese', 'awesome sauce']
        },
        {
          name: 'Robbie',
          ingredients: ["I'm not sure what you like on your burritos"]
        }
      ]);
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getOrders on componentDidMount', () => {
    expect(getOrders).toHaveBeenCalled();
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
