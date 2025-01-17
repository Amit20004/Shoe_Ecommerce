
const addToCart=(item)=>{
    return {
        type: 'ADD_TO_CART',
        payload: item,
    }
}
const delToCart=(id)=>{
    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    }
}
export const incrementQuantityAction = (id) => {
    return {
      type: "INCREMENT_QUANTITY",
      payload: id,
    };
  };
  
  export const decrementQuantityAction = (id) => {
    return {
      type: "DECREMENT_QUANTITY",
      payload: id,
    };
  };

  export const resetCartAction = () => {
    return {
      type: "RESET_CART",
    };
  };

//   export const fetchCartItems = () =>
export  {addToCart, delToCart};
