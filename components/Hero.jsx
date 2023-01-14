import React from "react";
import ppapp from "../public/ppapp.png";
import Image from "next/image";
import Heading from "./Heading";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="lg:py-36 md:py-24 py-48 lg:mt-8 flex flex-wrap ">
      <div className="max-md:h-screen">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left p-5 mx-auto lg:pl-16 max-sm:mb-20">
            <Heading title="Protecting Peoples Places" />
            <br></br>
            <p className="text-2xl text-white py-6 tracking-tight">
              Learn more about our mission <span className="underline decoration-darkBlue italic tracking-tightest">today</span>!{" "}
            </p>
            <br></br>
            <div className="flex justify-center md:justify-start">
              <button
                className="bg-blue-900 text-white rounded-full px-12 py-2 mr-4 hover:scale-105 shadow-xl"
                onClick={() => alert("Coming soon!")}
              >
                <AiFillApple className="inline-block mr-2 lg:text-3xl text-2xl" />
                App Store
              </button>
              <button
                className="bg-blue-900 text-white rounded-full px-12 py-2  hover:scale-105 shadow-xl"
                onClick={() => alert("Coming soon!")}
              >
                <FaGooglePlay className="inline-block mr-2 lg:text-2xl" />
                Play Store
              </button>
            </div>
          </div>
          <div className="mx-auto overflow-hidden"> 
            <Image src={ppapp} alt="app screenshot" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
