import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

const Cart = ({ item, cart }) => {

  console.log(item.filter((item) => item.quantity !== 0));
  console.log((item.quantity === 1).toString());
  return (
    <div>
      {item.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
      <br />
      {cart.map((item) => (
        <Item
          key={item.id}
          {...item}
          isList
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const elem = state.cart;
  const item = state.item;
  return { cart: elem, item: item } ;
};

export default connect(mapStateToProps, null)(Cart);
