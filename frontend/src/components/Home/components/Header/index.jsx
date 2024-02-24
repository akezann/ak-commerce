import video from "../../../../assets/bgLandingPage.mp4";
import bgImage from "../../../../assets/bgHeader.jpg";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const links = [
  {
    category: "men's clothing",
    link: "/products/mens",
  },
  {
    category: "women's clothing",
    link: "/products/womens",
  },
  {
    category: "jewelery",
    link: "jewelery",
  },
  {
    category: "electronics",
    link: "electronics",
  },
];

function index() {
  return (
    <div className="w-full h-full relative ">
      <img
        src={bgImage}
        alt="Your Image"
        class="w-full h-[356px] sm:h-[436px] object-cover brightness-50"
      />
      <div className="flex flex-col gap-4 absolute bottom-[50px] sm:bottom-[130px] left-4 sm:left-20  z-10">
        <div>
          <h1 className="text-white text-2xl font-bold font-serif object-contain">
            We gave you an original. You reinvented it endlessly.
          </h1>
          <p className="text-white m-0">
            This is a sample React webpage with a video background.
          </p>
        </div>
        <Link to={"/products"}>
          <span className="w-48 text-white text-2xl font-serif px-6 py-2 bg-yellow-500 hover:bg-yellow-600 flex  justify-center items-center gap-4 rounded-full">
            Acheter <i class="fas fa-arrow-right text-base"></i>
          </span>
        </Link>
        <div className="flex justify-start items-start gap-2">
          {links.map((item, key) => {
            return (
              <Link
                to={item.link}
                className="text-[13px] text-white font-serif font-normal hover:text-yellow-400 underline"
              >
                {item.category}{"."}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default index;
