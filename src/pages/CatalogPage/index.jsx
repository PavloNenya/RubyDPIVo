import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
import CardSkeleton from "../../components/Skeletons/CardSkeleton";

import "./index.scss";

const CatalogPage = () => {
  const { page, type } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const { t } = useTranslation();
  const { selectedFilters, setSizes, setGenders, setCategories, setProducers, setIsFilterDataLoading } =
    useContext(CatalogContext);

  useEffect(() => {
    setIsFilterDataLoading(true);
    getCategories().then((data) => setCategories(data));
    getProducers().then((data) => setProducers(data));
    getSizes().then((data) => setSizes(data));
    getGenders().then((data) => setGenders(data));
    setIsFilterDataLoading(false);
  }, [setCategories, setGenders, setIsFilterDataLoading, setProducers, setSizes]);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);

    getProductsByPage(page, selectedFilters).then((data) => {
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
              <h1 className="products__title title-3">{t("catalog.title")}</h1>
              <Categories />
              <div className="products__content">
                <div className="products__cards">
                  {isLoading
                    ? Array(12)
                        .fill(0)
                        .map((_, index) => <CardSkeleton key={index} />)
                    : products.map((product) => (
                        <Link className="products__card" to={`/catalog/product/${product.id}`} key={product.id}>
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
