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
      <div className="flex flex-col align-middle justify-center items-center mt-16 mb-10 gap-3 mx-10 md:mx-10">
        <div className="flex md:flex-row justify-between items-center   gap-8 flex-wrap flex-col">
          <div className="foter-logo">
            <Image width={1080} height={1080} className="w-fit" src="/./assets/Logos/Kaligon logo color.png" alt="" />
          </div>
          <div className="flex flex-row gap-4 footer-menu items-center flex-wrap justify-center">
            {footerMenus.map((e, i) => (
              <Link key={i} href={e.path}>
                {e.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-1">
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/facebook.svg" alt="" />
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/twitter.svg" alt="" />
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/linkedin.svg" alt="" />
            <Image width={1080} height={1080} className="w-fit h-fit" src="/./assets/Social Icons/instagram.svg" alt="" />
          </div>
        </div>
        <div className="h-[0.0625rem] bg-[#474747] rounded-[1.875rem] w-full"></div>
        <div className="footer-copyright flex flex-row justify-between w-full">
          <div>Copyright © 2023 Kaligon Company. All rights reserved.</div>
          <div className="flex gap-2 underline justify-center">
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
