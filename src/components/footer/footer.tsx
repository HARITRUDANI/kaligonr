"use client";
import React from "react";
import "./footer.css";
import Link from "next/link";
import { footerMenus } from "../../constant/constants";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-main flex items-center justify-center h-fit w-full ">
      <div className="flex flex-col align-middle justify-center items-center mt-16 mb-6 gap-3 mx-10 md:mx-10">
        <div className="flex md:flex-row justify-between items-center   gap-8 flex-wrap flex-col">
          <div className="foter-logo">
            <Image width={1080} height={1080} className="w-fit" src="/./assets/Logos/Kaligon logo color.png" alt="" />
          </div>
          <div className="flex flex-row gap-8 md:gap-4 footer-menu items-center flex-wrap justify-center">
            {footerMenus.map((e, i) => (
              <Link key={i} href={e.path}>
                {e.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-5 md:gap-2">
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/facebook.svg" alt="" />
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/twitter.svg" alt="" />
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/linkedin.svg" alt="" />
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/instagram.svg" alt="" />
          </div>
        </div>
        <div className="h-[0.0625rem] bg-[#474747] rounded-[1.875rem] w-full"></div>
        <div className="footer-copyright flex flex-col md:flex-row justify-between align-middle  md:w-full text-[0.9rem] md:text-base font-normal md:font-medium w-[370px]  mt-3 ">
          <div className="md:ml-0 mx-auto">Copyright © 2023 Kaligon Company. All rights reserved.</div>
          <div className="flex gap-2 underline justify-center mt-3 md:mt-0 text-[0.9rem] md:text-base font-normal md:font-medium">
            <Link href={""}>Privacy Policy </Link>
            <span className="w-[1px] bg-white"></span>
            <Link href={""}>Terms of use</Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
