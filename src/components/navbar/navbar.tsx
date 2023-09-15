"use client";
import React, { useEffect, useState } from "react";
import "../navbar/navbar.css";
import Contactbuton from "../contactbuton/contactbuton";
import Link from "next/link";
import { menuRoutes } from "../../constant/constants";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleMenuClick = (index: number) => {
    if (index === activeIndex) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setActiveIndex(index);
      setIsDropdownOpen(false);
      setIsSidebarOpen(false);
      setActiveDropdownIndex(-1);
    }
  };

  const handleDropMenuClick = (index: number) => {
    setActiveDropdownIndex(index);
    setIsDropdownOpen(false);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 728 && window.innerWidth < 1500) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 flex-shrink-0 navbg w-full menubackground z-50`}
    >
      <div className="container">
        <div
          className={`flex align-middle  justify-between md:items-center ${
            isSidebarOpen
              ? "h-full w-[width: 26.875rem]"
              : " md:w-full md:h-[6.875rem]"
          }  `}
        >
          <div className="mx-6 my-8  md:mx-[3rem] md:my-0 w-[6rem] h-[1.875rem] md:w-auto md:h-auto">
            <Image
              src="/./assets/Logos/Kaligon white 1.png"
              alt="AS"
              width={300}
              height={300}
              className="w-[6rem] h-[1.875rem] md:w-auto md:h-auto"
            />
          </div>
          <div className="mx-4 my-6 md:mx-0 md:my-0  ">
            {/* Close Button */}
            {isSidebarOpen && (
              <button
                className="othermenu text-heder_menu-unactive block md:hidden float-right mr-4 mt-4"
                onClick={handleSidebarToggle}
              >
                <Image
                  src="./assets/Other icons/cross.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            )}
            {!isSidebarOpen && (
              <>
                <ul
                  className={`flex-col md:flex-row  md:gap-4 gap-6 xl:gap-7 md:align-middle  nav-menu  md:flex ${
                    isSidebarOpen
                      ? "flex mr-4 mt-14 items-end"
                      : "hidden items-center"
                  }`}
                >
                  {menuRoutes.map((e, i) => (
                    <li
                      key={i}
                      className={`    ${
                        activeIndex === i
                          ? "text-heder_menu-active"
                          : `text-heder_menu-unactive md:block  ${
                              isSidebarOpen
                                ? "  text-base font-normal text-main "
                                : " othermenu md:text-[0.6rem] lg:text-[1rem] "
                            }`
                      } ${
                        isSidebarOpen
                          ? "responsivemenu text-main"
                          : "menu text-[0.6rem] md:text-[1rem]  "
                      }  `}
                    >
                      {activeIndex === i && (
                        <div
                          className={`bg-black w-4 h-4 rounded-full fixed -ml-1 hidden md:block`}
                        ></div>
                      )}
                      <Link
                        href={e?.path}
                        className="relative flex flex-row gap-2"
                        onClick={() => handleMenuClick(i)}
                      >
                        {e.label}
                        {!isSidebarOpen ? (
                          <Image
                            src="./assets/Other icons/dropdown arrow.svg"
                            alt=""
                            width={20}
                            height={20}
                            className={`w-3 md:w-4 lg:w-auto ${
                              e.icon === true ? "block" : "hidden"
                            }`}
                          />
                        ) : (
                          <Image
                            src="./assets/Other icons/dropdown black.svg"
                            alt=""
                            width={20}
                            height={20}
                            className={`w-3 md:w-4 lg:w-auto ${
                              e.icon === true ? "block" : "hidden"
                            }`}
                          />
                        )}
                      </Link>
                      {isDropdownOpen &&
                        activeIndex === i &&
                        e.dropdown &&
                        e.dropdown.length > 0 && (
                          <ul className="md:mt-4 relative md:fixed opacity-1 z-10 w-full md:w-fit flex-wrap h-fit flex i items-start gap-1 p-2 flex-col text-base font-normal dropdownbg">
                            {e.dropdown.map((item, idx) => (
                              <li
                                key={idx}
                                className={`    ${
                                  activeDropdownIndex === idx
                                    ? "text-heder_menu-active text-base"
                                    : `text-heder_menu-unactive md:block text-base  ${
                                        isSidebarOpen
                                          ? "  text-base font-normal text-main "
                                          : " othermenu md:text-[0.6rem] lg:text-[1rem] "
                                      }`
                                } ${
                                  isSidebarOpen
                                    ? "responsivemenu text-main"
                                    : "menu text-[0.6rem] md:text-[1rem]  "
                                }  `}
                              >
                                <Link
                                  onClick={() => handleDropMenuClick(idx)}
                                  href={item.path}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}

                  <li className="w-[9.375rem]">
                    <Contactbuton />
                  </li>
                </ul>

                <button
                  className="othermenu text-heder_menu-unactive md:hidden block mt-4"
                  onClick={handleSidebarToggle}
                >
                  <Image
                    src="./assets/Other icons/burger menu.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </button>
              </>
            )}
          </div>
        </div>
        {isSidebarOpen && (
          <ul
            className={`flex-col md:flex-row  md:gap-4 gap-6 xl:gap-7 md:align-middle  nav-menu  md:flex ${
              isSidebarOpen ? "flex ml-6 mb-6 " : "hidden items-center"
            }`}
          >
            {menuRoutes.map((e, i) => (
              <li
                key={i}
                className={`    ${
                  activeIndex === i
                    ? "text-heder_menu-active"
                    : `text-heder_menu-unactive md:block  ${
                        isSidebarOpen
                          ? "  text-base font-normal text-main "
                          : " othermenu md:text-[0.6rem] lg:text-[1rem] "
                      }`
                } ${
                  isSidebarOpen
                    ? "responsivemenu text-main"
                    : "menu text-[0.6rem] md:text-[1rem]  "
                }  `}
              >
                {activeIndex === i && (
                  <div
                    className={`bg-black w-4 h-4 rounded-full fixed -ml-1 hidden md:block`}
                  ></div>
                )}
                <Link
                  href={e?.path}
                  className="relative flex flex-row gap-2"
                  onClick={() => handleMenuClick(i)}
                >
                  {e.label}
                  {!isSidebarOpen ? (
                    <Image
                      src="./assets/Other icons/dropdown arrow.svg"
                      alt=""
                      width={20}
                      height={20}
                      className={`w-3 md:w-4 lg:w-auto ${
                        e.icon === true ? "block" : "hidden"
                      }`}
                    />
                  ) : (
                    <Image
                      src="./assets/Other icons/dropdown black.svg"
                      alt=""
                      width={20}
                      height={20}
                      className={`w-3 md:w-4 lg:w-auto ${
                        e.icon === true ? "block" : "hidden"
                      }`}
                    />
                  )}
                </Link>
                {isDropdownOpen &&
                  activeIndex === i &&
                  e.dropdown &&
                  e.dropdown.length > 0 && (
                    <ul className="md:mt-4 relative md:fixed opacity-1 z-10 w-full md:w-fit flex-wrap h-fit flex i items-start gap-1 p-2 flex-col text-base font-normal dropdownbg">
                      {e.dropdown.map((item, idx) => (
                        <li
                          key={idx}
                          className={`    ${
                            activeDropdownIndex === idx
                              ? "text-heder_menu-active text-base"
                              : `text-heder_menu-unactive md:block text-base  ${
                                  isSidebarOpen
                                    ? "  text-base font-normal text-main "
                                    : " othermenu md:text-[0.6rem] lg:text-[1rem] "
                                }`
                          } ${
                            isSidebarOpen
                              ? "responsivemenu text-main"
                              : "menu text-[0.6rem] md:text-[1rem]  "
                          }  `}
                        >
                          <Link
                            onClick={() => handleDropMenuClick(idx)}
                            href={item.path}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}

            <li className="mr-4">
              <Contactbuton />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
