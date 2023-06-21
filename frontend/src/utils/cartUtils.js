export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calc items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calc shipping price if over 50 then free else 6
  state.shippingPrice = addDecimals(state.itemsPrice > 50 ? 0 : 6);

  // Calc tax price
  state.taxPrice = addDecimals(Number((0.17 * state.itemsPrice).toFixed(2)));

  // Calc total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
