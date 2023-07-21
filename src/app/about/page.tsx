"use client";
import React from "react";
import Contactbuton from "../../components/contactbuton/contactbuton";
import "./about.css";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className="w-full h-fit bg-main flex justify-center align-middle items-center  "
    >
      <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-20 gap-8 md:gap-16  items-center justify-between w-full align-middle container ">
        <div className="gap-2  md:gap-4 flex flex-col  m-auto align-middle w-full  pl-2 md:p-0 md:w-1/2">
          <p className="abou-title text-[1.5rem] md:text-[2rem] ">About us</p>
          <p className="about-heading text-[1rem] ">from concept to product </p>
          <p className="about-content text-sm">
            Kaligon is helping entrepreneurs go from concept to product since
            2015.
          </p>
          <p className="about-content ttext-sm">
            With hundreds of successful projects and 5 strong partnerships,
            Kaligon <br /> is one of Israel’s leading-edge technologies
            development compnies.
          </p>

          <div className="">
            <p className="about-subtitle ttext-sm">OUR DEPARTMENTS</p>
            <span className="about-content ttext-sm">
              {" "}
              Creative | CodeX (Software) | Electronics (Hardware)
            </span>
          </div>
          <Contactbuton />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            width={1080}
            height={1080}
            className="w-full md:w-full m-auto "
            src="/././assets/Project image/full images with line/about us image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
