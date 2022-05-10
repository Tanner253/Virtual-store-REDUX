import './App.css';
import Header from './components/Header/index.js'
import Categories from './components/Categories/index.js'
import Products from './components/Products/index.js'
import Footer from './components/Footer/index.js'

function App() {
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
