import React from 'react';
import { connect } from 'react-redux';
import { addCart, removeCart } from '../actions/index';

const Item = (props) => {
  const { id, name, price, quantity, addCart, removeCart, isList } = props;
  const handleAddCart = () => {
    addCart(
      {
        id,
        name,
        price,
      },
    );
  };
  const handleRemoveCart = (itemId) => {
    removeCart(itemId);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      {
        isList ?
          (<button type='button' onClick={() => handleRemoveCart(id)}>Delete</button>) :
          (<button type='button' disabled={(quantity === 0)} onClick={handleAddCart}>Add</button>)
      }
    </div>
  );
};

const mapDispatcheToProps = {
  addCart,
  removeCart,
};

export default connect(null, mapDispatcheToProps)(Item);
