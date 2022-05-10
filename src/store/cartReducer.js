const initialState = {
  items: []
};

function cartReducer(state = initialState, action) {

  switch (action.type) {
    case 'DECSTOCK':
      return {
        ...state, 
        items: [...state.items, action.payload]}
    default:
      return state
  }
}

// export const addItem = (product) => {
//   return{
//     type: 'ADDITEMTOCART',
//     payload: product
//   }
// }

export default cartReducer;