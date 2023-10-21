import React, { useState, useRef, useEffect } from "react";
import RateStar from "../../../assets/RateStar";
import HeartIcon from "../../../assets/HeartIcon";
import formatPrice from "../../../utils/formatPrix";
import Modal from "../../../common/Modal";
import ProductDetails from '../ProductDetails'

// redux
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../../redux/favoriteSlice";

function ProductCard({ data }) {
  const favorite = useSelector((state) => state.favorite.favoriteItems);
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const handleAddFav = (item) => {
    dispatch(addToFavorite(item));
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(true);
  };

  const modalContentRef = useRef();

  const handleClickOutside = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    if (showModal)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'unset'
  }, [showModal])

  return (
    <div className="flex justify-start items-center bg-white flex-col max-w-[277px]  h-96 gap-1 hover:shadow-lg rounded-b-[8px] duration-200 p-2 sm:max-w-xs">
      <div className="w-full h-3/5 relative cursor-pointer p-4 bg-gray-100 rounded-[8px]" onClick={toggleModal}>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain rounded-[4px] mix-blend-multiply  rounded-[8px] transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <span
          onClick={() => {
            handleAddFav(data.id);
          }}
          className={`flex justify-center items-center absolute top-2 right-2 text-gray-200 bg-gray-500 ${favorite.includes(data.id) ? "bg-opacity-30" : "bg-opacity-40"
            } rounded-[4px] p-[2px]`}
        >
          <HeartIcon
            color={favorite.includes(data.id) ? "#FFA500" : "#F0F8FF"}
            liked={favorite.includes(data.id)}
          />
        </span>
      </div>
      <div className="flex flex-col w-full h-1/3 p-2 gap-2 relative">
        <div>
          <p className="text-sm font-bold m-0 w-40 truncate">{data.title}</p>
          <div className="flex flex-col gap-0">
            <p className="text-sm m-0 w-full line-clamp-2 text-slate-600	">
              {data.description}
            </p>
            <span className="text-2xl font-bold text-black relative">
              {`${formatPrice(data.price)}`}
              <span className="text-lg  absolute t-1">$</span>
            </span>
          </div>
          <p className="flex flex-row justify-center items-center gap-1 absolute top-2 right-1 text-xs font-semibold px-1 rounded-md m-0">
            <RateStar />
            {data.rating.rate}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span onClick={toggleModal} className="text-sm underline cursor-pointer w-full text-end text-yellow-500 hover:text-yellow-600 duration-200">
            More details {">"}
          </span>
        </div>
      </div>
      {showModal ? (
        <Modal showModal={showModal} handleClickOutside={handleClickOutside}>
          <div className="bg-white min-w-[100%] h-screen relative lg:min-w-[1000px] lg:h-[800px] rounded-lg" ref={modalContentRef}>
            <ProductDetails data={data} setShowModal={setShowModal} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default ProductCard;
