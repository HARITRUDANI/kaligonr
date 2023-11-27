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
      <div className="flex flex-col-reverse md:flex-row mb-0  mt-24 md:mt-10 md:mt-20 gap-8 md:gap-16  items-center justify-between w-full align-middle container ">
        <div className="gap-2  md:gap-4 flex flex-col  m-auto align-middle w-full  pl-2 md:p-0 md:w-1/2">
          <p className="abou-title text-[1.5rem] md:text-[2rem] ">About us</p>
          <p className="about-heading text-[1rem] ">from concept to product </p>
          <p className="about-content text-sm">
            Empowering entrepreneurs from concept to product since 2015, Kaligon
            is your partner in technological innovation.
          </p>
          <p className="about-content ttext-sm">
            Kaligon, at the forefront of Israel<span>&apos;</span>s technology
            landscape,
            <br /> has pioneered development with hundreds of successful
            projects and forged five robust partnerships, solidifying its
            position as a leading-edge technology development company.
          </p>

          <div className="">
            <p className="about-subtitle ttext-sm my-2">OUR DEPARTMENTS</p>
            <span className="about-content ttext-sm">
              {" "}
              Creative | CodeX (Software) | Electronics (Hardware)
            </span>
          </div>
          <div className="w-[9.375rem]">
            <Contactbuton />
          </div>
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
