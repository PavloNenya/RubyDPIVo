/* eslint-disable react/prop-types */
import { useState } from "react";
import { BackBtn } from "../../components/BackBtn";
import TabsContent from "./Components/Content";
import ProductSlider from "../../components/ProductSlider";
import btn from "../../assets/img/mainscreen/productsCards/button-2.svg";
import btn2 from "../../assets/img/mainscreen/productsCards/button.svg";

import "./index.scss";
import ImagesSlider from "./Components/Content/ImagesSlider";

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

                <ImagesSlider />

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

                    <div className="product-page__price">
                      <p className="product-page__price-cost">$179</p>
                      <span className="product-page__price-cost-sale title-5">
                        $229
                      </span>
                    </div>
                  </div>

                  <div className="product-page__interactive">
                    <div className="product-page__interactive-top">
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
                          <img src={btn2} alt="" />
                        </a>

                        <a className="product-page__button" href="">
                          <img src={btn} alt="" />
                        </a>
                      </div>

                      <div className="product-page__dropdowns">
                        <select
                          className="product-page__ship-wrapper"
                          id="size"
                        >
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
                        <select
                          className="product-page__ship-wrapper"
                          id="size"
                        >
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
