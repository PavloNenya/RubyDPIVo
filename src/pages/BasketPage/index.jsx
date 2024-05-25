import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { AppContext } from "../../store/context";

import ProductSlider from "../../components/ProductSlider";

import delIcon from "../../assets/img/icons/del.svg";

import "./index.scss";

const BasketPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { products, selectedProduct, setSelectedProduct, isAuth } = useContext(AppContext);

  const handlePlusCounter = (productId) => {
    const updatedSelectedProducts = selectedProduct.map((product) => {
      if (product.productById?.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setSelectedProduct(updatedSelectedProducts);
    Cookies.set("selectedProduct", JSON.stringify(updatedSelectedProducts));
  };

  const handleMinusCounter = (productId) => {
    setSelectedProduct((prevSelectedProducts) => {
      const updatedSelectedProducts = prevSelectedProducts.map((product) => {
        if (product.productById?.id === productId && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      Cookies.set("selectedProduct", JSON.stringify(updatedSelectedProducts));

      return updatedSelectedProducts;
    });
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProduct((prevSelectedProducts) => {
      const updatedSelectedProducts = prevSelectedProducts.filter((product) => product.productById?.id !== productId);

      Cookies.set("selectedProduct", JSON.stringify(updatedSelectedProducts));
      return updatedSelectedProducts;
    });
  };

  const handleTotalSum = () => {
    let resSum = 0;

    selectedProduct.forEach((product) => {
      resSum += product.productById?.price * product.quantity;
    });

    return resSum;
  };

  const handleTotalItems = () => {
    let totalItems = 0;

    selectedProduct.forEach((product) => {
      totalItems += product.quantity;
    });

    return totalItems;
  };

  useEffect(() => {
    if (!isAuth) navigate("/signin");
  }, [isAuth, navigate]);

  useEffect(() => {
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    console.log(selectedProductFromCookie);

    if (selectedProductFromCookie) {
      setSelectedProduct(JSON.parse(selectedProductFromCookie));
    }
  }, [setSelectedProduct]);

  return (
    <section className="page__basket basket">
      <div className="basket__container">
        <div className="basket__body">
          <div className="basket__title-wrapper">
            <h4 className="basket__title">Basket</h4>
            <span className="basket__subtitle title-5">{handleTotalItems()}</span>
          </div>
          <div className="basket__left">
            <div className="basket__items">
              {selectedProduct.map((product) => (
                <div key={product.id} className="basket__item">
                  <img
                    className="basket__item-img"
                    src={`http://localhost:9091/api/images/${product.productById?.main_photo_id}`}
                    alt=""
                  />
                  <div className="basket__item-information">
                    <div className="basket__item-top-wrapper">
                      <div className="basket__item-top">
                        <div className="basket__item-top-left">
                          <p className="card__producer title-5">{product?.productById?.producer?.name}</p>
                          <h4 className="card__title title-4">{product?.productById?.name}</h4>
                        </div>
                        <div className="basket__item-top-right">
                          <h4 className="card__title title-4">${product?.productById?.price}</h4>
                          <span className="card__price-cost-sale title-5">$229</span>
                        </div>
                      </div>
                      <p className="card__unisex">{product?.productById?.category?.name}</p>
                      <p className="card__producer title-5">
                        {t("basket.size")}
                        <span className="card__size">{` ${product?.selectedSize?.size_name}`}</span>
                      </p>
                    </div>
                    <div className="basket__item-bottom">
                      <div className="card__counter">
                        <button className="card__sign" onClick={() => handleMinusCounter(product?.productById?.id)}>
                          -
                        </button>
                        <input type="text" className="card__quantity" value={product?.quantity} />
                        <button className="card__sign" onClick={() => handlePlusCounter(product?.productById?.id)}>
                          +
                        </button>
                      </div>
                      <div className="card__icons">
                        <button className="card__icons" onClick={() => handleRemoveProduct(product?.productById?.id)}>
                          <img src={delIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="basket__info">
              <h4 className="basket__info-text">{t("basket.subtotal")}</h4>
              <h4 className="basket__info-text">${handleTotalSum()}</h4>
            </div>
          </div>
          <div className="basket__right">
            <div className="checkout__infoblock">
              <div className="checkout__infoblock-top">
                <h4 className="checkout__title">{t("basket.summary")}</h4>
              </div>
              <div className="checkout__infoblock-middle">
                <div>
                  <div className="checkout__infoblock-wrapperinfo">
                    <p className="checkout__infoblock-numofcount title-5">
                      {handleTotalItems()} {t("basket.items")}
                    </p>
                    <p className="checkout__infoblock-price">${handleTotalSum()}</p>
                  </div>
                  <div className="checkout__infoblock-wrapperinfo">
                    <p className="checkout__infoblock-numofcount title-5">{t("basket.promocode")}</p>
                    <p className="checkout__infoblock-price">$0</p>
                  </div>
                </div>
                <input type="text" className="form__input" name="text-input" placeholder="Enter promocode" />
              </div>
              <hr className="checkout__infoblock-line" />
              <div className="checkout__infoblock-bottom">
                <div className="checkout__infoblock-wrapperinfo">
                  <h4 className="checkout__infoblock-text">{t("basket.total")}</h4>
                  <h4 className="checkout__infoblock-text">${handleTotalSum()}</h4>
                </div>
              </div>
              <div className="checkout__button">
                <Link to="/checkout" className="button button_lg button_default button__checkout" href="#">
                  {t("basket.checkout")}
                  <span className="icon-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProductSlider products={products} />
      </div>
    </section>
  );
};

export default BasketPage;