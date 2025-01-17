const initialState = {
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
      };
    case "RESET_CART":
      return {
        ...state,
        carts:[]
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: Math.max(product.quantity - 1, 1),
              }
            : product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
