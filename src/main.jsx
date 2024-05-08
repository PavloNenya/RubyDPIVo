import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./store/context";
import { HomePage } from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="catalog" element={<CatalogPage />}>
                <Route path=":page" element={<CatalogPage />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </React.StrictMode>
  </ContextProvider>,
);
