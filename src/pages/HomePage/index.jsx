import { Mainscreen } from "../../components/Home/Mainscreen";
import { SaleForm } from "../../components/Home/Sale/SaleForm";
import { SaleTimer } from "../../components/Home/Sale/SaleTimer";
import { Blog } from "../../components/Home/Blog";

import "./index.scss";
import ProductSlider from "../../components/ProductSlider";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/context";
import { getProducts } from "../../api/products";
import categories from "../../utils/categories";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { products, setProducts, setErrorMessage } = useContext(AppContext);

  useEffect(() => {
    (function ibg() {
      let ibg = document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector("img")) {
          ibg[i].style.backgroundImage =
            "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
      }
    })();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    setErrorMessage(null);

    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setErrorMessage("lol"))
      .finally(() => setIsLoading(false));
  }, [setErrorMessage, setProducts]);

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
