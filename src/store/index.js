import { createStore, combineReducers } from 'redux';
import { composeWithDevTools} from '@redux-devtools/extension';

import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}
