import React from "react";
import { assets } from "../Assets/images";

function Banner() {
  return (
    <>
      <div className="row banner bg-banner-pattern bg-no-repeat lg:bg-cover lg:text-right rounded-2xl pt-5 min-[320px]:bg-auto min-[320px]:text-center">
        <div className="col-lg-6 col-md-12 col-xs-12 image flex justify-center">
          <img className="img-fluid" src={assets.bicycle_2} alt="bike" />
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 heading flex lg:items-end flex-col justify-center gap-3 py-5 xl:pr-28 min-[320px]:pr-3 min-[320px]:items-center">
          <h1 className="[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-white text-blue-950 font-bold xl:text-7xl lg:text-5xl min-[320px]:text-4xl">
            One more ride
          </h1>
          <h2 className="text-blue-950 font-bold xl:text-5xl lg:text-4xl min-[320px]:ctext-3xl [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-white">
            Thousands more fun!
          </h2>
          <p className="[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-white text-black-500 text-1sm font-medium xl:w-3/5 min-[320px]:w-full">
            This isn’t a bicycle. This is a soul stirring,
            bring-a-smile-to-your-face, aerodynamic work of art. Designed to
            move you through the world without the weight of it. Where your
            cycling journey begins! As avid cyclists not ourselves, we
            understand the joy and freedom for a comes from pedaling
          </p>
          <div className="links flex gap-3 my-4">
            <button
              type="button"
              href="#"
              className="hover:ease-in-out duration-500 hover:scale-105 bg-[#fceed4] rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2"
            >
              View Intro <img src={assets.play} alt="play" />
            </button>
            <button
              type="button"
              href="#"
              className="rounded-full text-white bg-blue-950 py-2 px-6 font-normal hover:ease-in-out duration-500 hover:scale-105"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
