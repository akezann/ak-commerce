import React from 'react'
import ArrowLeft from '../../../assets/ArrowLeft'
import Share from '../../../assets/Share'
import HeartIcon from '../../../assets/HeartIcon'
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../../redux/favoriteSlice";

function index() {
    const favorite = useSelector((state) => state.favorite.favoriteItems);
    const cart = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch();
    const handleAddFav = (item) => {
        dispatch(addToFavorite(item));
    };

    return (
        <div className='flex flex-col bg-gray-50 w-full h-full p-10 py-20 relative rounded-lg'>
            <div className='flex flex-row h-full'>
                <div className='flex justify-center items-start w-96 h-96 p-2 border-r h-full'
                >
                    <h1>filters</h1>
                </div>
            </div>
        </div>
    )
}

export default index
