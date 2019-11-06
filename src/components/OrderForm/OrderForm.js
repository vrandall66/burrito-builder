import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders, addOrder } from '../../actions';
import { createOrder } from '../../apiCalls';

export class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, e.target.name] });
  };

  handleClick = e => {
    e.preventDefault();
    this.handleSubmit();
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { addOrder } = this.props;
    try {
      let newOrder = await createOrder(this.state);
      addOrder(newOrder);
    } catch ({ message }) {
      console.log(message);
    }
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', ingredients: [] });
  };

  render() {
    const possibleIngredients = [
      'beans',
      'steak',
      'carnitas',
      'sofritas',
      'lettuce',
      'queso fresco',
      'pico de gallo',
      'hot sauce',
      'guacamole',
      'jalapenos',
      'cilantro',
      'sour cream'
    ];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button
          key={ingredient}
          name={ingredient}
          id={ingredient}
          onClick={e => this.handleIngredientChange(e)}
        >
          {ingredient}
        </button>
      );
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(', ') || 'Nothing selected'}</p>

        {this.state.ingredients.length ? (
          <button id='submit' onClick={e => this.handleClick(e)}>
            Submit Order
          </button>
        ) : (
          <p>Please add ingredients to your burrito!</p>
        )}
      </form>
    );
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setOrders, addOrder }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm);
