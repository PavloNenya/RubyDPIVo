import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      errorMessage,
      setErrorMessage,
    }),
    [errorMessage, products, setErrorMessage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
