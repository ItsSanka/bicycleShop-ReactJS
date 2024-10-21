import React from "react";
import { assets, bike_list } from "../Assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Product() {
  return (
    <>
      <div className="headings md:flex md:text-left justify-between items-center pb-10 min-[320px]:block min-[320px]:text-center">
        <h3 className="font-robo text-3xl text-blue-950 font-semibold">
          <span className="text-lg text-black">Best products in 2024</span>{" "}
          <br /> Featured Products
        </h3>
        <button
          type="button"
          href="#"
          className="hover:ease-in-out duration-500 hover:scale-105 rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 md:m-0 min-[320px]:m-auto min-[320px]:mt-2"
        >
          View more <img src={assets.right} alt="play" />
        </button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
        {bike_list.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-lg p-3 rounded-2xl group relative bg-white"
            >
              <div className="absolute z-10 right-6 top-4 border bg-orange-100 w-10 h-10 rounded-full flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-blue hover:text-black duration-500 cursor-pointer hover:scale-105"
                  icon={faCartShopping}
                />
              </div>
              <img
                src={item.image}
                alt="dog"
                className="rounded-2xl pb-3 w-100 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-blue-950 font-bold text-xl">
                  {item.heading}
                </h3>
                <p className="text-neutral-600 text-2xl font-bold">
                  $ {item.price}
                </p>
              </div>
              <div className="flex gap-1 mb-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
