import React from "react";
import { assets } from "../Assets/images";

const BannerTwo = () => {
  return (
    <div>
      <>
        <div className="row banner bg-banner-pattern-yellow bg-no-repeat bg-cover rounded-2xl">
          <div className="col-lg-6 col-md-6 col-xs-12 heading flex items-start flex-col justify-center gap-3 py-5 xl:pl-28 min-[320px]:pl-3">
            <h1 className="text-blue-950 font-bold xl:text-7xl lg:text-5xl min-[320px]:text-4xl">
              E-Bike
            </h1>
            <h2 className="text-blue-950 font-bold xl:text-5xl lg:text-4xl ctext-3xl">
              It's Easy To Get Around
            </h2>
            <p className="text-black-500 text-1sm font-medium">
              Fast, fun, and functional. That’s what a boost of electric power{" "}
              <br />
              means for your ride. Whether for recreation or transportation.
            </p>
            <div className="links flex gap-3 my-4">
              <button
                type="button"
                href="#"
                className="rounded-full text-white bg-blue-950 py-2 px-6 font-normal hover:ease-in-out duration-500 hover:bg-black hover:scale-105"
              >
                Explore Now
              </button>
              <button
                type="button"
                href="#"
                className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 hover:ease-in-out duration-500 hover:scale-105"
              >
                View Intro <img src={assets.play} alt="play" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 image flex justify-center">
            <img src={assets.bicycle_3} alt="women" />
          </div>
        </div>
      </>
    </div>
  );
};

export default BannerTwo;
