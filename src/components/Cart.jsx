import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ item }) => {
  const cartItems = item.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  ));

  console.log(item);
  return (
    <div>
      {cartItems}
    </div>
  );
};

const mapStateToProps = (state) => {
  const elem = state.reducer.cart;
  return { item: elem } ;
};

export default connect(mapStateToProps, null)(Cart);
