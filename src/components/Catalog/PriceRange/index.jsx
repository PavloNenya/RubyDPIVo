import { useCallback, useEffect, useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { CatalogContext } from "../../../store/catalogContext";

import "./index.scss";

const PriceRange = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const { selectedFilters, setSelectedFilters } = useContext(CatalogContext);
  const { t } = useTranslation();

  // Convert to percentage
  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  // Handle input with debounce
  const handlePriceInput = useCallback(
    debounce((value, key) => {
      setSelectedFilters((prevSelectedFilters) => ({
        ...prevSelectedFilters,
        [key]: parseFloat(value),
      }));
    }, 200),
    [],
  );

  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    handlePriceInput(minVal, "min_price");
  }, [handlePriceInput, minVal]);

  useEffect(() => {
    handlePriceInput(maxVal, "max_price");
  }, [handlePriceInput, maxVal]);

  return (
    <>
      <li className="filter__item">
        <input
          className="filter__input"
          type="text"
          placeholder={t("catalog.pricerange.from")}
          value={selectedFilters.min_price}
          onChange={(e) => handlePriceInput(e.target.value, "min_price")}
        />
      </li>
      <li className="filter__item">
        <input
          className="filter__input"
          type="text"
          placeholder={t("catalog.pricerange.from")}
          value={selectedFilters.max_price}
          onChange={(e) => handlePriceInput(e.target.value, "max_price")}
        />
      </li>
      <li className="filter__item">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </li>
    </>
  );
};

PriceRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default PriceRange;
