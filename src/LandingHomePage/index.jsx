import React from 'react'
import { Link } from "react-router-dom";


function index() {
    return (
        <div className='w-screen h-full flex justify-center items-center'>
            <Link to={'/products'}>
                <span className='text-xl text-semibold text-yellow-500 border-1 p-1 px-4 bg-black '>Let's Shop</span>
            </Link>
        </div>
    )
}

export default index
