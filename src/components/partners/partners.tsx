"use client";
import React from "react";
import "./partners.css";
import Contactbuton from "../contactbuton/contactbuton";
import { parnerDetailes, parnertimage } from "../../constant/constants";
import Image from "next/image";
type Props = {

};

const Partners = (props: Props) => {

  return (
    <div>
      <div className="w-full bg-main flex flex-col justify-center align-middle items-center py-6">
        <div
          className=" flex justify-center flex-col  items-center gap-10 pb-16 md:pb-32 h-fit md:mt-36"
          id="Partners"
        >
          <p className="title text-[1.5rem] md:text-[2rem]">Our Partners</p>
          <div className="flex justify-center align-middle items-center flex-col gap-6">
            <div className="flex flex-col items-center justify-center   gap-16">
              <div className="flex  flex-row w-full flex-wrap  justify-center items-center">
                {parnertimage.map((e, i) => (
                  <div
                    className=" md:w-1/4 w-1/2 h-[60px] md:h-[100px] flex   my-auto"
                    key={i}
                  >
                    <Image
                      width={1080}
                      height={1080}
                      alt=""
                      key={i}
                      className="w-fit md:w-32 md:h-32 p-2 m-auto object-contain"
                      src={e.path}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="partnerts-content mt-4 md:mt-8">
              Want to be partnership with us?
            </p>
            <Contactbuton />
          </div>
        </div>
        <Image
          width={2000}
          height={2000}
          src="/./assets/Background BG/bg 4.png"
          className="absolute"
          alt="bg4"
        />


<div className="flex flex-col gap-20 flex-wrap  md:container h-full " >
          {parnerDetailes.map((detail, index) => (
            <div  key={detail.id} id={detail.id}>
            <div
              className={`flex ${
                index % 2 === 0
                  ? "md:flex-row-reverse flex-col-reverse"
                  : "md:flex-row flex-col-reverse"
              } justify-center align-middle gap-10 md:gap-20 items-center  `}
              key={index}
            
            >
              {detail.imgee && (
                <Image
                  width={2000}
                  height={2000}
                  key={index}
                  src={detail.imgee}
                  className="absolute"
                  alt="bg3"
                />
              )}

              <div className=" w-[90%]  md:w-1/2 h-full gap-4 flex flex-col items-start flex-wrap">
                <p className="title text-[1.5rem] md:text-[2rem]">
                  {detail.title}
                </p>
                <p className="content">{detail.fp}</p>
                <p className="content">{detail.sp}</p>
                <p className="content">{detail.tp}</p>
                <p className="content">{detail.fop}</p>
              </div>

              <div className="w-[100%] md:w-1/2 m-auto h-full z-20">
                <Image
                  width={1080}
                  height={1080}
                  src={detail.img}
                  className=" w-[95%] m-auto
                 h-full"
                  alt=""
                />
              </div>
            </div>
            </div>
          ))}
         
        </div>

      </div>
    </div>
  );
};

export default Partners;
