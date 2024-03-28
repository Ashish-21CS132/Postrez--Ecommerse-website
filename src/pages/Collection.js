import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useNavigate, useParams } from 'react-router-dom'
import {axiosClient} from "../utilis/axiosClient";

const Collection = () => {
  const navigate = useNavigate()
  const params=useParams();
  const [product,setproduct]=useState([]);
  const [categoryid,setcategoryid]=useState("");

  async function fetchproducts(){
    const url=params.collectionid ? `/products?populate=image&filters[category][key][$eq]=${params.collectionid}` :
    `/products?populate=image`;

  const response=await axiosClient.get(url);
  // console.log("fetchdatares ",response.data.data);
  setproduct(response.data.data);
  }

  useEffect(()=>{
    setcategoryid(params.collectionid);
    fetchproducts();
  },[params])


  function updatenavigate(e) {
    navigate(`/collection/${e.target.value}`)
  }
  return (
    <div className="mt-4">
      <div className="collection-page container ">
        <div className="upper flex justify-between gap">
          <div className="left flex-[1]">
            <h1 className="text-xl font-bold">Explore All Print and Artwork</h1>
            <p className="">
              India's largest collection of wall posters for your bedroom,
              living room, kids room, kitchen and posters & art prints at
              highest quality lowest price guaranteed.
            </p>
          </div>
          <div className="right flex flex-col flex-[1] text-right ">
            <h1 className="text-xl font-semibold">Sort By</h1>
            <div className="">
              <select name="sort-by" id="sort" className="text-center w-20 ">
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lower mt-8 flex gap-24">
          <div className="left flex-[1]">
            <h1 className="text-xl font-bold">Category</h1>
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex gap-2">
                <input
                  name="category"
                  type="radio"
                  value="tv-shows"
                  id="tv"
                  onChange={updatenavigate}
                  checked={params.collectionid==="tv-shows"}
                />
                <label htmlFor="tv">TV Shows</label>
              </div>
              <div className="flex gap-2">
                <input
                  name="category"
                  type="radio"
                  value="sports"
                  id="spor"
                  onChange={updatenavigate}
                  checked={params.collectionid==="sports"}
                />
                <label htmlFor="spor">Sports</label>
              </div>
              <div className="flex gap-2">
                <input
                  name="category"
                  type="radio"
                  value="anime"
                  id="anim"
                  onChange={updatenavigate}
                  checked={params.collectionid==="anime"}
                />
                <label htmlFor="anim">Anime</label>
              </div>
            </div>
          </div>
          <div className="right flex-[5] ">
            <div className="flex flex-wrap gap-4">
              {product.map((item)=>(<Product key={item.id} item={item} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
