import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { AppContext } from "../../store/context";
import { getProducts } from "../../api/products";

export const Mainscreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const { setProducts, setErrorMessage } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    setErrorMessage(null);

    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setErrorMessage("lol"))
      .finally(() => setIsLoading(false));
  }, [setErrorMessage, setProducts]);

  return (
    <section className="page__mainscreen mainscreen">
      <div className="mainscreen__container">
        <div className="mainscreen__body">
          <h1 className="mainscreen__title title-1">
            sneak
            <wbr />
            peek
          </h1>
          <div className="mainscreen__content ibg">
            <img
              className="mainscreen__main-img"
              src="img/mainscreen/bg.jpg"
              alt="bg.jpg"
            />
            <div className="mainscreen__block">
              <div className="mainscreen__text">
                <p className="text-reverse">
                  In the whole summer show, this is the designer’s best look yet
                </p>
              </div>
              <div className="mainscreen__date">
                <p className="text-reverse">
                  17.06
                  <br />
                  2023
                </p>
              </div>
            </div>
            <img
              className="mainscreen__banner"
              src="img/mainscreen/banner.png"
              alt="banner.png"
            />
          </div>
          {/* <div className="mainscreen__swiper swiper">
            <ul className="mainscreen__items swiper-wrapper">
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-1.png"
                  alt="item-1.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-2.png"
                  alt="item-2.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-3.png"
                  alt="item-3.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-4.png"
                  alt="item-4.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-5.png"
                  alt="item-5.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-6.png"
                  alt="item-6.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-7.png"
                  alt="item-7.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-8.png"
                  alt="item-8.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-9.png"
                  alt="item-9.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-1.png"
                  alt="item-1.png"
                />
              </li>
              <li className="mainscreen__item swiper-slide">
                <img
                  className="mainscreen__img"
                  src="img/mainscreen/items/item-2.png"
                  alt="item-2.png"
                />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};
