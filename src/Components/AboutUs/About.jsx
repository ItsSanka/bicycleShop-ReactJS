import React from "react";
import { assets } from "../Assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faBatteryFull, faMedal } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <section className="py-14 lg:py-24 relative">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                className="w-full rounded-3xl shadow-sm"
                src={assets.about}
                alt="about us"
              />
            </div>
            <div className="xl:pl-[100px] lg:pl-[40px] flex items-center lg:text-left min-[320px]:text-center">
              <div className="data w-full">
                <h2 className="text-3xl lg:text-5xl text-blue-950 font-semibold mb-1 max-lg:text-center relative">
                  About Us
                </h2>
                <h3 className="text-xl text-black font-semibold mb-3">We have been making bicycles for 25 years</h3>
                <p className="font-normal text-md leading-8 text-black max-lg:text-center max-w-2xl mx-auto mb-3">
                  This isn’t a bicycle. This is a soul stirring,
                  bring-a-smile-to-your-face, aerodynamic work of art. Designed
                  to move you through the world without the weight of it. Where
                  your cycling journey begins! As avid cyclists not ourselves,
                  we understand the joy and freedom for a comes from pedaling
                </p>
                <ul className="mb-4">
                    <li className="text-black mb-2"><FontAwesomeIcon icon={faLocationArrow} className="text-blue-950 mr-2"/>GPS Tracking / Anti-Theft</li>
                    <li className="text-black mb-2"><FontAwesomeIcon icon={faBatteryFull} className="text-blue-950 mr-2"/>Supercharged Battery</li>
                    <li className="text-black mb-2"><FontAwesomeIcon icon={faMedal} className="text-blue-950 mr-2"/>5 years warranty</li>
                </ul>
                <button
                  type="button"
                  href="#"
                  className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 lg:m-0 min-[320px]:m-auto min-[320px]:mt-2 hover:ease-in-out duration-500 hover:scale-105"
                >
                  Read More <img src={assets.right} alt="play" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
