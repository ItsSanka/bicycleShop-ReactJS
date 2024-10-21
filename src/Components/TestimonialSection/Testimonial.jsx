import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../Assets/images";

function Testimonial() {
  return (
    <div className="py-8">
      <div className="headings md:flex md:text-left justify-between items-center pb-6 min-[320px]:block min-[320px]:text-center">
        <h3 className="font-robo text-3xl text-blue-950 font-semibold">
          <span className="text-lg text-black">Customer Stories</span> <br />{" "}
          Our Testimonials
        </h3>
        <button
          type="button"
          href="#"
          className="hover:ease-in-out duration-500 hover:scale-105 rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 md:m-0 min-[320px]:m-auto min-[320px]:mt-2"
        >
          View more <img src={assets.right} alt="play" />
        </button>
      </div>

      <div className="">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            330: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide className="py-4">
            <div className="flex flex-col overflow-hidden shadow-md">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                  </div>

                  <blockquote className="flex-1 mt-8">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      “Never has an electric bike caused more commotion as
                      depending on the number of bikes I rode it through
                      Amsterdam”
                    </p>
                  </blockquote>
                </div>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900 font-pj">
                      Leslie Alexander
                    </p>
                    <p className="mt-0.5 text-sm font-pj text-gray-600">
                      Bike Rider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-4">
            <div className="flex flex-col overflow-hidden shadow-md">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                  </div>

                  <blockquote className="flex-1 mt-8">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      “Never has an electric bike caused more commotion as
                      depending on the number of bikes I rode it through
                      Amsterdam”
                    </p>
                  </blockquote>
                </div>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900 font-pj">
                      Jacob Jones
                    </p>
                    <p className="mt-0.5 text-sm font-pj text-gray-600">
                      Bike Rider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-4">
            <div className="flex flex-col overflow-hidden shadow-md">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                  </div>

                  <blockquote className="flex-1 mt-8">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      “Never has an electric bike caused more commotion as
                      depending on the number of bikes I rode it through
                      Amsterdam”
                    </p>
                  </blockquote>
                </div>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900 font-pj">
                      Jenny Wilson
                    </p>
                    <p className="mt-0.5 text-sm font-pj text-gray-600">
                      Bike Rider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
