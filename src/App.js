import './App.css';
import Header from './components/Header/index.js'
import Categories from './components/Categories/index.js'
import Products from './components/Products/index.js'
import Footer from './components/Footer/index.js'
import { useDispatch } from 'react-redux';
import { getProducts } from './store/productsReducer';
import { getCategories } from './store/categoryReducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()); // when we dispatch something, we need an object passed into the reducer.
    dispatch(getCategories()); // when we dispatch something, we need an object passed into the reducer.
  });

  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
