import { useEffect } from "react";
// import bgImage from "../../../../assets/bgHeader.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData, setLoading } from "../../../../redux/data";

import { fetchData } from "../../../../utils/fakestoreService";

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
    link: "/products/jewelery",
  },
  {
    category: "electronics",
    link: "/products/electronics",
  },
];

function index() {
  const dispatch = useDispatch();

  const getProducts = async (category) => {
    dispatch(setLoading(true));
    try {
      const response = await fetchData(
        category ? `/products/category/${category}` : "/products"
      );
      dispatch(addData(response));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="w-full h-full relative ">
      <img
        src={
          // "https://images.pexels.com/photos/7545220/pexels-photo-7545220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          "https://images.pexels.com/photos/11952303/pexels-photo-11952303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="Your Image"
        className="w-full h-[412px] sm:h-[586px] object-cover brightness-50"
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
          <span
            onClick={() => {
              getProducts();
            }}
            className="w-48 text-white text-2xl font-serif px-6 py-2 bg-yellow-500 hover:bg-yellow-600 flex  justify-center items-center gap-4 rounded-full"
          >
            Acheter <i className="fas fa-arrow-right text-base"></i>
          </span>
        </Link>
        <div className="flex justify-start items-start gap-2">
          {links.map((item, key) => {
            return (
              <Link
                to={item.link}
                className="text-[13px] text-white font-serif font-normal hover:text-yellow-400 underline"
                onClick={() => {
                  getProducts(item.category);
                }}
              >
                {item.category}
                {"."}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default index;
