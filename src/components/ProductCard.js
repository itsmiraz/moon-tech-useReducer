import React from "react";
import { toast } from "react-hot-toast";
import { BiListPlus } from "react-icons/bi";
import { useProducts } from "../Context/PrductProvider";
import { actionTypes } from "../State/ProductState/actionTypes";

const ProductCard = ({ product, productfromCart }) => {

  const { dispatch } = useProducts()

  const onAddtoCart = () => {
    toast.success('Added to cart')
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
  }
  const removeFromCart = () => {

    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product._id
  })
}

return (
  <div
    className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
    key={product._id}
  >
    {
      productfromCart && <button onClick={removeFromCart}  className="absolute top-0 right-2 text-4xl rotate-45 hover:cursor-pointer">+</button>
    }
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold' onClick={onAddtoCart}>
          Add to cart
        </button>
        <button
        title='Add to wishlist'
        // onClick={dispatch({ type: actionTypes.ADD_TO_WHISHLIST, payload: product})}
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div >
  );
};

export default ProductCard;
