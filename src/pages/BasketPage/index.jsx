import { useState } from "react";
import ProductSlider from "../../components/ProductSlider";
// import { AppContext } from "../../store/context";
import "./index.scss";

const BasketPage = () => {
  const [counter, setCounter] = useState(0);

  // const { selectedProduct } = useContext(AppContext);

  const handlePlusCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinusCounter = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <main className="page">
      <section className="page__basket basket">
        <div className="basket__container">
          <div className="basket__body">
            <div className="basket__title-wrapper">
              <h4 className="basket__title">Basket</h4>
              <span className="basket__subtitle title-5">1</span>
            </div>
            <div className="basket__left">
              <div className="basket__item">
                <img
                  className="basket__item-img"
                  src="./img/checkout/jordan.png"
                  alt=""
                />
                <div className="basket__item-information">
                  <div className="basket__item-top-wrapper">
                    <div className="basket__item-top">
                      <div className="basket__item-top-left">
                        <p className="card__producer title-5">Jordan</p>
                        <h4 className="card__title title-4">
                          Air Jordan I High (White/Black)
                        </h4>
                      </div>
                      <div className="basket__item-top-right">
                        <h4 className="card__title title-4">$179</h4>
                        <span className="card__price-cost-sale title-5">
                          $229
                        </span>
                      </div>
                    </div>
                    <p className="card__unisex">Unisex Shoes</p>
                    <p className="card__producer title-5">
                      Size: <span className="card__size">44</span>
                    </p>
                  </div>
                  <div className="basket__item-bottom">
                    <div className="card__counter">
                      <button
                        className="card__sign"
                        onClick={handleMinusCounter}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="card__quantity"
                        value={counter}
                      />
                      <button
                        className="card__sign"
                        onClick={handlePlusCounter}
                      >
                        +
                      </button>
                    </div>
                    <div className="card__icons">
                      <a href="./img/icons/likemini.svg">
                        <img src="./img/icons/likemini.svg" alt="" />
                      </a>
                      <a href="./img/icons/card.svg">
                        <img src="./img/icons/card.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__info">
                <h4 className="basket__info-text">Subtotal:</h4>
                <h4 className="basket__info-text">$179</h4>
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
                        1 items:
                      </p>
                      <p className="checkout__infoblock-price">$179</p>
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
                    <h4 className="checkout__infoblock-text">$179</h4>
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
