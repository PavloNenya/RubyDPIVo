import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./store/context";
import { HomePage } from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path="men">
              {/* <Route index element={<CatalogPage />} /> */}
              <Route path=":productId" element={<ProductPage />} />
            </Route>

            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </ContextProvider>
);
