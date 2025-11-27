import { Link } from "react-router-dom";

export default function SingleProductLoader() {
  return (
    <div className="container">
      <div>
        <Link to={"/products"} className="button button--secondary">
          Return to products
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-2/5 p-8 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            className="w-[100px]"
          >
            <path d="M160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM224 192C241.7 192 256 206.3 256 224C256 241.7 241.7 256 224 256C206.3 256 192 241.7 192 224C192 206.3 206.3 192 224 192zM360 264C368.5 264 376.4 268.5 380.7 275.8L460.7 411.8C465.1 419.2 465.1 428.4 460.8 435.9C456.5 443.4 448.6 448 440 448L200 448C191.1 448 182.8 443 178.7 435.1C174.6 427.2 175.2 417.6 180.3 410.3L236.3 330.3C240.8 323.9 248.1 320.1 256 320.1C263.9 320.1 271.2 323.9 275.7 330.3L292.9 354.9L339.4 275.9C343.7 268.6 351.6 264.1 360.1 264.1z" />
          </svg>
        </div>
        <div className="w-3/5 p-16">
          <span className="bg-slate-400 w-[35%] h-3.5 block mb-2"></span>
          <span className="bg-slate-400 w-[80%] h-9 block my-6"></span>
          <span className="bg-slate-400 w-[20%] h-7 block my-6"></span>
          <div>
            <span className="bg-slate-400 w-[75%] h-4 block mb-2"></span>
            <span className="bg-slate-400 w-[70%] h-4 block mb-2"></span>
            <span className="bg-slate-400 w-[70%] h-4 block mb-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
