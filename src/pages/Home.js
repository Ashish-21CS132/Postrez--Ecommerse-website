import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Product from '../components/Product'
import { axiosClient } from '../utilis/axiosClient'

const Home = () => {
  const [category, setcategory] = useState(null)
  const [istoppick, settoppick] = useState(null)

  async function fetch() {
    const categoryresponse = await axiosClient('/categories?populate=image')
    const topproductresponse = await axiosClient(
      '/products?filters[istoppicks][$eq]=true&populate=image',
    )
    setcategory(categoryresponse.data.data);
    settoppick(topproductresponse.data.data);
    // console.log('cateprod ', categoryresponse)
    // console.log('topprod ', topproductresponse)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      <Hero />
      <section className="collection container flex-col gap-2 ">
        <div className="info flex flex-col gap-1 text-center mt-10">
          <h1 className="text-2xl font-semibold">Shop by categories</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className=" flex justify-between">
          
          {category?.map(item => 
            <Category key={item.id} item={item} />
          )}
        </div>
      </section>
      <section className="collection-container"></section>

      <section className="collection container center flex-col gap-2 ">
        <div className="info flex flex-col gap-1 text-center mt-10">
          <h1 className="text-2xl font-semibold">Our top picks</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="content flex justify-between">
         {istoppick?.map(item=>(<Product key={item.id} item={item}/>))}
        </div>
      </section>
      <section className="collection-container"></section>
    </div>
  )
}

export default Home
