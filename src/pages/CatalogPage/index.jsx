import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProducts } from "../../api/products";

import Aside from "../../components/Catalog/Aside";
import Pagination from "../../components/Catalog/Pagination";
import ProductCard from "../../components/ProductCard";

import "./index.scss";

const CatalogPage = () => {
  const { page } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const sortOptions = ["ascending", "descending", "name"];

  const handleCategoryClose = (filterType, itemName) => {
    setSelectedFilters((prevSelectedFilters) => {
      const updatedFilters = { ...prevSelectedFilters };
      updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== itemName);
      return updatedFilters;
    });
  };

  const handleCheckboxToggle = (itemName) => {
    const checkbox = document.getElementById(itemName);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleReset = () => {
    setSelectedFilters({});

    Object.keys(selectedFilters).forEach((filterType) => {
      selectedFilters[filterType].forEach((itemName) => {
        handleCheckboxToggle(itemName);
      });
    });
  };

  useEffect(() => {}, [page]);

  return (
    <section className="page__products products">
      <div className="products__container">
        <div className="products__body">
          <div className="products__inner">
            <Aside setSelectedFilters={setSelectedFilters} />
            <div className="products__main">
              <h1 className="products__title title-3">Nike Air Jordan</h1>
              <div className="products__settings">
                <ul className="products__categories categories">
                  {Object.keys(selectedFilters).map((filterType) =>
                    selectedFilters[filterType].map((itemName, index) => (
                      <li className="categories__item" key={`${filterType}-${index}`}>
                        <p className="categories__text">{itemName}</p>
                        <button
                          className="categories__close"
                          onClick={() => {
                            handleCategoryClose(filterType, itemName);
                            handleCheckboxToggle(itemName);
                          }}
                        ></button>
                      </li>
                    )),
                  )}
                </ul>
                <div className="products__params">
                  <select className="products__options">
                    {sortOptions.map((item) => (
                      <option className="products__option" value={item} key={item}>
                        Sort by {item}
                      </option>
                    ))}
                  </select>
                  <button className="products__button button-reset" onClick={handleReset}>
                    <img src="./img/icons/reset.svg" alt="reset" />
                  </button>
                  <button className="products__button button-filter">
                    <img src="./img/icons/filter.svg" alt="filter" />
                  </button>
                </div>
              </div>
              <div className="products__content">
                <div className="products__cards">
                  {products.map((product) => (
                    <Link to={`product/${product.id}`} key={product.id}>
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
