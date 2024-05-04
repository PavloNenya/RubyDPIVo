import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";

import "./shared/scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
