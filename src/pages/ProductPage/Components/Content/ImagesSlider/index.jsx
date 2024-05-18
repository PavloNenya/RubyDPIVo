/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import arrowSlider from "../../../../../assets/img/icons/scrollingArrows.svg";
import clockIcon from "../../../../../assets/img/icons/clock.svg";

import "./index.scss";

export const ImagesSlider = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t } = useTranslation();

  const handleImageClick = (index) => {
    setSelectedImg(images[index]);
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;

    setSelectedImg(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    setSelectedImg(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    setSelectedImg(images[0]);
  }, [images]);

  return (
    <div className="product-page__top-left">
      <div className="product-page__photos">
        {images.slice(0, 6).map((image, index) => (
          <img
            key={index}
            className={`product-page__mini-photo ${index === currentIndex ? "selected" : ""}`}
            src={`http://localhost:9091/api/images/${image}`}
            alt={`mini-photo-${index}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
        {images.length > 5 && (
          <div className="product-page__more-photos">
            +{images.length - 6} {t("product.more")}
          </div>
        )}
      </div>

      <div className="product-page__main-photo-wrapper">
        <div className="infolabel infolabel-right">
          {t("product.new")}
          <img className="infolabel__icon" src={clockIcon} alt="" />
        </div>

        <div className="product-page__togles">
          <button className="product-page__toggle-button" onClick={handlePrevClick}>
            <img className="product-page__togle" src={arrowSlider} alt="" />
          </button>

          <button className="product-page__toggle-button left" onClick={handleNextClick}>
            <img className="product-page__togle" src={arrowSlider} alt="" />
          </button>
        </div>

        <img
          className="product-page__main-photo"
          src={`http://localhost:9091/api/images/${selectedImg}`}
          alt="main-photo"
        />
      </div>
    </div>
  );
};

export default ImagesSlider;
