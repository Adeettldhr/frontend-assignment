import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import logo1 from "app/assets/adidas.png";
import logo2 from "app/assets/armani.png";
import logo3 from "app/assets/boss.png";
import logo4 from "app/assets/champion.png";
import logo5 from "app/assets/chanel.png";
import logo6 from "app/assets/converse.png";
import logo7 from "app/assets/dockers.png";
import logo8 from "app/assets/fila.png";
import logo9 from "app/assets/nike.png";
import logo10 from "app/assets/puma.png";

import Typed from "react-typed";

const Home = () => {
      const brandLogos = [
        { src:  logo1.src , alt: "Logo 1" },
        { src:  logo2.src , alt: "Logo 2" },
        { src:  logo3.src , alt: "Logo 3" },
        { src: logo4.src , alt: "Logo 4" },
        { src:  logo5.src , alt: "Logo 5" },
        { src: logo6.src , alt: "Logo 6" },
        { src:  logo7.src , alt: "Logo 7" },
        { src:  logo8.src , alt: "Logo 8" },
        { src:  logo9.src , alt: "Logo 9" },
        { src:  logo10.src , alt: "Logo 10" },
      ];
  return (
    <section id="home" className="pt-24">
      <div>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[darkcyan]">
            Welcome to
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={["O-STORE", "E-SHOP", "SHOPIFY"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          className="max-w-full"
        >
          <div
            className="relative mx-auto"
            style={{ height: "70vh", width: "95vw" }}
          >
            <img src={image1.src} alt="Image 1" className="object-contain" />
            <div className="absolute inset-0 m-8 sm:m-28 md:m-48 lg:m-56 xl:m-64">
              <p className="text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                nisi debitis? Unde commodi illum esse nemo odit? Harum dolorum,
                quibusdam, ipsa voluptates veniam adipisci aspernatur ullam rem
                quae aperiam atque, nemo exercitationem.
              </p>
              <button className="bg-[darkcyan] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                Shop Now
              </button>
            </div>
          </div>
          <div
            className="relative mx-auto"
            style={{ height: "70vh", width: "95vw" }}
          >
            <img src={image2.src} alt="Image 2" className="object-contain " />
            <div className="absolute inset-0 m-8 sm:m-28 md:m-48 lg:m-56 xl:m-64">
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                nisi debitis? Unde commodi illum esse nemo odit? Harum dolorum,
                quibusdam, ipsa voluptates veniam adipisci aspernatur ullam rem
                quae aperiam atque, nemo exercitationem.
              </p>
              <button className="bg-[darkcyan] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                Shop Now
              </button>
            </div>
          </div>
          <div
            className="relative mx-auto"
            style={{ height: "70vh", width: "95vw" }}
          >
            <img src={image3.src} alt="Image 3" className="object-contain" />
            <div className="absolute inset-0 m-8 sm:m-28 md:m-48 lg:m-56 xl:m-64">
              <p className="text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                nisi debitis? Unde commodi illum esse nemo odit? Harum dolorum,
                quibusdam, ipsa voluptates veniam adipisci aspernatur ullam rem
                quae aperiam atque, nemo exercitationem.
              </p>
              <button className="bg-[darkcyan] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                Shop Now
              </button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="p-4 px-6">
        <h1 className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[darkcyan]">
          Brands
        </h1>
        <div className="flex py-3 overflow-x-auto">
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="object-contain h-28 mx-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
