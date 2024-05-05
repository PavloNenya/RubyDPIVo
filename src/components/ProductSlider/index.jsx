// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.scss";
import ProductCard from "../ProductCard";
import { useEffect, useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../store/context";
import { getProducts } from "../../api/products";

const ProductSlider = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(285);
  const [cardsInView, setCardsinView] = useState(1);
  const cardsToMove = 1;
  const gap = 20;

  const { products, setProducts, setErrorMessage } = useContext(AppContext);

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 639) {
        setCardWidth(212);
      } else if (screenWidth <= 1199) {
        setCardWidth(260);
        setCardsinView(2);
      } else {
        setCardWidth(285);
        setCardsinView(4);
      }
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  const handlePrevClick = () => {
    const newStartIndex = startIndex - cardsToMove;

    setStartIndex(Math.max(newStartIndex, 0));
  };

  const handleNextClick = () => {
    const maxStartIndex = products.length - cardsInView;
    const newStartIndex = Math.min(startIndex + cardsToMove, maxStartIndex);

    setStartIndex(newStartIndex);
  };

  const carouselListStyles = useMemo(
    () => ({
      width: `${(cardWidth + gap) * products.length + gap}px`,
      transform: `translateX(-${startIndex * (cardWidth + gap)}px)`,
      transition: "transform 0.5s ease",
    }),
    [cardWidth, gap, products.length, startIndex]
  );

  const leftArrowDis = startIndex === 0;
  const rightArrowDis = startIndex >= products.length - cardsInView;

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
    <section className="page__goods goods">
      <div className="goods__container">
        <div className="goods__body">
          <div className="goods__title-block title-block">
            <h2 className="title-block__title title-2">New Collection</h2>
            <div className="title-block__button button-wrapper">
              {/* <a className="button button_md button_ghost" href="#">
                <span className="icon-arrow" />
                View All
              </a> */}

              <div className="goods__btnWrapper">
                <button
                  className="goods__btnSlider"
                  onClick={handlePrevClick}
                  disabled={leftArrowDis}
                >
                  -
                </button>

                <button
                  className="goods__btnSlider"
                  onClick={handleNextClick}
                  disabled={rightArrowDis}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="goods__cards-wrapper">
            <div className="goods__cards" style={carouselListStyles}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  cardWidth={cardWidth}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
