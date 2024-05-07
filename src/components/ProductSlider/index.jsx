/* eslint-disable react/prop-types */
// import Carousel from "react-multi-carousel";
import "./index.scss";
import { useEffect, useMemo, useContext, useState } from "react";
import ProductCard from "../ProductCard";
import { AppContext } from "../../store/context";
import SliderIndicator from "../SliderIndicator";
import { getProducts } from "../../api/products";
import scrollingArrows from "../../assets/togles/scrollingArrows.svg";

const ProductSlider = ({ type }) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(285);
  const [cardsInView, setCardsinView] = useState(1);
  const { products, setProducts, setErrorMessage } = useContext(AppContext);

  const [autoPlayInterval] = useState(4000);
  const [autoPlayActive] = useState(true);

  const cardsToMove = 1;
  const gap = 20;

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    setErrorMessage(null);

    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setErrorMessage("lol"))
      .finally(() => setIsLoading(false));
  }, [setErrorMessage, setProducts]);

  useEffect(() => {
    let intervalId;

    if (autoPlayActive) {
      intervalId = setInterval(() => {
        const maxStartIndex = products.length - cardsInView;
        const newStartIndex = (startIndex + cardsToMove) % (maxStartIndex + 1);
        setStartIndex(newStartIndex);
      }, autoPlayInterval);
    }

    return () => clearInterval(intervalId);
  }, [
    autoPlayActive,
    autoPlayInterval,
    cardsInView,
    products.length,
    startIndex,
  ]);

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 639) {
        setCardWidth(212);
      } else if (screenWidth <= 1199) {
        setCardWidth(270);
        setCardsinView(2);
      } else {
        setCardWidth(276);
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
    [cardWidth, products.length, startIndex]
  );

  const leftArrowDis = startIndex === 0;
  const rightArrowDis = startIndex >= products.length - cardsInView;

  const titleOfBlock =
    type === "normal"
      ? "New Collection"
      : type === "sale"
      ? "Best Seller"
      : "You May Also Like";

  return (
    <section className="page__goods goods">
      <div className="goods__container">
        <div className="goods__body">
          <div className="goods__title-block title-block">
            <h2 className="title-block__title title-2">{titleOfBlock}</h2>
            <div className="title-block__button button-wrapper">
              <div className="goods__btnWrapper">
                <button
                  className="goods__btnSlider"
                  onClick={handlePrevClick}
                  disabled={leftArrowDis}
                >
                  <img className="goods__toggle" src={scrollingArrows} alt="" />
                </button>

                <button
                  className="goods__btnSlider left"
                  onClick={handleNextClick}
                  disabled={rightArrowDis}
                >
                  <img className="goods__toggle" src={scrollingArrows} alt="" />
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
          <SliderIndicator
            totalCards={products.length}
            startIndex={startIndex}
            cardsInView={cardsInView}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
