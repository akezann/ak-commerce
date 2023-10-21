import React from 'react'
import ArrowLeft from '../../../assets/ArrowLeft'
import Share from '../../../assets/Share'
import HeartIcon from '../../../assets/HeartIcon'
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../../redux/favoriteSlice";

function index({ data, setShowModal }) {
  const favorite = useSelector((state) => state.favorite.favoriteItems);
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const handleAddFav = (item) => {
    dispatch(addToFavorite(item));
  };

  return (
    <div className='flex flex-col bg-gray-50 w-full h-full p-10 py-20 relative rounded-lg'>
      <div className='border-b border-gray-200 lg:rounded-t-lg flex justify-between items-center w-full bg-gray-50 absolute top-0 left-0 px-10 py-4'>
        <span onClick={() => { setShowModal(false) }} className='flex justify-center gap-2 bg-yellow-800 cursor-pointer  p-2 rounded-full bg-opacity-5'><ArrowLeft /></span>
        <div className='flex flex-row gap-2'>
          <span className='flex justify-center gap-2 bg-yellow-800 cursor-pointer p-2 rounded-full bg-opacity-5' onClick={() => { handleAddFav(data.id) }}>
            <HeartIcon
              color={favorite.includes(data.id) ? "#f59e0b" : "#f59e0b"}
              liked={favorite.includes(data.id)} />
          </span>
          <span className='flex justify-center gap-2 bg-yellow-800 cursor-pointer p-2 rounded-full bg-opacity-5'>
            <Share />
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center w-96 h-96 p-2 border border-yellow-500 rounded-lg'>
        <img
          src={data.image}
          alt={data.title}
          className="w-72 h-72 object-contain rounded-[4px] mix-blend-multiply rounded-[8px]  transform scale-100 hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div></div>
    </div>
  )
}

export default index
