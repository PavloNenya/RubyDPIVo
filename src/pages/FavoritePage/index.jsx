import { useContext, useEffect } from "react";
import { SaleForm } from "../../components/Home/Sale/SaleForm";
import "./index.scss";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { AppContext } from "../../store/context";
import { getFavorite } from "../../api/favorite";

const FavoritePage = () => {
  const { products, likedProducts, setLikedProducts } = useContext(AppContext);

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
              <h4 className="products__title">My choice</h4>
              <span className="products__subtitle title-5">
                {products.length}
              </span>
            </div>
            <div className="products__content">
              <div className="products__cards">
                {likedProducts.map((product) => (
                  <Link
                    className="products__card"
                    to={`/catalog/product/${product.id}`}
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </Link>
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
