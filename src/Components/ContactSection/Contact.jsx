import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 items-start gap-16 mx-auto py-10 font-[sans-serif]">
        <div>
          <h1 className="text-blue-950 text-3xl font-extrabold">
            Get in touch
          </h1>
          <p className="text-sm  text-black mt-4">
            We're just one click away to help you take your product
            from great to incredible. <br /> Fill in the form to share more details
            about your choice.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    className="text-blue-950"
                    icon={faEnvelope}
                  />
                </div>
                <a href="mailto:samople" className="text-blue-950 text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:ease-in-out duration-500 hover:scale-105">
                <a href="link">
                  <FontAwesomeIcon
                    className="text-blue-950"
                    icon={faFacebook}
                  />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:ease-in-out duration-500 hover:scale-105">
                <a href="link">
                  <FontAwesomeIcon
                    className="text-blue-950"
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:ease-in-out duration-500 hover:scale-105">
                <a href="link">
                  <FontAwesomeIcon
                    className="text-blue-950"
                    icon={faInstagram}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-black focus:bg-transparent"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-950 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
