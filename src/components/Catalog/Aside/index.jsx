import { useState, useContext } from "react";

import { CatalogContext } from "../../../store/catalogContext";

import btnBack from "../../../assets/img/icons/btn-back.svg";
import Skeleton from "react-loading-skeleton";
import PriceRange from "../PriceRange";

const Aside = () => {
  const [activeSpoiler, setActiveSpoiler] = useState({});

  const { filterData, setSelectedFilters, isFilterDataLoading } = useContext(CatalogContext);

  const initialCount = 4;
  const [filterCount, setFilterCount] = useState({
    category: initialCount,
    producer: initialCount,
    gender: initialCount,
    size: initialCount,
  });

  const handlerAction = (filterType, setAction, action) => {
    setAction((prevState) => ({
      ...prevState,
      [filterType]: action(filterType, prevState),
    }));
  };

  const spoilerToggle = (filterType, prevState) => !prevState[filterType];
  const showmore = (filterType, prevState) => prevState[filterType].length;

  const handleCheckboxChange = (filterType, index, isChecked) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (isChecked) {
        return {
          ...prevSelectedFilters,
          [filterType + "_ids"]: [...(prevSelectedFilters[filterType + "_ids"] || []), index],
        };
      } else {
        const updatedFilter = (prevSelectedFilters[filterType + "_ids"] || []).filter((item) => item !== index);
        return {
          ...prevSelectedFilters,
          [filterType + "_ids"]: updatedFilter,
        };
      }
    });
  };

  return (
    <aside className="products__aside">
      <div className="products__title-block">
        <h2 className="products__title title-3">Filters</h2>
        <div className="products__close"></div>
      </div>
      {Object.entries(Object.assign({ price: 1 }, filterData)).map(([filterType], index) => (
        <div
          className={`products__filter filter spoiler ${activeSpoiler[filterType] ? "_active" : ""}`}
          key={filterType}
        >
          <div
            className="filter__title-block spoiler__header"
            onClick={() => handlerAction(filterType, setActiveSpoiler, spoilerToggle)}
          >
            <h3 className="filter__title title-3">{filterType}</h3>
            <img className="filter__arrow" src={btnBack} alt="btn-back" />
          </div>
          <ul className="filter__items spoiler__content">
            {isFilterDataLoading ? (
              Array(4)
                .fill(0)
                .map((_, index) => <Skeleton style={{ marginBottom: 5 }} height={20} key={index} />)
            ) : index == 0 ? (
              <PriceRange min={0} max={10000} />
            ) : (
              filterData[filterType].slice(0, filterCount[filterType]).map((item, index) => (
                <li className="filter__item checkbox" key={item.id}>
                  <input
                    className="checkbox__index"
                    type="checkbox"
                    id={item.name}
                    onChange={(e) => handleCheckboxChange(filterType, index + 1, e.target.checked)}
                  />
                  <label className="checkbox__label" htmlFor={item.name}>
                    {item.name}
                  </label>
                </li>
              ))
            )}
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

export default Aside;
