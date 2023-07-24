import * as Pages from "src/pages";

const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Products
  { path: "/products", component: <Pages.Products /> },

  // ProductDetails
  { path: "/products/:id", component: <Pages.Product /> },

  // Gallery
  { path: "/gallery", component: <Pages.Home /> },

  // Shops
  { path: "/shops", component: <Pages.Shops /> },

  // About
  { path: "/about", component: <Pages.About /> },

  // Contact
  { path: "/contact", component: <Pages.Contact /> },

  // Gallery
  { path: "/vacancy", component: <Pages.Vacancy /> },

  // ErrorPage
  { path: "*", component: <Pages.ErrorPage /> },
];

export { publicRoutes };
