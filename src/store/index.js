import { createStore, combineReducers } from 'redux';
import { composeWithDevTools} from '@redux-devtools/extension';

import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}
