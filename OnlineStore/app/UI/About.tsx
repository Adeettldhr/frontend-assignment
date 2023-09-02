import React from 'react'
import main from '../assets/picture.png'
import {CiDiscount1} from 'react-icons/ci'
import {GiDeliveryDrone} from 'react-icons/gi'
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const About = () => {
  return (
    <section id="about" className="pt-28">
      <div className="p-4 px-6">
        <div className="flex justify-between py-5">
          <div className="md:text-4xl sm:text-3xl text-xl font-bold py-4 text-[darkcyan]">
            <h1>We provide best</h1>
            <h1>customer experience</h1>
          </div>
          <div className="border-l-4 border-black px-4 flex items-center text-[grey]">
            We ensure our customers have the best shopping experience
          </div>
        </div>
        <div className="flex justify-around py-6 text-[darkcyan]">
          <div className="p-4 px-8 flex flex-col items-center">
            <CiDiscount1 size={100} />
            <h1 className="text-2xl font-bold text-[darkcyan]">
              Special Discount
            </h1>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi
              expedita voluptatem.
            </p>
          </div>
          <div className="p-4 px-8 flex flex-col items-center ">
            <GiDeliveryDrone size={100} />
            <h1 className="text-2xl font-bold text-[darkcyan]">
              Fast Delivery
            </h1>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
              corrupti magnam?
            </p>
          </div>
          <div className="p-4 px-8 flex flex-col items-center">
            <RiMoneyDollarCircleLine size={100} />
            <h1 className="text-2xl font-bold text-[darkcyan]">
              Original Products
            </h1>
            <p className="text-black">
              Lorem ipsum dolor sit amet adipisicing elit. Repellat nihil
              consequatur corporis.
            </p>
          </div>
        </div>
        <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img
              className="w-[500px] mx-auto my-4"
              src={main.src}
              alt="laptop"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#00df9a] font-bold ">ABOUT US</p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Cheers to O-store
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?
              </p>
              <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
