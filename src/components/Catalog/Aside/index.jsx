import { useState, useEffect } from "react";
import { getCategories } from "../../../api/categories";
import { getSizes } from "../../../api/sizes";
import { getProducers } from "../../../api/producers";
import { getGenders } from "../../../api/genders";

import PropTypes from "prop-types";

const Aside = ({ setSelectedFilters }) => {
  const [categories, setCategories] = useState([]);
  const [producers, setProducers] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [activeSpoiler, setActiveSpoiler] = useState({});

  const initialCount = 4;
  const [filterCount, setFilterCount] = useState({
    Category: initialCount,
    Brands: initialCount,
    Gender: initialCount,
    Sizes: initialCount,
  });

  const filterData = {
    Price: [
      <li className="filter__item" key={1}>
        <input className="filter__input" type="text" placeholder="From 79$" />
      </li>,
      <li className="filter__item" key={2}>
        <input className="filter__input" type="text" placeholder="To 219$" />
      </li>,
      <li className="filter__item" key={3}>
        <div className="filter__line"></div>
      </li>,
    ],
    Category: categories,
    Brands: producers,
    Gender: genders,
    Sizes: sizes,
  };

  const handlerAction = (filterType, setAction, action) => {
    setAction((prevState) => ({
      ...prevState,
      [filterType]: action(filterType, prevState),
    }));
  };

  const spoilerToggle = (filterType, prevState) => !prevState[filterType];
  const showmore = (filterType, prevState) => prevState[filterType].length;

  const handleCheckboxChange = (filterType, itemName, isChecked) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (isChecked) {
        return {
          ...prevSelectedFilters,
          [filterType]: [...(prevSelectedFilters[filterType] || []), itemName],
        };
      } else {
        const updatedFilter = (prevSelectedFilters[filterType] || []).filter((item) => item !== itemName);
        return {
          ...prevSelectedFilters,
          [filterType]: updatedFilter,
        };
      }
    });
  };

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
    getSizes().then((data) => {
      setSizes(data);
    });
    getProducers().then((data) => {
      setProducers(data);
    });
    getGenders().then((data) => {
      setGenders(data);
    });
  }, []);

  return (
    <aside className="products__aside">
      <div className="products__title-block">
        <h2 className="products__title title-3">Filters</h2>
        <div className="products__close"></div>
      </div>
      {Object.keys(filterData).map((filterType) => (
        <div
          className={`products__filter filter spoiler ${activeSpoiler[filterType] ? "_active" : ""}`}
          key={filterType}
        >
          <div
            className="filter__title-block spoiler__header"
            onClick={() => handlerAction(filterType, setActiveSpoiler, spoilerToggle)}
          >
            <h3 className="filter__title title-3">{filterType}</h3>
            <i className="filter__icon icon-arrow-down"></i>
          </div>
          <ul className="filter__items spoiler__content">
            {filterType == "Price"
              ? filterData[filterType].map((item) => item)
              : filterData[filterType].slice(0, filterCount[filterType]).map((item) => (
                  <li className="filter__item checkbox" key={item.id}>
                    <input
                      className="checkbox__index"
                      type="checkbox"
                      id={item.name}
                      onChange={(e) => handleCheckboxChange(filterType, item.name, e.target.checked)}
                    />
                    <label className="checkbox__label" htmlFor={item.name}>
                      {item.name}
                    </label>
                  </li>
                ))}
            {filterCount[filterType] <= 4 && filterData[filterType].length > 4 && (
              <li className="filter__item showmore-wrapper">
                <button className="showmore" onClick={() => handlerAction(filterType, setFilterCount, showmore)}>
                  Show more
                </button>
              </li>
            )}
          </ul>
        </div>
      ))}
    </aside>
  );
};

Aside.propTypes = {
  setSelectedFilters: PropTypes.func.isRequired,
};

export default Aside;
