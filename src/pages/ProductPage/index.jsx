/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BackBtn } from "../../components/BackBtn";
import TabsContent from "./Components/Content";
import ProductSlider from "../../components/ProductSlider";
import btn from "../../assets/img/icons/button-2.svg";
import btn2 from "../../assets/img/icons/button.svg";

import "./index.scss";

import ImagesSlider from "./Components/Content/ImagesSlider";
import { getProductInstance } from "../../api/productInstance";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ProductPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [rndNum, setRndNum] = useState(null);
  const availableSizes = ["41", "42", "43", "44", "45"];

  const [productInstance, setProductInstance] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    getProductInstance(productId).then((data) => {
      setProductInstance(data);
    });
  }, [productId]);

  useEffect(() => {
    const randomNumber = generateRandomNumber(1000000, 9999999);
    setRndNum(randomNumber);
  }, [setRndNum]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const images = useMemo(
    () => (Array.isArray(productInstance?.images) ? [...productInstance.images] : []),
    [productInstance],
  );

  const tabs = [
    {
      title: "Description",
      content: <TabsContent text={productInstance?.product?.description} />,
    },
    {
      title: "Material & Care",
      content: <TabsContent text={"Tabs 2"} />,
    },
    {
      title: "Rewiews (17)",
      content: <TabsContent text={"Tabs 3"} />,
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

                <ImagesSlider images={images} />

                <div className="product-page__top-right">
                  <div className="product-page__information">
                    <div className="product-page__description">
                      <p className="product-page__producer title-5">{productInstance?.product?.producer?.name}</p>
                      <a href="/url-до-сторінки-з-товаром-4" className="product-page__title">
                        {productInstance?.product?.name}
                      </a>
                      <p className="product-page__sex">{productInstance?.product?.category?.name}</p>
                    </div>

                    <div className="product-page__price">
                      <p className="product-page__price-cost">
                        {productInstance?.product?.price && `${productInstance.product.price}$`}
                      </p>
                      <span className="product-page__price-cost-sale title-5">
                        {productInstance?.product?.price && `${productInstance.product.price + 120}$`}
                      </span>
                    </div>
                  </div>

                  <div className="product-page__interactive">
                    <div className="product-page__interactive-top">
                      <div className="product-page__sizes-wrapper">
                        {availableSizes.map((size) => (
                          <div
                            key={size}
                            className={`product-page__size ${selectedSize === size ? "checked" : ""}`}
                            onClick={() => handleSizeClick(size)}
                          >
                            {size}
                          </div>
                        ))}
                      </div>

                      <div className="product-page__buttons">
                        <a className="button button_lg button_default button_authorization" href="#">
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
                        <select className="product-page__ship-wrapper" id="size">
                          <option className="product-page__ship" value="Shipping & Payment">
                            Shipping &amp; Payment
                          </option>
                          <option className="product-page__ship" value="Check avaibility in store">
                            2
                          </option>
                        </select>
                        <select className="product-page__ship-wrapper" id="size">
                          <option className="product-page__ship" value="Shipping & Payment">
                            Check avaibility in store
                          </option>
                          <option className="product-page__ship" value="Check avaibility in store">
                            2
                          </option>
                        </select>
                      </div>
                    </div>

                    <p className="product-page__serial-number title-5">Product code: {rndNum}</p>
                  </div>
                </div>
              </div>

              <div className="product-page__bottom-wrapper">
                <div className="product-page__tabs">
                  <div className="product-page__tabs-content">
                    <div className="product-page__tabs-buttons-wrapper">
                      <div className="product-page__tabs-buttons">
                        {tabs.map((tab, index) => (
                          <div key={index} className="product-page__tabs-button">
                            <div
                              className={`${"product-page__tablink"} ${index === activeTab ? "active" : ""}`}
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
