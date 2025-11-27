import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useBudget } from "../../contexts/BudgetContext";
import ProductsGridLoader from "../loaders/ProductsGridLoader";
import { Link } from "react-router-dom";

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
              <li
                key={product.id}
                className="rounded-lg bg-white shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/products/${product.id}`} className="block p-8">
                  {/* Card img */}
                  <div className="flex justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[200px] aspect-square object-contain"
                    />
                  </div>

                  {/* Card text */}
                  <div className="mt-4">
                    <h3 className="py-1">{product.title}</h3>
                  </div>
                </Link>
              </li>
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
