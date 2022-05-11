import axios from 'axios';
const initialState = {
  products: [
    {
      id:1,
      category: 'fishing-gear',
      name: 'Fishing Pole',
      description: 'Robust fiberglass pole for fishing',
      price: '12.00',
      inventoryCount: 20,
    },
    {
      id: 2,
      category: 'fishing-gear',
      name: 'Fishing Hook Pack',
      description: 'High quality barbed hooks',
      price: '6.00',
      inventoryCount: 60,
    },
    {
      id: 3,
      category: 'sports-gear',
      name: 'Soccer Ball',
      description: 'Soccer ball used by professionals',
      price: '32.00',
      inventoryCount: 10,
    },
    {
      id: 4,
      category: 'sports-gear',
      name: 'Football',
      description: 'Football used by professionals',
      price: '22.00',
      inventoryCount: 32,
    }
  ]
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { products: action.payload.results }
    case 'UPDATEACTIVE':
      return {
          products: state.products,
          filteredProducts: state.products.filter(product => product.category === action.payload.name)
      }
      case 'DECSTOCK':
        return {products: state.products.map(product => product.name === action.payload.name
          ? {...product, inventoryCount: product.inventoryCount - 1}
          : product
        )}
      case 'INCSTOCK':
        return state.products.map(product => product.name === action.payload.name
          ? {...product, inventoryCount: product.inventoryCount + 1}
          : product
        );
        case 'RESET':
          return{
            ...state,
            filteredProducts: state.products
          }
    default:
      return state;
  }
}

export const decStock = (product) => {
  return{
    type: 'DECSTOCK',
    payload: product,
  } 
}

export const incStock = (product) => {
  return{
    type: 'INCSTOCK',
    payload: product,
  } 
}

export const getProducts = () => async (dispatch, getState) => {
  // fetch from our API // do anything asynchronous
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

  // return our action
  dispatch(setProducts(response.data));
}

export const setProducts = (data) => {
  return{
    type: 'GET_PRODUCTS',
    payload: data
  }
}
export default productsReducer;

