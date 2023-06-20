import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Contact, About, Vacancy, Shops, Products, ErrorPage } from './views';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:id" element={<Product />} /> */}
        <Route path="/shops" element={<Shops />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<ErrorPage error_code={404} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
