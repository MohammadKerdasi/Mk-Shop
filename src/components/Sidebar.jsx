import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./../components/CartItem";

import { CartContext } from "./../contexts/CartContext";

import { SidebarContext } from "./../contexts/SidebarContext";


const Sidebar = () => {
  const { itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart,clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full
  shadow-2xl md:w-[45vw] xl:max-w-[30vw] transition-all
  duration-300 z-20 px-4 lg:px-[35px] pb-2`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex
      justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden mt-2">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 mt-4">
        <div className="bg-slate-100 flex w-full justify-between items-center ps-1">
          <div className="text-black uppercase font-semibold">
            <span className="text-black">Total:</span> ${parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 className="  hover:scale-100"/>
          </div>
        </div>
        <Link to='/' className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">View Cart</Link>
        <Link to='/' className="bg-gray-500 flex p-4 justify-center items-center text-white w-full font-medium">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
