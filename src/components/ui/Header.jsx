import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import Products from "../../pages/Products";
import { Link, NavLink } from "react-router-dom";

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
        </ol>
      </nav>
    </header>
  );
}
