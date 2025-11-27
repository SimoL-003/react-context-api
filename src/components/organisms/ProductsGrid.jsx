import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useBudget } from "../../contexts/BudgetContext";
import ProductsGridLoader from "../loaders/ProductsGridLoader";
import ProductCard from "../molecules/ProductCard";

export default function ProductsGrid() {
  const { productsList } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(productsList);
  const { budgetMode, maxBudget } = useBudget();

  useEffect(() => {
    let filteredProd = productsList;
    if (budgetMode) {
      filteredProd = filteredProd.filter(
        (curProd) => curProd.price <= maxBudget
      );
    }
    setFilteredProducts(filteredProd);
  }, [budgetMode, productsList, maxBudget]);

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-500">
        {productsList.length !== 0 ? (
          filteredProducts.length !== 0 ? (
            filteredProducts.map((product) => (
              // Product card
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div>
              <h3>0 products found</h3>
            </div>
          )
        ) : (
          // Skeleton loaders
          <>
            <ProductsGridLoader />
            <ProductsGridLoader />
            <ProductsGridLoader />
            <ProductsGridLoader />
            <ProductsGridLoader />
            <ProductsGridLoader />
          </>
        )}
      </ul>
    </section>
  );
}
