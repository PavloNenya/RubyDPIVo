import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CatalogContext } from "../../store/catalogContext";

import { getCategories } from "../../api/categories";
import { getSizes } from "../../api/sizes";
import { getProducers } from "../../api/producers";
import { getGenders } from "../../api/genders";
import { getProductsByPage } from "../../api/products";

import Aside from "../../components/Catalog/Aside";
import Pagination from "../../components/Catalog/Pagination";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Catalog/Categories";

import "./index.scss";

const CatalogPage = () => {
  const { page, type } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const { selectedFilters, setSizes, setGenders, setCategories, setProducers } =
    useContext(CatalogContext);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
    getProducers().then((data) => setProducers(data));
    getSizes().then((data) => setSizes(data));
    getGenders().then((data) => setGenders(data));
  }, [setCategories, setGenders, setProducers, setSizes]);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);

    getProductsByPage(page, selectedFilters).then((data) => {
      console.log(data);
      setProducts(data?.content);
      setTotalPages(data?.totalPages);
      setIsLoading(false);
    });
  }, [page, selectedFilters]);

  return (
    <section className="page__products products">
      <div className="products__container">
        <div className="products__body">
          <div className="products__inner">
            <Aside />
            <div className="products__main">
              <h1 className="products__title title-3">Nike Air Jordan</h1>
              <Categories />
              <div className="products__content">
                <div className="products__cards">
                  {!isLoading &&
                    products.map((product) => (
                      <Link
                        to={`/catalog/product/${product.id}`}
                        key={product.id}
                      >
                        <ProductCard product={product} />
                      </Link>
                    ))}
                </div>
                <Pagination totalPages={totalPages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
