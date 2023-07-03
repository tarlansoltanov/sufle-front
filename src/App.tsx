import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {
  Vacancy,
  Contact,
  About,
  Shops,
  Gallery,
  Products,
  Product,
  ErrorPage,
  Home,
} from './views';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vacancy" element={<Vacancy />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
