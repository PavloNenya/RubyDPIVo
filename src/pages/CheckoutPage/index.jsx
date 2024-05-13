import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { AppContext } from "../../store/context";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import cardsIcons from "../../assets/img/checkout/cards.svg";
import novaIcon from "../../assets/img/checkout/nova.svg";
import ukrIcon from "../../assets/img/checkout/ukr.svg";
import meestIcon from "../../assets/img/checkout/meest.svg";

export const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [selectedShippingProvider, setSelectedShippingProvider] = useState("");
  const [selectedPostOffice, setSelectedPostOffice] = useState("");
  const [finish, setFinish] = useState(false);

  const { selectedProduct, setSelectedProduct } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    if (selectedProductFromCookie) {
      setSelectedProduct(JSON.parse(selectedProductFromCookie));
    }
  }, [setSelectedProduct]);

  const handleTotalItems = () => {
    let totalItems = 0;

    selectedProduct.forEach((product) => {
      totalItems += product.quantity;
    });

    return totalItems;
  };

  const handleTotalSum = () => {
    let resSum = 0;

    selectedProduct.forEach((product) => {
      resSum += product.price * product.quantity;
    });

    return resSum;
  };

  const isStep1Valid = () => {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");

    if (firstNameInput && lastNameInput && phoneNumberInput && emailInput) {
      return (
        firstNameInput.value.trim() !== "" &&
        lastNameInput.value.trim() !== "" &&
        phoneNumberInput.value.trim() !== "" &&
        emailInput.value.trim() !== ""
      );
    }

    return false;
  };

  const isStep2Valid = () => {
    return selectedShippingProvider !== "";
  };

  const isStep3Valid = () => {
    const isChecked = document.getElementById("subscribe").checked;

    return isChecked;
  };

  const onSubmit = (data) => {
    const formData = {
      selectedShippingProvider,
      selectedPostOffice,
    };

    const dataFromItems = [];

    selectedProduct.forEach((product) => {
      dataFromItems.push({
        product_instance_id: product.selectedSize.product_instance_id,
        quantity: product.quantity,
      });
    });

    const mergedData = {
      ...formData,
      ...data,
    };

    mergedData.products = dataFromItems;

    console.log(mergedData);
  };

  return (
    <main className="page">
      <section className="page__checkout checkout">
        <div className="checkout__container">
          <div className="checkout__body">
            <div className="checkout__title-wrapper">
              <h4 className="checkout__title">Checkout</h4>
              <span className="checkout__subtitle title-5">3 steps</span>
            </div>

            <div className="checkout__body-left">
              <form
                className="checkout__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="checkout__infoblock">
                  <div className="checkout__infoblock-top">
                    <h4 className="checkout__title">Contact Information</h4>
                    <span className="checkout__subtitle title-5">1 step</span>
                  </div>
                  <div className="checkout__infoblock-form form">
                    <div className="form__input-wrapper">
                      <input
                        type="text"
                        id="firstName"
                        className={`form__input ${
                          errors.firstName ? "error-input" : ""
                        }`}
                        placeholder="Name*"
                        {...register("firstName", {
                          required: true,
                          maxLength: 40,
                          pattern: /^[A-Za-z\s]+$/,
                        })}
                      />
                      {errors.firstName &&
                        errors.firstName.type === "required" && (
                          <span className="error">This field is required</span>
                        )}
                      {errors.firstName &&
                        errors.firstName.type === "maxLength" && (
                          <span className="error">Max length exceeded</span>
                        )}
                      {errors.firstName &&
                        errors.firstName.type === "pattern" && (
                          <span className="error">
                            Only letters and spaces are allowed
                          </span>
                        )}
                    </div>

                    <div className="form__input-wrapper">
                      <input
                        type="text"
                        id="lastName"
                        className={`form__input ${
                          errors.lastName ? "error-input" : ""
                        }`}
                        placeholder="Second name*"
                        {...register("lastName", {
                          required: true,
                          maxLength: 40,
                          pattern: /^[A-Za-z\s]+$/,
                        })}
                      />
                      {errors.lastName &&
                        errors.lastName.type === "required" && (
                          <span className="error">This field is required</span>
                        )}
                      {errors.lastName &&
                        errors.lastName.type === "maxLength" && (
                          <span className="error">Max length exceeded</span>
                        )}
                      {errors.lastName &&
                        errors.lastName.type === "pattern" && (
                          <span className="error">
                            Only letters and spaces are allowed
                          </span>
                        )}
                    </div>

                    <div className="form__input-wrapper">
                      <input
                        type="tel"
                        id="phoneNumber"
                        className={`form__input ${
                          errors.phoneNumber ? "error-input" : ""
                        }`}
                        placeholder="+380*"
                        {...register("phoneNumber", {
                          required: true,
                          pattern: /^\+?[0-9]*$/,
                        })}
                      />
                      {errors.phoneNumber &&
                        errors.phoneNumber.type === "required" && (
                          <span className="error">This field is required</span>
                        )}
                      {errors.phoneNumber &&
                        errors.phoneNumber.type === "pattern" && (
                          <span className="error">
                            Only digits and + are allowed
                          </span>
                        )}
                    </div>

                    <div className="form__input-wrapper">
                      <input
                        type="text"
                        id="email"
                        className={`form__input ${
                          errors.email ? "error-input" : ""
                        }`}
                        placeholder="E-mail*"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                        })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span className="error">This field is required</span>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <span className="error">Invalid email address</span>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="checkout__button-step"
                    onClick={() => isStep1Valid() && setStep(2)}
                  >
                    Next
                  </button>
                </div>

                {(step === 2 || step === 3) && (
                  <div className="checkout__infoblock">
                    <div className="checkout__infoblock-top">
                      <h4 className="checkout__title">Delivery</h4>
                      <span className="checkout__subtitle title-5">2 step</span>
                    </div>
                    <div className="checkout__infoblock-dropdown">
                      <h5 className="checkout__infoblock-dropdown-text">
                        City:
                      </h5>
                      <select className="dropdown" name="dropdown">
                        <option className="dropdown__option" value="Eng">
                          Kharkiv
                        </option>
                        <option className="dropdown__option" value="Ua">
                          Kyiv
                        </option>
                        <option className="dropdown__option" value="Ua">
                          Lviv
                        </option>
                      </select>
                    </div>

                    <div className="checkout__infoblock-posts">
                      <label htmlFor="nova" className="checkout__post">
                        <input
                          id="nova"
                          className="radiobutton"
                          type="radio"
                          name="shipping-provider"
                          defaultValue="nova"
                          onChange={(e) =>
                            setSelectedShippingProvider(e.target.value)
                          }
                        />
                        <img
                          className="checkout__post-img"
                          src={novaIcon}
                          alt=""
                        />
                        <div className="checkout__post-information-wrapper">
                          <h5 className="checkout__post-information-title">
                            New Post
                          </h5>
                          <p className="checout__post-information-date">
                            Expected delivery, Monday 17
                          </p>
                          <p className="checout__post-information-cost title-5">
                            Free shipping on online over $110
                          </p>
                        </div>
                        <h3 className="checkout__post-price">$10</h3>
                      </label>
                      <label htmlFor="ukrposhta" className="checkout__post">
                        <input
                          id="ukrposhta"
                          className="radiobutton"
                          type="radio"
                          name="shipping-provider"
                          defaultValue="ukrposhta"
                          onChange={(e) =>
                            setSelectedShippingProvider(e.target.value)
                          }
                        />
                        <img
                          className="checkout__post-img"
                          src={ukrIcon}
                          alt=""
                        />
                        <div className="checkout__post-information-wrapper">
                          <h5 className="checkout__post-information-title">
                            Ukrposhta
                          </h5>
                          <p className="checout__post-information-date">
                            Expected delivery, Monday 19
                          </p>
                          <p className="checout__post-information-cost title-5">
                            Free shipping on online over $30
                          </p>
                        </div>
                        <h3 className="checkout__post-price">$8</h3>
                      </label>
                      <label htmlFor="meest" className="checkout__post">
                        <input
                          id="meest"
                          className="radiobutton"
                          type="radio"
                          name="shipping-provider"
                          defaultValue="meest"
                          onChange={(e) =>
                            setSelectedShippingProvider(e.target.value)
                          }
                        />
                        <img
                          className="checkout__post-img"
                          src={meestIcon}
                          alt=""
                        />
                        <div className="checkout__post-information-wrapper">
                          <h5 className="checkout__post-information-title">
                            Meest
                          </h5>
                          <p className="checout__post-information-date">
                            Expected delivery, Monday 18
                          </p>
                          <p className="checout__post-information-cost title-5">
                            Free shipping on online over $250
                          </p>
                        </div>
                        <h3 className="checkout__post-price">$12</h3>
                      </label>
                    </div>

                    <select
                      className="form__input"
                      onChange={(e) => setSelectedPostOffice(e.target.value)}
                      name="text-input"
                    >
                      <option value="">
                        Post office #129. Kharkiv, Plekhanivska Street, 39.
                      </option>
                      <option value="option1">
                        Post office #55. Kharkiv, Molochna Street, 39.
                      </option>
                      <option value="option2">
                        Post office #29. Kharkiv, Buchmy Street, 17.
                      </option>
                    </select>

                    <div className="checkout__button-step-wrapper">
                      <button
                        type="button"
                        className="checkout__button-step"
                        onClick={() => setStep(1)}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="checkout__button-step"
                        onClick={() => setStep(3)}
                        disabled={!isStep2Valid()}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="checkout__infoblock">
                    <div className="checkout__infoblock-top">
                      <h4 className="checkout__title">Payment Method</h4>
                      <span className="checkout__subtitle title-5">3 step</span>
                    </div>

                    <div className="checkout__infoblock-payments">
                      <div className="checkout__infoblock-payments-form form">
                        <div className="form__input-wrapper">
                          <input
                            type="text"
                            className={`form__input ${
                              errors.cardNumber ? "error-input" : ""
                            }`}
                            name="cardNumber"
                            placeholder="Card number*"
                            {...register("cardNumber", {
                              required: true,
                              pattern: /^[0-9]*$/,
                            })}
                          />

                          {errors.cardNumber &&
                            errors.cardNumber.type === "required" && (
                              <span className="error">
                                Card number is required
                              </span>
                            )}
                          {errors.cardNumber &&
                            errors.cardNumber.type === "pattern" && (
                              <span className="error">Invalid card number</span>
                            )}
                        </div>

                        <div className="form__input-wrapper">
                          <input
                            type="date"
                            className={`form__input ${
                              errors.expirationDate ? "error-input" : ""
                            }`}
                            name="expirationDate"
                            placeholder="Expiration date*"
                            {...register("expirationDate", { required: true })}
                          />
                          {errors.expirationDate &&
                            errors.expirationDate.type === "required" && (
                              <span className="error">
                                Expiration date is required
                              </span>
                            )}
                        </div>
                        <div className="form__input-wrapper">
                          <input
                            type="text"
                            className={`form__input ${
                              errors.securityCode ? "error-input" : ""
                            }`}
                            name="securityCode"
                            placeholder="Security code*"
                            {...register("securityCode", { required: true })}
                          />
                          {errors.securityCode &&
                            errors.securityCode.type === "required" && (
                              <span className="error">
                                Security code is required
                              </span>
                            )}
                        </div>
                      </div>
                    </div>

                    <hr className="checkout__infoblock-line" />

                    <div className="checkout__checkbox">
                      <input
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        className="checkbox"
                      />
                      <label htmlFor="subscribe" className="form__label">
                        I have read and agree to the terms &amp; conditions and
                        privacy policy
                      </label>
                    </div>

                    <div className="checkout__button-step-wrapper">
                      <button
                        className="checkout__button-step"
                        type="button"
                        onClick={() => setStep(2)}
                      >
                        Previous
                      </button>
                      <button
                        className="checkout__button-step"
                        type="button"
                        onClick={() => isStep3Valid() && setFinish(true)}
                      >
                        Finish
                      </button>
                    </div>
                  </div>
                )}

                {finish && (
                  <button
                    type="submit"
                    className="button button_lg button_default button__checkout"
                  >
                    Buy Now
                    <span className="icon-arrow" />
                  </button>
                )}
              </form>
            </div>

            <div className="checkout__body-right">
              <div className="checkout__infoblock">
                <div className="checkout__infoblock-top">
                  <h4 className="checkout__title">Your order</h4>
                </div>
                <hr className="checkout__infoblock-line" />

                {selectedProduct.map((product) => (
                  <div key={product.id} className="checkout__infoblock-it">
                    <img
                      className="basket__item-img"
                      src={`http://localhost:9091/api/images/${product.main_photo_id}`}
                      alt=""
                    />
                    <div className="checkout__infoblock-item-information">
                      <div className="checkout__infoblock-item-top">
                        <p className="card__producer title-5">
                          {product.producer.name}
                        </p>
                        <h4 className="card__title title-4">{product.name}</h4>
                      </div>
                      <div className="checkout__infoblock-item-bottom">
                        <p className="card__producer title-5">
                          Size: {product.selectedSize.size_name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="checkout__infoblock-middle">
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
                      Delivery
                    </p>
                    <p className="checkout__infoblock-price">$0</p>
                  </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CheckoutPage;
