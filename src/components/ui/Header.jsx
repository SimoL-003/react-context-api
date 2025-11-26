import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../../contexts/BudgetContext";

export default function Header() {
  const nav = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "About us",
      path: "/about-us",
    },
    {
      page: "Products",
      path: "/products",
    },
  ];

  const { budgetMode, setBudgetMode } = useBudget();

  return (
    <header className="h-20 bg-white flex items-center justify-center">
      <nav className="flex justify-between items-center w-[95%]">
        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold text-slate-900">
          Shop Online
        </Link>

        {/* NAVIGATION */}
        <ol className="flex gap-10 items-center">
          {nav.map((cur, index) => (
            <li
              key={index}
              className="text-slate-700 font-medium text-base lg:text-lg"
            >
              <NavLink
                to={cur.path}
                className="hover:text-slate-900 hover:border-b transition-all duration-200"
              >
                {cur.page}
              </NavLink>
            </li>
          ))}

          {/* Budget mode btn */}
          {/* <li>
            <button
              onClick={() => setBudgetMode((prev) => !prev)}
              className="button button--primary px-4 py-3 text-sm"
            >
              {budgetMode ? "Disattiva" : "Attiva"} budget mode
            </button>
          </li> */}
        </ol>
      </nav>
    </header>
  );
}
