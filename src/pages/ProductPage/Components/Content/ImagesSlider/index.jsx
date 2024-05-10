/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import scrollingArrows from "../../../../../assets/togles/scrollingArrows.svg";

import "./index.scss";

export const ImagesSlider = ({ productsInstances }) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    <img
      src={`http://localhost:9091/api/images/${productsInstances.images[0]}`}
      alt="img-of-item"
    />,
    <img
      src={`http://localhost:9091/api/images/${productsInstances.images[1]}`}
      alt="img-of-item"
    />,
    <img
      src={`http://localhost:9091/api/images/${productsInstances.images[2]}`}
      alt="img-of-item"
    />,
    <img
      src={`http://localhost:9091/api/images/${productsInstances.images[3]}`}
      alt="img-of-item"
    />,
    <img
      src={`http://localhost:9091/api/images/${productsInstances.images[4]}`}
      alt="img-of-item"
    />,
    <img
      src={`http://localhost:9091/api/images/${productsInstances.images[5]}`}
      alt="img-of-item"
    />,
  ];

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
