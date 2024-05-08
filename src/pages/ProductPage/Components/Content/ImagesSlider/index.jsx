import { useEffect, useState } from "react";
import secondPhoto from "../../../../../assets/img/mainscreen/productsCards/Jordans/1.png";
import thirdPhoto from "../../../../../assets/img/mainscreen/productsCards/Jordans/2.png";
import fourPhoto from "../../../../../assets/img/mainscreen/productsCards/Jordans/3.png";
import fivePhoto from "../../../../../assets/img/mainscreen/productsCards/Jordans/4.png";
import scrollingArrows from "../../../../../assets/togles/scrollingArrows.svg";

import "./index.scss";

const images = [
  secondPhoto,
  thirdPhoto,
  fivePhoto,
  fourPhoto,
  thirdPhoto,
  secondPhoto,
];

export const ImagesSlider = () => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, []);

  return (
    <div className="product-page__top-left">
      <div className="product-page__photos">
        {console.log(images)}
        {images.map((image, index) => (
          <img
            key={index}
            className={`product-page__mini-photo ${
              index === currentIndex ? "selected" : ""
            }`}
            src={image}
            alt={`mini-photo-${index}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <div className="product-page__main-photo-wrapper">
        <div className="infolabel infolabel-right">
          new
          <img className="infolabel__icon" src="/img/icons/clock.svg" alt="" />
        </div>

        <div className="product-page__togles">
          <button
            className="product-page__toggle-button"
            onClick={handlePrevClick}
          >
            <img className="product-page__togle" src={scrollingArrows} alt="" />
          </button>

          <button
            className="product-page__toggle-button left"
            onClick={handleNextClick}
          >
            <img className="product-page__togle" src={scrollingArrows} alt="" />
          </button>
        </div>

        <img
          className="product-page__main-photo"
          src={selectedImg}
          alt="main-photo"
        />
      </div>
    </div>
  );
};

export default ImagesSlider;
