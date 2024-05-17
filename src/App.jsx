import { Outlet, useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import BreadСrumbs from "./components/BreadCrumbs";

import "./shared/scss/style.scss";

function App() {
  const location = useLocation();
  const isBreadCrumbsVisible = location.pathname !== "/" && location.pathname !== "/404";

  return (
    <>
      <Header />
      <main className="page">
        {isBreadCrumbsVisible && <BreadСrumbs />}

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
