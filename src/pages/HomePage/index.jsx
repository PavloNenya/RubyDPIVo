import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../store/context";
import categories from "../../utils/categories";

import Mainscreen from "../../components/Home/Mainscreen";
import SaleForm from "../../components/Home/Sale/SaleForm";
import SaleTimer from "../../components/Home/Sale/SaleTimer";
import Blog from "../../components/Home/Blog";
import ProductSlider from "../../components/ProductSlider";

import "./index.scss";

const HomePage = () => {
  const { products, isAuth } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/signin");
  }, [isAuth, navigate]);

  useEffect(() => {
    (function ibg() {
      let ibg = document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector("img")) {
          ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
      }
    })();
  }, []);

  return (
    <>
      <Mainscreen />
      <ProductSlider type={"normal"} products={products} />
      <SaleTimer />
      <ProductSlider type={"category"} products={categories} />
      <Blog />
      <ProductSlider type={"sale"} products={products} />
      <SaleForm />
    </>
  );
};

export default HomePage;
