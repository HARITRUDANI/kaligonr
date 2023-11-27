"use client";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Contactbuton from "../components/contactbuton/contactbuton";
import "./mainPage.css";
import About from "./about/page";
import ContectUs from "./contact/page";
import RdserviceandPartners from "./servieswithpartners/page";
import Partners from "../components/partners/partners";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-main flex items-center justify-center h-full w-full ">
        <div className="absolute">
          <Image
            src="/./assets/Background BG/header bg 1.png"
            width={2000}
            height={2000}
            className="w-fit h-fit"
            alt="AS"
          />
        </div>

        <div className="relative flex md:justify-between items-center md:flex-row flex-col-reverse  mt-5 md:mt-24 lg:mt-10   ">
          <div className=" md:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start  align-middle m-10  md:ml-[5rem]  md:mt-10  ">
            <p className="mainpage-content-one text-[1.875rem] md:text-[2.375rem] lg:text-[3.375rem]  ">
              Infinet{" "}
              <span className="mainpage-content-one-sub text-[1.875rem] md:text-[3.375rem]">
                solutions{""}
              </span>
              <span>,</span>
              <br />
              <span className="mainpage-content-one text-[1.875rem] md:text-[2.375rem] lg:text-[3.375rem] ">
                one{" "}
                <span className="mainpage-content-one-sub text-[1.875rem] md:text-[3.375rem]">
                  source
                </span>{" "}
              </span>
            </p>
            {/* <p className="mainpage-content-two mt-4 text-[0.875rem] md:text-[1rem]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of <br />{" "}
              {`letters, as opposed to using 'Content here`}
            </p> */}
            <div className="mt-4 w-[9.375rem]">
              <Contactbuton />
            </div>
          </div>
          <div className=" w-full md:w-1/2 mt-24  md:mt-24 ">
            <Image
              height={500}
              width={500}
              className=" w-full  "
              src="/./assets/Project image/full images with line/hero image 2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <About />
      <RdserviceandPartners />
      <Partners />
      <ContectUs />
    </>
  );
}
