import React from "react";
import ShopCartElement from "./ShopCartElement";
import { useSelector } from "react-redux";

function ShopCart() {
  const cart = useSelector((state: any) => state.cart.cartItems);

  console.log(cart);
  return (
    <div className="flex h-full w-full rounded-lg bg-[#fafafa] p-8 flex-col gap-12">
      <p className="text-lg font-600 text-black-400">Check your cart :</p>
      <div className="flex flex-col gap-4">
        {cart.map((item, key) => {
          return (
            <ShopCartElement
              image={item.image}
              price={item.price}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShopCart;
