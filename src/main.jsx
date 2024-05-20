import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./store/context";
import { CatalogContextProvider } from "./store/catalogContext";

import App from "./App";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankyouPage from "./pages/ThankyouPage";
import PageNotFound from "./pages/PageNotFound";
import FavoritePage from "./pages/FavoritePage";
import RegistrationPage from "./pages/RegistrationPage";
import SignUpPage from "./pages/SignUpPage";

import "./i18n";
import UserProfile from "./pages/UserProfile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <CatalogContextProvider>
      <React.StrictMode>
        <div className="wrapper">
          <Router>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />

                <Route path="catalog">
                  <Route index element={<CatalogPage />} />
                  <Route path=":page" element={<CatalogPage />}>
                    <Route path=":type" element={<CatalogPage />} />
                  </Route>

                  <Route path="product" element={<ProductPage />}>
                    <Route path=":productId" element={<ProductPage />} />
                  </Route>
                </Route>

                <Route path="favourite" element={<FavoritePage />} />

                <Route path="basket" element={<BasketPage />} />

                <Route path="profile" element={<UserProfile />} />

                <Route path="checkout" element={<CheckoutPage />} />

                <Route path="thankyou" element={<ThankyouPage />} />

                <Route path="signup" element={<RegistrationPage />} />
                <Route path="signin" element={<SignUpPage />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </React.StrictMode>
    </CatalogContextProvider>
  </ContextProvider>
);
