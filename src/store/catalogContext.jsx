import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const CatalogContext = createContext({});

export const CatalogContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [producers, setProducers] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category_ids: [],
    producer_ids: [],
    size_ids: [],
    gender_ids: [],
    min_price: 1,
    max_price: 1000,
    sort_field: "price",
    sort_order: "asc",
  });

  const value = useMemo(() => {
    const filterData = { category: categories, producer: producers, gender: genders, size: sizes };
    return {
      categories,
      setCategories,
      producers,
      setProducers,
      sizes,
      setSizes,
      genders,
      setGenders,
      selectedFilters,
      setSelectedFilters,
      filterData,
    };
  }, [categories, genders, producers, sizes, selectedFilters]);

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
};

CatalogContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
