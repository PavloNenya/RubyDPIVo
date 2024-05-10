import { Mainscreen } from "../../components/Home/Mainscreen";
import { SaleForm } from "../../components/Home/Sale/SaleForm";
import { SaleTimer } from "../../components/Home/Sale/SaleTimer";
import { Blog } from "../../components/Home/Blog";

import "./index.scss";
import ProductSlider from "../../components/ProductSlider";
import { useEffect } from "react";

export const HomePage = () => {
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
      <ProductSlider type={"normal"} />
      <SaleTimer />
      <Blog />
      <ProductSlider type={"sale"} />
      <SaleForm />
    </>
  );
};

export default HomePage;
