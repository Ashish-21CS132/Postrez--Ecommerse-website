import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import creditimg from '../assests/creditcardicons.png'

const Footer = () => {
  return (
    <div className="mt-12 p-6 bg-slate-200">
      <div className="footer flex justify-between container">
        <div className="followus">
          <h1 className="font-bold text-xl">FOLLOW US</h1>
          <div className="link flex felx-col gap-4 mt-4">
            <FaInstagram className="text-blue-700" />
            <FaFacebook className="text-blue-700" />
            <FaXTwitter />
            <MdEmail />
          </div>
        </div>
        <div className="company ">
          <h1 className="font-bold text-xl">COMPANY</h1>
          <h1 className="text-gray-400">Contact Us</h1>
          <h1 className="text-gray-400">Privacy Policy</h1>
          <h1 className="text-gray-400">Return And Exchange</h1>
          <h1 className="text-gray-400">Term And Condition</h1>
        </div>
      </div>
      <div className="center flex-col mt-4">
        <div className="w-1/5">
          <img src={creditimg} alt="card-img" />
        </div>
        <h1 className="text-xl font-bold text-gray-400">CopyRight 2024</h1>
      </div>
    </div>
  )
}

export default Footer
