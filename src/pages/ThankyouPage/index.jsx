import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { AppContext } from "../../store/context";

import backToHome from "../../assets/img/checkout/backToHome.svg";

import "./index.scss";

export const ThankyouPage = () => {
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);

  const handleTotalSum = () => {
    let resSum = 0;

    selectedProduct.forEach((product) => {
      resSum += product.price * product.quantity;
    });

    return resSum;
  };

  useEffect(() => {
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    console.log(selectedProductFromCookie);

    if (selectedProductFromCookie) {
      setSelectedProduct(JSON.parse(selectedProductFromCookie));
    }
  }, [setSelectedProduct]);

  return (
    <main className="page">
      <section className="page__thankyou thankyou">
        <div className="thankyou__container">
          <div className="thankyou__body">
            <div className="thankyou__body-wrapper">
              <div className="thankyou__infoblock">
                <h4 className="thankyou__title">Order success!</h4>
                <div className="thankyou__infoblock-top">
                  <div className="thankyou__subtitle">
                    <p>Your Order #17150810</p>
                    <p className="thankyou__sub title-5">Wait for an sms message to your phone with other details</p>
                  </div>
                </div>

                <Link to="/" className="thankyou__backhome">
                  <img src={backToHome} alt="" />
                </Link>

                <hr className="thankyou__infoblock-line" />
                {selectedProduct.map((product) => (
                  <div key={product.id} className="thankyou__infoblock-item">
                    <img
                      className="thankyou__infoblock-item-img"
                      src={`http://localhost:9091/api/images/${product.main_photo_id}`}
                      alt=""
                    />
                    <div className="thankyou__infoblock-item-information">
                      <div className="thankyou__infoblock-item-top">
                        <p className="card__producer title-5">{product.producer.name}</p>
                        <h4 className="card__title title-4">{product.name}</h4>
                      </div>
                      <div className="thankyou__infoblock-item-bottom">
                        <h4 className="card__title title-4">${product.price}</h4>
                        <p className="card__producer title-5">Size:{` ${product.selectedSize.size_name}`}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <hr className="thankyou__infoblock-line" />
                <div className="thankyou__infoblock-wrapperinfo">
                  <h4 className="thankyou__infoblock-text">Total:</h4>
                  <h4 className="thankyou__infoblock-text">${handleTotalSum()}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankyouPage;
