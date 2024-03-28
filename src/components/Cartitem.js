import React from 'react'
import { IoClose } from 'react-icons/io5'
import narutoimg from '../assests/naruto.jpeg'
import { useDispatch } from 'react-redux'
import { addtocart, removefromcart, resetcart } from '../redux/slices/Cartslice'

const Cartitem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="2nd-part flex border-b-2 mt-2">
      <div className="w-1/4">
        <img src={item?.image?.data?.attributes?.url} alt="" />
      </div>
      <div className="font-semibold">
        <h1>{item?.title}</h1>
        <h1 className="font-semibold">${item?.price}</h1>
        <div className="plus mt-3 w-[100px] border h-8 flex justify-between items-center bg-gray-200">
          <div
            className="- text-xl cursor-pointer p-1 active:bg-gray-300"
            onClick={() => dispatch(removefromcart(item))}
          >
            -
          </div>
          <div className="">{item?.quantity}</div>
          <div
            className="+ cursor-pointer p-1 active:bg-gray-300"
            onClick={() => dispatch(addtocart(item))}
          >
            +
          </div>
        </div>
        <h1>Subtotal: ${item?.price * item?.quantity}</h1>
      </div>
      <div className="cursor-pointer" onClick={() => dispatch(resetcart(item))}>
        <IoClose />
      </div>
    </div>
  )
}

export default Cartitem
