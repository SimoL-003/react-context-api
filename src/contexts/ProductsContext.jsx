import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const allProducts = res.data;
      setProductsList(allProducts);

      let maxP = 0;
      for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].price > maxP) {
          maxP = allProducts[i].price;
        }
      }
      setMaxPrice(maxP);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productsList, setProductsList, maxPrice, setMaxPrice }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsContextProvider, useProducts };
