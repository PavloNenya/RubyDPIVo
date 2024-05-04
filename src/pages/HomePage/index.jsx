import { Mainscreen } from "../../components/Mainscreen";
import { SaleForm } from "../../components/Sale/SaleForm";
import { SaleTimer } from "../../components/Sale/SaleTimer";
import { Blog } from "../../components/Blog";

import "./index.scss";

export const HomePage = () => {
  return (
    <>
      <Mainscreen />
      <SaleTimer />
      <Blog />
      <SaleForm />
    </>
  );
};
