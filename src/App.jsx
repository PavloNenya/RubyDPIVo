import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

import "./shared/scss/style.scss";
import BreadСrumbs from "./components/BreadCrumbs";

function App() {
  return (
    <>
      <Header />
      {/* fix: we need to add wrapper to all projects */}
      {/* fix: we need to add wrapper to all projects */}
      <main className="page">
        <BreadСrumbs />

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
