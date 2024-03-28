import React, { useEffect, useState } from 'react'
import narutoimg from '../assests/naruto.jpeg'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../utilis/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removefromcart } from '../redux/slices/Cartslice'

const Productdetails = () => {
  const params = useParams()
  const productkey = params.productid
  const [product, setproduct] = useState(null)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartslice.cart)
  const quantity = cart.find((item) => item.key === productkey)?.quantity || 0

  async function fetch() {
    const productresponse = await axiosClient.get(
      `/products?filters[key][$eq]=${productkey}&populate=image`,
    )
    setproduct(productresponse.data.data[0])
  }

  useEffect(() => {
    fetch()
  }, [productkey])

  return (
    <div className="mt-8">
      <div className="container flex">
        <div className="image">
          <div className="img-container w-[400px] ">
            <img
              src={product?.attributes?.image?.data?.attributes?.url}
              alt="img"
            />
          </div>
        </div>
        <div className="details flex-col gap-10">
          <h1 className="text-xl font-bold">{product?.attributes?.title}</h1>
          <h1 className="mt-2 font-bold">${product?.attributes?.price}</h1>
          <h1 className="mt-2">{product?.attributes?.decs}</h1>
          <div className="plus mt-3 w-[100px] border h-8 flex justify-between items-center  bg-gray-200">
            <div
              className="- text-xl p-1 cursor-pointer active:bg-gray-300"
              onClick={() => dispatch(removefromcart(product))}
            >
              -
            </div>
            <div className="">{quantity}</div>
            <div
              className="+ cursor-pointer p-1 active:bg-gray-300"
              onClick={() => dispatch(addtocart(product))}
            >
              +
            </div>
          </div>
          <div
            className="btn-primary mt-3"
            onClick={() => dispatch(addtocart(product))}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails
