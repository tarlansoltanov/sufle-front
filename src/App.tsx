import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

import { publicRoutes } from "./routes";
import { ScrollToTop } from "./routes/middleware";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ScrollToTop>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </ScrollToTop>
      <Footer />
    </React.Fragment>
  );
}

export default App;
