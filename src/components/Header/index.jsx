"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import enFlag from "../../../public/en.png";
import czFlag from "../../../public/cz.png";
import srFlag from "../../../public/sr.png";
import Image from "next/image";
import logoImg from "@/public/logo.svg";
import { GravityUiArrowDown } from "../../components/Icons/ArrowDown";
import { GravityUiArrowUp } from "../../components/Icons/ArrowUp";
function Header() {
  const path = usePathname();
  let pathLang = path.slice(path.length - 3);
  let pathPage;
  if (pathLang === "/sr" || pathLang === "/cz") {
    pathPage = path.slice(0, path.length - 2);
  } else {
    pathPage = path;
    pathLang = "/";
  }
  if (pathPage.slice(pathPage.length - 1) !== "/") {
    pathPage = pathPage + "/";
  }
  const [lang, setLang] = React.useState(
    pathLang === "/sr" ? 2 : pathLang === "/cz" ? 1 : 0
  );
  useEffect(() => {
    setLang(pathLang === "/sr" ? 2 : pathLang === "/cz" ? 1 : 0);
  }, [pathLang]);
  const [click, setClick] = React.useState(false);

  const [businessClick, setBusinessClick] = React.useState(false);

  const [langClick, setLangClick] = React.useState(false);

  const toggle = () => {
    setClick(!click);
    setLangClick(false);
    setBusinessClick(false);
  };
  const toggleLangClick = () => {
    setLangClick(!langClick);
  };
  const toggleBusinessClick = () => {
    setBusinessClick(!businessClick);
  };

  const home = ["Home", "Úvod", "Početna"];
  const about = ["About", "O nás", "O nama"];
  const business = ["Business", "Obchod", "Poslovanje"];
  const hookah = ["Hookah Molasses", "Nargila Melasa", "Nargila Melasa"];
  const contact = ["Contact", "Kontakt", "Kontakt"];

  return (
    <header className="w-full h-[80px] sm:h-[100px] bg-light fixed z-[100] shadow-md">
      <div className="w-full h-[80px] sm:h-[100px] display flex items-center justify-between ">
        <Logo pathLang={pathLang} />
        {/* mobile drop down button */}
        <button className="inline:block sm:hidden z-50" onClick={toggle}>
          <div className="w-12 h-12 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span
                className="absolute top-6 left-0 inline-block w-full h-1 bg-secondary  rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(-45deg) translateY(0)"
                    : "rotate(0deg) translateY(15px)",
                }}
              >
                &nbsp;
              </span>
              <span
                className="absolute top-6 left-0  inline-block w-full h-1 bg-secondary  rounded transition-all ease duration-200"
                style={{
                  opacity: click ? 0 : 1,
                }}
              >
                &nbsp;
              </span>
              <span
                className="absolute top-6 left-0  inline-block w-full h-1 bg-secondary  rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(45deg) translateY(0)"
                    : "rotate(0deg) translateY(-15px)",
                }}
              >
                &nbsp;
              </span>
            </div>
          </div>
        </button>
        {/* --- Mobile nav --- */}
        <nav
          className="m-0 w-[100vw] navbarH bg-light absolute top-[80px] 
          transition-all ease duration-300  text-2xl capitalize flex flex-col justify-between"
          style={{
            left: click ? "0" : "-100vw",
          }}
        >
          <div className="flex flex-col">
            {/* Home */}
            <Link
              href={pathLang}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {home[lang]}
            </Link>
            {/* About */}
            <Link
              href={`/about${pathLang}`}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {about[lang]}
            </Link>
            {/* Business */}
            <div className="w-[90%] mx-auto py-2 text-center border-b border-dark/50">
              <div onClick={toggleBusinessClick}>
                {business[lang]}
                <GravityUiArrowDown
                  style={{ display: businessClick ? "none" : "inline" }}
                />
                <GravityUiArrowUp
                  style={{ display: businessClick ? "inline" : "none" }}
                />
              </div>
              <div
                className="flex-col text-dark"
                style={{ display: businessClick ? "flex" : "none" }}
              >
                <Link
                  href={`/business/hookah-molasses/${pathLang}`}
                  className=" mx-auto text-center text-[20px]"
                  onClick={toggle}
                >
                  {hookah[lang]}
                </Link>
                <Link
                  href={`/business/fujifilm${pathLang}`}
                  className=" mx-auto text-center text-[20px]"
                  onClick={toggle}
                >
                  FUJIFILM
                </Link>
                <Link
                  href={`/business/fairtex${pathLang}`}
                  className=" mx-auto text-center text-[20px]"
                  onClick={toggle}
                >
                  FAIRTEX
                </Link>
              </div>
            </div>
            {/* Contact */}
            <Link
              href={`/contact${pathLang}`}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {contact[lang]}
            </Link>{" "}
            {/* lang selector */}
            <div
              className="group flex items-center justify-center py-3 relative cursor-pointer"
              onClick={toggleLangClick}
            >
              <Image
                src={lang === 2 ? srFlag : lang === 1 ? czFlag : enFlag}
                alt="langFlg"
                className="w-[40px]"
              />
              <div
                className="absolute top-0 flex-col text-sm text-dark  bg-primary/10 ring-1 ring-primary/20 py-3 shadow-md z-10 "
                style={{ display: langClick ? "flex" : "none" }}
              >
                <div className="px-3">
                  <Image
                    src={lang === 2 ? srFlag : lang === 1 ? czFlag : enFlag}
                    alt="langFlg"
                    className="w-[40px]"
                  />
                </div>
                {lang != 0 && (
                  <Link href={pathPage + "/"} className="p-3 pb-0 block">
                    <Image src={enFlag} alt="langFlg" className="w-[40px]" />
                  </Link>
                )}
                {lang != 1 && (
                  <Link href={pathPage + "cz"} className="p-3 pb-0 block">
                    <Image src={czFlag} alt="langFlg" className="w-[40px]" />
                  </Link>
                )}
                {lang != 2 && (
                  <Link href={pathPage + "sr"} className="p-3 pb-0 block">
                    <Image src={srFlag} alt="langFlg" className="w-[40px]" />
                  </Link>
                )}
              </div>
            </div>{" "}
          </div>
          {/* --- Logo at the bottom of mobile nav --- */}
          <div className="h-[25vh] flex justify-center items-center">
            <Image src={logoImg} alt="" className="h-[20vh]" />
          </div>
        </nav>
        {/* --- */}
        <nav className="w-max hidden sm:flex uppercase text-base lg:text-xl font-semibold items-center">
          {/* Home */}
          <Link
            href={pathLang}
            className="mr-2 md:mr-3 lg:mr-4 hover:text-primary  tranisition-all ease duration-200"
          >
            {home[lang]}
          </Link>
          {/* About */}
          <Link
            href={`/about${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {about[lang]}
          </Link>
          {/* Business */}
          <div className="group inline-block mx-2 md:mx-3 lg:mx-4 relative cursor-pointer h-full ">
            {business[lang]}
            <GravityUiArrowDown className="inline" />
            <div className="absolute  left-[-12px] right-[-12px] pt-[2px] top-[-2px] hidden flex-col text-dark bg-gradient-to-b bg-[#EFF0F4] ring-primary/10 ring-1  group-hover:flex shadow-md z-10 ">
              <div className="pl-3">
                {business[lang]}
                <GravityUiArrowDown className="inline" />
              </div>
              <Link
                className="text-center capitalize pt-2 text-[15px] hover:text-primary"
                href={`/business/hookah-molasses${pathLang}`}
              >
                {hookah[lang]}
              </Link>
              <Link
                className="text-center pt-2 text-[15px] hover:text-primary"
                href={`/business/fujifilm${pathLang}`}
              >
                fujifilm
              </Link>
              <Link
                className="text-center pt-2 pb-1 text-[15px] hover:text-primary"
                href={`/business/fairtex${pathLang}`}
              >
                FAIRTEX
              </Link>
            </div>
          </div>
          {/* Contact */}
          <Link
            href={`/contact${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {contact[lang]}
          </Link>
          {/* lang selector */}
          <div className="group inline-block ml-2 ml:mx-3 lg:ml-4 relative cursor-pointer h-full ">
            <Image
              src={lang === 2 ? srFlag : lang === 1 ? czFlag : enFlag}
              alt="langFlg"
              className="w-[20px] md:w-[25px] tranisition-all ease duration-200 shadow-2xl"
            />

            <div className="absolute  top-[-12px] left-[-12px] right-[-12px] hidden flex-col text-sm text-dark bg-gradient-to-b bg-[#EFF0F4] ring-primary/10 ring-1  group-hover:flex shadow-md z-10 ">
              <div className="p-3">
                <Image
                  src={lang === 2 ? srFlag : lang === 1 ? czFlag : enFlag}
                  alt="langFlg"
                  className="w-[20px] md:w-[25px] ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                />
              </div>
              {lang != 0 && (
                <Link href={pathPage + "/"} className="p-3">
                  <Image
                    src={enFlag}
                    alt="langFlg"
                    className="group w-[20px] md:w-[25px] ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                  />
                </Link>
              )}
              {lang != 1 && (
                <Link href={pathPage + "cz"} className="p-3 ">
                  <Image
                    src={czFlag}
                    alt="langFlg"
                    className=" w-[20px] md:w-[25px] ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                  />
                </Link>
              )}
              {lang != 2 && (
                <Link href={pathPage + "sr"} className="p-3">
                  <Image
                    src={srFlag}
                    alt="langFlg"
                    className="w-[20px] md:w-[25px] ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                  />
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
