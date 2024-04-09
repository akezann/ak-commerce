import { useState } from "react";
import ProductCard from "../ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { clearFavorite } from "../../../redux/favoriteSlice";

import Button from "../../../common/Button";

function index() {
  const favorite = useSelector((state) => state.favorite.favoriteItems);
  const productdata = useSelector((state) => state.productdata.data);
  const searchValueReducer = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();

  const [data, setData] = useState(productdata);

  return (
    <div className="w-full px-8 py-8 justify-center items-dtart flex-row">
      {favorite.length > 0 ? (
        <div className="flex flex-wrap justify-start flex-row gap-4">
          <Button
            styleClass="rounded-full text-sm font-semibold p-2 px-4  cursor-pointer bg-opacity-75 hover:underline "
            onClick={() => {
              dispatch(clearFavorite());
            }}
          >
            clear Favorites
          </Button>
        </div>
      ) : null}

      {data && favorite.length > 0 ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1.5 p-2">
          {data
            .filter((item) => {
              if (favorite.length > 0) return favorite.includes(item.id);
            })
            .filter((item) => {
              if (searchValueReducer !== "")
                return (
                  item.title.includes(searchValueReducer) &&
                  item.title.toLowerCase().includes(searchValueReducer)
                );
              return item;
            })
            .map((data, key) => {
              return <ProductCard key={key} data={data} />;
            })}
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <p className="text-xl font-400">
            There is no favorites. !<i class="fa fa-heart "></i>
            <i class="fa fa-heart rotate-180"></i>!
          </p>
        </div>
      )}
    </div>
  );
}

export default index;
