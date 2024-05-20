import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const { page } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const { t } = useTranslation();
  const {
    selectedFilters,
    setSizes,
    setGenders,
    setCategories,
    setProducers,
    setIsFilterDataLoading,
  } = useContext(CatalogContext);

  useEffect(() => {
    const currentPage = parseInt(page, 10);

    if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
      navigate(`/catalog/1`, { replace: true });
    }
  }, [page, totalPages, navigate]);

  useEffect(() => {
    setIsFilterDataLoading(true);
    Promise.all([getCategories(), getProducers(), getSizes(), getGenders()])
      .then(([categories, producers, sizes, genders]) => {
        setCategories(categories);
        setProducers(producers);
        setSizes(sizes);
        setGenders(genders);
      })
      .catch((error) => console.error("Error fetching filter data:", error))
      .finally(() => setIsFilterDataLoading(false));
  }, [
    setCategories,
    setGenders,
    setIsFilterDataLoading,
    setProducers,
    setSizes,
  ]);

  useEffect(() => {
    let isMounted = true;

    setProducts([]);
    setIsLoading(true);

    getProductsByPage(page, selectedFilters)
      .then((data) => {
        if (isMounted) {
          setProducts(data?.content || []);
          setTotalPages(data?.totalPages || 1);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
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
                        <ProductCard
                          key={product.id}
                          product={product}
                          classType="products"
                        />
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
