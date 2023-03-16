const handleInc = (state, action) => {
  let id = action.payload;
  state.items.forEach((item) => {
    if (item.id === id) {
      item.quantity++;
    }
  });
  handleGetTotal(state, action);
};

const handleDec = (state, action) => {
  state.items.forEach((item) => {
    if (item.id === action.payload) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
  });
  handleGetTotal(state, action);
};

const handleDelete = (state, action) => {
  let id = action.payload;
  state.items = state.items.filter((item) => {
    return item.id !== id;
  });
  handleGetTotal(state, action);
};

const handleAddToCart = (state, action) => {
  const isExists = state.items.find((item) => item.id === action.payload.id);
  if (isExists) {
    state.items.forEach((item) => {
      if (item.id === isExists.id) {
        item.quantity++;
      }
    });
  } else {
    state.items.push(action.payload);
  }
  handleGetTotal(state, action);
};

const handleGetTotal = (state, action) => {
  let total = 0;
  state.items.forEach((item) => {
    total += Math.round(Number(item.quantity) * Number(item.price));
  });
  state.total = total;
};

export { handleInc, handleDec, handleDelete, handleAddToCart, handleGetTotal };
