import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Contact, About, Vacancy, Shops } from './views';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/shops" element={<Shops />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
