"use client";

import React from "react";
import "./serviccewithpartner.css";
import Contactbuton from "../../components/contactbuton/contactbuton";
import { rdServices } from "../../constant/constants";
import Image from "next/image";

type Props = {};

const RdserviceandPartners = (props: Props) => {
  return (
    <div id="RdserviceandPartners" className="bg-main w-full h-fit  ">
      <Image
        width={2000}
        height={2000}
        src="/./assets/Background BG/bg 2.png"
        className="absolute"
        alt=""
      />
      <div className="relative flex ">
        {/* r&d services */}
        <div className="flex justify-center flex-col items-center gap-6  m-20 md:m-32  p-0 md:p-11  rounded-[1.375rem] shadow-lg bg-main w-fit h-fit">
          <p className="title text-[1.5rem] md:text-[2rem]">R&D Services</p>
          <div className="grid grid-cols-12  gap-3  items-center justify-center ">
            {rdServices.map((e, i) => (
              <div className="col-span-12 lg:col-span-3 relative h-full"  key={i + 1}>
                <div
                 
                  className=" "
                >
                  <div className="flex flex-col justify-between h-full items-center">

                  <Image
                    width={1080}
                    height={1080}
                    src={e.imgPath}
                    className="w-[8rem] h-[8rem]"
                    alt=""
                    />
                  <p className="service-heading">{e.title}</p>
                  <p className="service-contetnt lg:w-[80%]">{e.contetn}</p>
                </div>
                {i === 3 ? "" : <div className="line hidden lg:block right-0 top-0 lg:absolute" > </div>}
                    </div>
              </div>
            ))}
         
          </div>
          <div className="w-[9.375rem]">
          <Contactbuton />
          </div>        </div>
        {/* our partners */}
      </div>
    </div>
  );
};

export default RdserviceandPartners;
