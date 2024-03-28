import React from 'react'
import { IoClose } from 'react-icons/io5'
import narutoimg from '../assests/naruto.jpeg'
import Cartitem from './Cartitem'
import { useDispatch, useSelector } from 'react-redux'
import cartslice from '../redux/slices/Cartslice'
import { BsCartX } from 'react-icons/bs'

const Cart = ({ onClose }) => {
  const cart = useSelector((state) => state.cartslice.cart)
  let totalprice = 0
  const iscartempty = cart.length === 0

  cart.forEach((item) => (totalprice += item.price * item.quantity))
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[99] flex float-end">
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30">
        <div className="card-content p-2 w-[320px] bg-white h-[100vh] float-right">
          <div className="1st-part flex justify-between border-b-2 p-2">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            <div className="flex items-center cursor-pointer" onClick={onClose}>
              <IoClose className="text-2xl font-bold" />
              <h1 className="text-xl font-bold">Close</h1>
            </div>
          </div>

          {iscartempty && (
            <div className="center text-9xl">
              <BsCartX />
            </div>
          )}

          {!iscartempty && (
            <>
              <div>
                {cart.map((item) => (
                  <Cartitem key={item.id} item={item} />
                ))}
              </div>

              <div className="3rd-part mt-2 flex justify-between">
                <h1>Total</h1>
                <h1>${totalprice}</h1>
              </div>
              <div className="text-center mt-2">
                <button className="btn-primary">CheckOut Now</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
