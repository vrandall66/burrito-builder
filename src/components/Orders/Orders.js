import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';
import './Orders.css';

export class Orders extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount = async () => {
    try {
      let data = await getOrders();
      return this.props.setOrders(data.orders);
    } catch ({ message }) {
      console.log(message);
    }
  };

  render = () => {
    const orderEls = this.props.orders.map((order, index) => {
      return (
        <div className='order' key={index}>
          <h3>{order.name}</h3>
          <ul className='ingredient-list'>
            {order.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>
      );
    });

    return (
      <section>{orderEls.length ? orderEls : <p>No orders yet!</p>}</section>
    );
  };
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setOrders
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
