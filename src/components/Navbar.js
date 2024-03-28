import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import Cart from './Cart'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [opencart, setopencart] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className="navbar h-[80px] bg-[var(--primary-text-color)] z-[99] sticky top-0">
        <div className="container navbar-container flex justify-between items-center text-white">
          <div className="left ">
            <ul className="flex gap-4">
              <Link to="/collection/tv-shows">
                <li className="inline-block p-4 hover-link">TV SHOWS</li>
              </Link>
              <Link to="/collection/anime">
                <li className="inline-block p-4 hover-link">ANIME</li>
              </Link>
              <Link to="/collection/sports">
                <li className="inline-block p-4 hover-link">SPORTS</li>
              </Link>
            </ul>
          </div>
          <div className="middle absolute left-[50%] translate-x-[-50%]">
            <div
              className="text-2xl font-semibold cursor-pointer active:text-purple-300"
              onClick={() => navigate('/')}
            >
              POSTERZ
            </div>
          </div>
          <div className="right">
            <div className="cart relative p-6 ">
              <BsCart2
                className="text-[1.6rem] hover-link"
                onClick={() => setopencart(!opencart)}
              />
              <span className="absolute w-[18px] h-[18px] top-[-4p] right-[-2p] bg-[var(--accent-color)] text-white text-[0.6rem] rounded-[20px]">
                99
              </span>
            </div>
          </div>
        </div>
      </div>
      {opencart && <Cart onClose={() => setopencart(false)} />}
      {/* {console.log(opencart)} */}
    </>
  )
}

export default Navbar
