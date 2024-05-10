import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Aside from "../../components/Catalog/Aside";

import "./index.scss";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../api/products";

const CatalogPage = () => {
  const { page } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCategoryClose = (filterType, itemName) => {
    setSelectedFilters((prevSelectedFilters) => {
      const updatedFilters = { ...prevSelectedFilters };
      updatedFilters[filterType] = updatedFilters[filterType].filter(
        (item) => item !== itemName
      );
      return updatedFilters;
    });
  };

  const handleCheckboxToggle = (itemName) => {
    const checkbox = document.getElementById(itemName);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  useEffect(() => {
    setProducts([]);

    getProducts().then((data) => setProducts(data));
  }, [page]);

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
                      <li
                        className="categories__item"
                        key={`${filterType}-${index}`}
                      >
                        <p className="categories__text">{itemName}</p>
                        <button
                          className="categories__close"
                          onClick={() => {
                            handleCategoryClose(filterType, itemName);
                            handleCheckboxToggle(itemName);
                          }}
                        ></button>
                      </li>
                    ))
                  )}
                </ul>
                <div className="products__params">
                  {/* TODO select */}
                  <select className="products__options">
                    <option className="products__option" value="">
                      Sort by descending price
                    </option>
                    <option className="products__option" value="">
                      Sort by ascending price
                    </option>
                    <option className="products__option" value="">
                      Sort by name
                    </option>
                    <option className="products__option" value="">
                      Sort by price
                    </option>
                  </select>
                  <button className="products__button button-reset">
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
                <div className="products__pagination pagination">
                  <Link to={`/catalog/${parseInt(page) - 1}`}>
                    <button className="pagination__button left">
                      <i className="pagination__icon icon-arrow-down"></i>
                    </button>
                  </Link>
                  <p className="pagination__text">Page</p>
                  <ul className="pagination__items">
                    <li className="pagination__item">
                      <Link to="/catalog/1" className="pagination__link">
                        1
                      </Link>
                    </li>
                    <li className="pagination__item">
                      <Link to="/catalog/2" className="pagination__link">
                        2
                      </Link>
                    </li>
                    <li className="pagination__item">
                      <Link to="/catalog/3" className="pagination__link">
                        3
                      </Link>
                    </li>
                  </ul>
                  <Link
                    to={`/catalog/${parseInt(page) + 1}`}
                    onClick={console.log(page)}
                  >
                    <button className="pagination__button right">
                      <i className="pagination__icon icon-arrow-down"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
