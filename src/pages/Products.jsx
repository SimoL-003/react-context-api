import BudgetFilter from "../components/forms/BudgetFilter";
import { useProducts } from "../contexts/ProductsContext";
import ProductsGrid from "../components/organisms/ProductsGrid";

export default function Products() {
  const { maxPrice } = useProducts();

  return (
    <section className="bg-slate-100 py-10">
      <div className="container">
        <hgroup className="mb-8">
          <h1>Our products</h1>
          <h2>Choose our products</h2>
        </hgroup>

        <BudgetFilter maxPrice={maxPrice} />

        <ProductsGrid />
      </div>
    </section>
  );
}
