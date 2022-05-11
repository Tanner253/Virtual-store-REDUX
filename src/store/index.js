import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import thunk from './middleware/thunk';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
