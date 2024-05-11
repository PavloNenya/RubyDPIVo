import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

import "./shared/scss/style.scss";
import BreadСrumbs from "./components/BreadCrumbs";

function App() {
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";

  return (
    <>
      <Header />
      <main className="page">
        {isNotHomePage && <BreadСrumbs />}

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
