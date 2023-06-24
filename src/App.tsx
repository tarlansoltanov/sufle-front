import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Contact, About, Vacancy, Shops, Products, Product, ErrorPage, Home } from './views';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<ErrorPage />} />
        <Route path="/error/:error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
