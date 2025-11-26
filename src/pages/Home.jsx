import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="home__hero bg-cover h-[500px] flex items-center bg-blend-multiply bg-black/20">
        <div className="container">
          <hgroup>
            <h1 className="text-white">Shop Online</h1>
            <h2 className="text-slate-100 font-bold mb-8 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              esse?
            </h2>
          </hgroup>
          <Link to={"/products"} className="button button--primary">
            Discover our products
          </Link>
        </div>
      </section>
    </main>
  );
}
