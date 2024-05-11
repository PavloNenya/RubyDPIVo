import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});

  const value = useMemo(
    () => ({
      products,
      setProducts,
      errorMessage,
      setErrorMessage,
      selectedProduct,
      setSelectedProduct,
      selectedSize,
      setSelectedSize,
    }),
    [errorMessage, products, selectedProduct, selectedSize]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
