import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { AppContext } from "../../store/context";

import { getFavorite } from "../../api/favorite";

import SaleForm from "../../components/Home/Sale/SaleForm";
import ProductCard from "../../components/ProductCard";

import "./index.scss";

const FavoritePage = () => {
  const { t } = useTranslation();
  const { likedProducts, setLikedProducts } = useContext(AppContext);

  useEffect(() => {
    setLikedProducts([]);

    getFavorite().then((data) => {
      console.log(data);
      setLikedProducts(data);
    });
  }, [setLikedProducts]);

  return (
    <section className="page__products products">
      <div className="products__container">
        <div className="products__body">
          <div className="products__main">
            <div className="products__title-wrapper">
              <h4 className="products__title">{t("favourite.title")}</h4>
              <span className="products__subtitle title-5">
                {likedProducts.length}
              </span>
            </div>
            <div className="products__content">
              <div className="products__cards">
                {Array.isArray(likedProducts) &&
                  likedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      classType="products"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <SaleForm />
      </div>
    </section>
  );
};

export default FavoritePage;
