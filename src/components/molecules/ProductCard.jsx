import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <li className="rounded-lg bg-white shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
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
  );
}
