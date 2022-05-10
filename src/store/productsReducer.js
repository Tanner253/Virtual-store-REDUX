const initialState = {
  products: [
    {
      id:1,
      category: 'fishing-gear',
      name: 'Fishing Pole',
      description: 'Robust fiberglass pole for fishing',
      price: 12.00,
      inventoryCount: 20,
    },
    {
      id: 2,
      category: 'fishing-gear',
      name: 'Fishing Hook Pack',
      description: 'High quality barbed hooks',
      price: 6.00,
      inventoryCount: 60,
    },
    {
      id: 3,
      category: 'sports-gear',
      name: 'Soccer Ball',
      description: 'Soccer ball used by professionals',
      price: 32.00,
      inventoryCount: 10,
    },
    {
      id: 4,
      category: 'sports-gear',
      name: 'Football',
      description: 'Football used by professionals',
      price: 22.00,
      inventoryCount: 32,
    }
  ]
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATEACTIVE':
      return {
          products: state.products,
          filteredProducts: state.products.filter(product => product.category === action.payload.normalizedName)
      }
    default:
      return state;
  }
}

export const updateList = (category) => {
  return{
    type: 'UPDATEACTIVE',
    payload: category
  } 
}

export default productsReducer;

