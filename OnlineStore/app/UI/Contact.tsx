import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="pt-28">
      <div className="p-4 px-6 bg-black">
        <div className="w-full py-16 text-white px-4">
          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Want tips & tricks to optimize your flow?
              </h1>
              <p>Sign up to our store and stay up to date.</p>
            </div>
            <div className="my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input
                  className="p-3 flex w-full rounded-md text-black"
                  type="email"
                  placeholder="Enter Email"
                />
                <button className="bg-[darkcyan] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                  Notify Me
                </button>
              </div>
              <p>
                We care about the protection of your data. Read our{" "}
                <span className="text-[darkcyan]">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-6 px-4 grid lg:grid-cols-3 gap-8 ">
        <div>
          <h1 className="w-full text-3xl font-bold text-[darkcyan]">O-Store</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6 text-[darkcyan]">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[darkcyan]">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[darkcyan]">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[darkcyan]">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[darkcyan]">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
