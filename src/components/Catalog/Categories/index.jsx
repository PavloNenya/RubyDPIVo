import { useContext } from "react";
import { CatalogContext } from "../../../store/catalogContext";

import reset from "../../../assets/img/icons/reset.svg";
import filter from "../../../assets/img/icons/filter.svg";

const Categories = () => {
  const { filterData, selectedFilters, setSelectedFilters } = useContext(CatalogContext);
  const sortDiff = [
    {
      sort_field: "price",
      sort_order: "asc",
    },
    {
      sort_field: "price",
      sort_order: "desc",
    },
    {
      sort_field: "name",
      sort_order: "asc",
    },
    {
      sort_field: "name",
      sort_order: "desc",
    },
  ];

  const handleCategoryClose = (filterType, index) => {
    setSelectedFilters((prevSelectedFilters) => {
      const updatedFilter = prevSelectedFilters[filterType].filter((item) => item !== index);
      return {
        ...prevSelectedFilters,
        [filterType]: updatedFilter,
      };
    });
  };

  const handleCheckboxToggle = (item) => {
    const checkbox = document.getElementById(item);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleReset = () => {
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      category_ids: [],
      producer_ids: [],
      gender_ids: [],
      size_ids: [],
    }));

    Object.keys(filterData).forEach((filterType) => {
      selectedFilters[filterType + "_ids"].forEach((_, index) => {
        handleCheckboxToggle(filterData[filterType][index].name);
      });
    });
  };

  const handleSelectSort = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedSort = sortDiff[selectedIndex];
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      sort_field: selectedSort.sort_field,
      sort_order: selectedSort.sort_order,
    }));
  };

  return (
    <div className="products__settings">
      <ul className="products__categories categories">
        {Object.entries(selectedFilters).map(
          ([filterType, filterArray]) =>
            Array.isArray(filterArray) &&
            filterArray.map((item, arrayIndex) => (
              <li className="categories__item" key={`${filterType}-${arrayIndex}`}>
                <p className="categories__text">{filterData[filterType.slice(0, -4)][item - 1].name}</p>
                <button
                  className="categories__close"
                  onClick={() => {
                    handleCategoryClose(filterType, filterData[filterType.slice(0, -4)][item - 1].id);
                    handleCheckboxToggle(filterData[filterType.slice(0, -4)][item - 1].name);
                  }}
                ></button>
              </li>
            )),
        )}
      </ul>
      <div className="products__params">
        <select className="products__options" onChange={handleSelectSort}>
          {sortDiff.map((item, index) => (
            <option className="products__option" key={index}>
              Sort by {item.sort_field} {item.sort_order}
            </option>
          ))}
        </select>
        <button className="products__button button-reset" onClick={handleReset}>
          <img src={reset} alt="reset" />
        </button>
        <button className="products__button button-filter">
          <img src={filter} alt="filter" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
