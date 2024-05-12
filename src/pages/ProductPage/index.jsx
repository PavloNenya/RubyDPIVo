/* eslint-disable react/prop-types */
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { BackBtn } from "../../components/BackBtn";
import TabsContent from "./Components/Content";
import ProductSlider from "../../components/ProductSlider";

import "./index.scss";

import ImagesSlider from "./Components/Content/ImagesSlider";
import { getProductById } from "../../api/productInstance";
import { AppContext } from "../../store/context";
import { getProductInstancesAndSizes } from "../../api/sizesOfProduct";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ProductPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rndNum, setRndNum] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [productInstancesAndSizes, setProductInstancesAndSizes] = useState([]);
  const [productById, setProductById] = useState({});

  const {
    products,
    selectedProduct,
    setSelectedProduct,
    selectedSize,
    setSelectedSize,
  } = useContext(AppContext);

  const { productId } = useParams();

  useEffect(() => {
    getProductInstancesAndSizes(productId).then((data) => {
      setProductInstancesAndSizes(data);
    });
  }, [productId]);

  useEffect(() => {
    getProductById(productId).then((data) => setProductById(data));
  }, [productId]);

  useEffect(() => {
    const randomNumber = generateRandomNumber(1000000, 9999999);
    setRndNum(randomNumber);
  }, [setRndNum]);

  useEffect(() => {
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    console.log(selectedProductFromCookie);

    if (selectedProductFromCookie) {
      setSelectedProduct(JSON.parse(selectedProductFromCookie));
    }
  }, [setSelectedProduct]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddButtonItem = () => {
    const existingProductIndex = selectedProduct.findIndex(
      (item) => item.id === products[productId].id
    );

    let updatedSelectedProduct = [...selectedProduct];

    if (existingProductIndex !== -1) {
      updatedSelectedProduct[existingProductIndex].quantity++;
    } else {
      updatedSelectedProduct.push({
        ...products[productId],
        quantity: 1,
        selectedSize,
      });
    }

    setSelectedProduct(updatedSelectedProduct);
    Cookies.set("selectedProduct", JSON.stringify(updatedSelectedProduct));
  };

  const images = useMemo(
    () => (Array.isArray(productById?.images) ? [...productById.images] : []),
    [productById.images]
  );

  const tabs = [
    {
      title: "Description",
      content: <TabsContent text={productById?.description} />,
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
                      <p className="product-page__producer title-5">
                        {productById?.producer?.name}
                      </p>
                      <a
                        href="/url-до-сторінки-з-товаром-4"
                        className="product-page__title"
                      >
                        {productById?.name}
                      </a>
                      <p className="product-page__sex">
                        {productById?.category?.name}
                      </p>
                    </div>

                    <div className="product-page__price">
                      <p className="product-page__price-cost">
                        {productById?.price && `${productById.price}$`}
                      </p>
                      <span className="product-page__price-cost-sale title-5">
                        {productById?.price && `${productById.price + 120}$`}
                      </span>
                    </div>
                  </div>

                  <div className="product-page__interactive">
                    <div className="product-page__interactive-top">
                      <div className="product-page__sizes-wrapper">
                        {productInstancesAndSizes.map((size) => (
                          <div
                            key={size.size_name}
                            className={`product-page__size ${
                              selectedSize.size_name === size.size_name
                                ? "checked"
                                : ""
                            }`}
                            onClick={() => handleSizeClick(size)}
                          >
                            {size.size_name}
                          </div>
                        ))}
                      </div>

                      <div className="product-page__buttons">
                        <button
                          className={`button button_lg button_default button_authorization ${
                            isClicked ? "clicked" : ""
                          }`}
                          onClick={() => {
                            handleAddButtonItem();
                            setIsClicked(true);
                          }}
                        >
                          {isClicked ? "Added to cart" : "Buy Now"}

                          {!isClicked && <span className="icon-arrow" />}
                        </button>

                        <a className="product-page__button" href="">
                          <img src="img/icons/button.svg" alt="" />
                        </a>

                        <a className="product-page__button" href="">
                          <img src="img/icons/button-2.svg" alt="" />
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
                      Product code: {rndNum}
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
