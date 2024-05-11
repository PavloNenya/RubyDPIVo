import { useContext, useEffect } from "react";
import ProductSlider from "../../components/ProductSlider";
import Cookies from "js-cookie";
import "./index.scss";
import { AppContext } from "../../store/context";

const BasketPage = () => {
  const { selectedProduct, setSelectedProduct, selectedSize } =
    useContext(AppContext);

  const handlePlusCounter = (productId) => {
    setSelectedProduct((prevSelectedProducts) => {
      return prevSelectedProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };

  const handleMinusCounter = (productId) => {
    setSelectedProduct((prevSelectedProducts) => {
      return prevSelectedProducts.map((product) => {
        if (product.id === productId && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    });
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProduct((prevSelectedProducts) => {
      const updatedSelectedProducts = prevSelectedProducts.filter(
        (product) => product.id !== productId
      );

      Cookies.set("selectedProduct", JSON.stringify(updatedSelectedProducts));
      return updatedSelectedProducts;
    });
  };

  const handleTotalSum = () => {
    let resSum = 0;

    selectedProduct.forEach((product) => {
      resSum += product.price * product.quantity;
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
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    console.log(selectedProductFromCookie);

    if (selectedProductFromCookie) {
      setSelectedProduct(JSON.parse(selectedProductFromCookie));
    }
  }, [setSelectedProduct]);

  {
    console.log(selectedProduct);
  }

  return (
    <main className="page">
      <section className="page__basket basket">
        <div className="basket__container">
          <div className="basket__body">
            <div className="basket__title-wrapper">
              <h4 className="basket__title">Basket</h4>
              <span className="basket__subtitle title-5">
                {handleTotalItems()}
              </span>
            </div>
            <div className="basket__left">
              <div className="basket__items">
                {selectedProduct.map((product) => (
                  <div key={product.id} className="basket__item">
                    <img
                      className="basket__item-img"
                      src={`http://localhost:9091/api/images/${product.main_photo_id}`}
                      alt=""
                    />
                    <div className="basket__item-information">
                      <div className="basket__item-top-wrapper">
                        <div className="basket__item-top">
                          <div className="basket__item-top-left">
                            <p className="card__producer title-5">
                              {product.producer.name}
                            </p>
                            <h4 className="card__title title-4">
                              {product.name}
                            </h4>
                          </div>
                          <div className="basket__item-top-right">
                            <h4 className="card__title title-4">
                              ${product.price}
                            </h4>
                            <span className="card__price-cost-sale title-5">
                              $229
                            </span>
                          </div>
                        </div>
                        <p className="card__unisex">{product.category.name}</p>
                        <p className="card__producer title-5">
                          Size:
                          <span className="card__size">{selectedSize}</span>
                        </p>
                      </div>
                      <div className="basket__item-bottom">
                        <div className="card__counter">
                          <button
                            className="card__sign"
                            onClick={() => handleMinusCounter(product.id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="card__quantity"
                            value={product.quantity}
                          />
                          <button
                            className="card__sign"
                            onClick={() => handlePlusCounter(product.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="card__icons">
                          <button
                            className="card__icons"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            <img src="./img/icons/card.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="basket__info">
                <h4 className="basket__info-text">Subtotal:</h4>
                <h4 className="basket__info-text">${handleTotalSum()}</h4>
              </div>
            </div>
            <div className="basket__right">
              <div className="checkout__infoblock">
                <div className="checkout__infoblock-top">
                  <h4 className="checkout__title">Basket summary</h4>
                </div>
                <div className="checkout__infoblock-middle">
                  <div>
                    <div className="checkout__infoblock-wrapperinfo">
                      <p className="checkout__infoblock-numofcount title-5">
                        {handleTotalItems()} items:
                      </p>
                      <p className="checkout__infoblock-price">
                        ${handleTotalSum()}
                      </p>
                    </div>
                    <div className="checkout__infoblock-wrapperinfo">
                      <p className="checkout__infoblock-numofcount title-5">
                        Promocode:
                      </p>
                      <p className="checkout__infoblock-price">$0</p>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form__input"
                    name="text-input"
                    placeholder="Enter promocode"
                  />
                </div>
                <hr className="checkout__infoblock-line" />
                <div className="checkout__infoblock-bottom">
                  <div className="checkout__infoblock-wrapperinfo">
                    <h4 className="checkout__infoblock-text">Total:</h4>
                    <h4 className="checkout__infoblock-text">
                      ${handleTotalSum()}
                    </h4>
                  </div>
                </div>
                <div className="checkout__button">
                  <a
                    className="button button_lg button_default button__checkout"
                    href="#"
                  >
                    Go to checkout
                    <span className="icon-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ProductSlider />
        </div>
      </section>
    </main>
  );
};

export default BasketPage;
