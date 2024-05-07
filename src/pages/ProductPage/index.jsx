/* eslint-disable react/prop-types */
import { useState } from "react";
import { BackBtn } from "../../components/BackBtn";
import TabsContent from "./Components/Content";
import ProductSlider from "../../components/ProductSlider";
import "./index.scss";

export const ProductPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // todo after realization catalog by vova

  // const tabs = [
  //   {
  //     title: "Description",
  //     content: <TabsContent text={product.product.description} />,
  //   },
  //   {
  //     title: "Material & Care",
  //     content: <TabsContent text={product.product.description} />,
  //   },
  //   {
  //     title: "Rewiews (17)",
  //     content: <TabsContent text={product.product.description} />,
  //   },
  // ];

  const tabs = [
    {
      title: "Description",
      content: <TabsContent text="Content 1" />,
    },
    {
      title: "Material & Care",
      content: <TabsContent text="Content 2" />,
    },
    {
      title: "Rewiews (17)",
      content: <TabsContent text="Content 3" />,
    },
  ];

  return (
    <div className="wrapper">
      <main className="page">
        <section className="page__product-page product-page">
          <div className="product-page__container">
            <div className="product-page__body">
              <div className="product-page__top-wrapper">
                <BackBtn />

                <div className="product-page__top-left">
                  <div className="product-page__photos">
                    <img
                      className="product-page__mini-photo with-overlay"
                      src="./img/product-cards/Jordans black/1.png"
                      alt="mini-photo-1"
                    />
                    <img
                      className="product-page__mini-photo"
                      src="./img/product-cards/Jordans black/2.png"
                      alt="mini-photo-2"
                    />
                    <img
                      className="product-page__mini-photo"
                      src="./img/product-cards/Jordans black/3.png"
                      alt="mini-photo-3"
                    />
                    <img
                      className="product-page__mini-photo"
                      src="./img/product-cards/Jordans black/4.png"
                      alt="mini-photo-4"
                    />
                    <img
                      className="product-page__mini-photo"
                      src="./img/product-cards/Jordans black/5.png"
                      alt="mini-photo-5"
                    />
                    <img
                      className="product-page__mini-photo"
                      src="./img/product-cards/Jordans black/6.png"
                      alt="mini-photo-6"
                    />
                  </div>
                  <div className="product-page__main-photo-wrapper">
                    <div className="infolabel infolabel-right">
                      new
                      <img
                        className="infolabel__icon"
                        src="/img/icons/clock.svg"
                        alt=""
                      />
                    </div>
                    <div className="product-page__togles">
                      <a href="">
                        <img
                          className="product-page__togle"
                          src="./img/product-cards/scrolling-arrows.svg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          className="product-page__togle left"
                          src="./img/product-cards/scrolling-arrows.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <img
                      className="product-page__main-photo"
                      src="./img/product-cards/Jordans black/main-photo.png"
                      alt="main-photo"
                    />
                  </div>
                </div>

                <div className="product-page__top-right">
                  <div className="product-page__information">
                    <div className="product-page__description">
                      <p className="product-page__producer title-5">Jordan</p>
                      <a
                        href="/url-до-сторінки-з-товаром-4"
                        className="product-page__title"
                      >
                        Air Jordan I High (White/Black)
                      </a>
                      <p className="product-page__sex">Unisex Shoes</p>
                    </div>
                  </div>
                  <div className="product-page__interactive">
                    <div className="product-page__price">
                      <p className="product-page__price-cost">$179</p>
                      <span className="product-page__price-cost-sale title-5">
                        $229
                      </span>
                    </div>
                    <div className="product-page__colors">
                      <p className="product-page__color">Color:</p>
                      <div className="product-page__colors-img">
                        <img
                          className="product-page__mini-photo"
                          src="./img/product-cards/Colors/1.png"
                          alt=""
                        />
                        <img
                          className="product-page__mini-photo"
                          src="./img/product-cards/Colors/2.svg"
                          alt=""
                        />
                        <img
                          className="product-page__mini-photo"
                          src="./img/product-cards/Colors/3.png"
                          alt=""
                        />
                        <img
                          className="product-page__mini-photo"
                          src="./img/product-cards/Colors/3.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-page__sizes">
                      <p className="product-page__color">Sizes:</p>
                      <div className="product-page__sizes-wrapper">
                        <div className="product-page__size checked">41</div>
                        <div className="product-page__size">42</div>
                        <div className="product-page__size">43</div>
                        <div className="product-page__size">44</div>
                        <div className="product-page__size">45</div>
                      </div>
                    </div>
                    <div className="product-page__buttons">
                      <a
                        className="button button_lg button_default button_authorization"
                        href="#"
                      >
                        buy now
                        <span className="icon-arrow" />
                      </a>
                      <a className="product-page__button" href="">
                        <img src="./img/product-cards/button.svg" alt="" />
                      </a>
                      <a className="product-page__button" href="">
                        <img src="./img/product-cards/button-2.svg" alt="" />
                      </a>
                    </div>
                    <div className="product-page__dropdowns">
                      <select className="product-page__ship-wrapper" id="size">
                        <option
                          className="product-page__ship"
                          value="Shipping & Payment"
                        >
                          Shipping &amp; Payment
                        </option>
                        <option
                          className="product-page__ship"
                          value="Check avaibility in store"
                        >
                          2
                        </option>
                      </select>
                      <select className="product-page__ship-wrapper" id="size">
                        <option
                          className="product-page__ship"
                          value="Shipping & Payment"
                        >
                          Check avaibility in store
                        </option>
                        <option
                          className="product-page__ship"
                          value="Check avaibility in store"
                        >
                          2
                        </option>
                      </select>
                    </div>
                    <p className="product-page__serial-number title-5">
                      Product code: 17150810
                    </p>
                  </div>
                </div>
              </div>

              <div className="product-page__bottom-wrapper">
                <div className="product-page__tabs">
                  <div className="product-page__tabs-content">
                    <div className="product-page__tabs-buttons-wrapper">
                      <div className="product-page__tabs-buttons">
                        {tabs.map((tab, index) => (
                          <div
                            key={index}
                            className="product-page__tabs-button"
                          >
                            <div
                              className={`${"product-page__tablink"} ${
                                index === activeTab ? "active" : ""
                              }`}
                              onClick={() => setActiveTab(index)}
                            >
                              {tab.title}
                            </div>
                          </div>
                        ))}
                      </div>
                      <hr className="product-page__line" />
                    </div>

                    <div className="tab-content">{tabs[activeTab].content}</div>
                  </div>
                </div>
                <ProductSlider />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
