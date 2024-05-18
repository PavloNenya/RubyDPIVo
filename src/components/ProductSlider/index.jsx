import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { AppContext } from "../../store/context";

import ProductCard from "../ProductCard";
import SliderIndicator from "../SliderIndicator";
import CardSkeleton from "../Skeletons/CardSkeleton";

import scrollingArrows from "../../assets/img/icons/scrollingArrows.svg";

import "./index.scss";

const ProductSlider = ({ type, products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(285);
  const [cardsInView, setCardsinView] = useState(1);

  const [autoPlayInterval] = useState(4000);
  const [autoPlayActive] = useState(true);

  const cardsToMove = 1;
  const gap = 20;

  const { isLoading } = useContext(AppContext);
  const { t } = useTranslation();

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
  }, [autoPlayActive, autoPlayInterval, cardsInView, products.length, startIndex]);

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 639) {
        setCardWidth(212);
      } else if (screenWidth <= 1199) {
        setCardsinView(2);
        setCardWidth(280);
      } else {
        setCardsinView(4);
        setCardWidth(285);
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
    [cardWidth, products.length, startIndex],
  );

  const leftArrowDis = startIndex === 0;
  const rightArrowDis = startIndex >= products.length - cardsInView;

  const titleOfBlock =
    type === "normal"
      ? t("slider.new")
      : type === "sale"
      ? t("slider.sale")
      : type === "category"
      ? t("slider.category")
      : t("slider.like");

  return (
    <section className="page__goods goods">
      <div className="goods__container">
        <div className="goods__body">
          <div className="goods__title-block title-block">
            <h2 className="title-block__title title-2">{titleOfBlock}</h2>
            <div className="title-block__button button-wrapper">
              <div className="goods__btnWrapper">
                <button className="goods__btnSlider" onClick={handlePrevClick} disabled={leftArrowDis}>
                  <img className="goods__toggle" src={scrollingArrows} alt="" />
                </button>

                <button className="goods__btnSlider left" onClick={handleNextClick} disabled={rightArrowDis}>
                  <img className="goods__toggle" src={scrollingArrows} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="goods__cards-wrapper">
            <div className="goods__cards" style={carouselListStyles}>
              {isLoading
                ? Array(12)
                    .fill(0)
                    .map((_, index) => <CardSkeleton key={index} cardWidth={cardWidth} type={"goods"} />)
                : products.map((product) => (
                    <ProductCard key={product.id} product={product} cardWidth={cardWidth} type={type} />
                  ))}
            </div>
          </div>
          <SliderIndicator totalCards={products.length} startIndex={startIndex} cardsInView={cardsInView} />
        </div>
      </div>
    </section>
  );
};

ProductSlider.propTypes = {
  type: PropTypes.string,
  products: PropTypes.array,
};

export default ProductSlider;
