"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import enFlag from "../../../public/en.png";
import skFlag from "../../../public/sk.png";
import srFlag from "../../../public/sr.png";
import Image from "next/image";
import logoImg from "@/public/logo.svg";

function Header() {
  const path = usePathname();
  let pathLang = path.slice(path.length - 3);
  let pathPage;
  if (pathLang === "/sr" || pathLang === "/sk") {
    pathPage = path.slice(0, path.length - 2);
  } else {
    pathPage = path;
    pathLang = "/";
  }
  if (pathPage.slice(pathPage.length - 1) !== "/") {
    pathPage = pathPage + "/";
  }
  const [lang, setLang] = React.useState(
    pathLang === "/sr" ? 2 : pathLang === "/sk" ? 1 : 0
  );
  useEffect(() => {
    setLang(pathLang === "/sr" ? 2 : pathLang === "/sk" ? 1 : 0);
  }, [pathLang]);
  const [click, setClick] = React.useState(false);

  const [langClick, setLangClick] = React.useState(false);

  const toggle = () => {
    setClick(!click);
    setLangClick(false);
  };
  const toggleLangClick = () => {
    setLangClick(!langClick);
  };

  const home = ["Home", "Úvod", "Početna"];
  const about = ["About", "O portáli", "O nama"];
  const business = ["Business", "Podnikanie", "Poslovanje"];
  const contact = ["Contact", "Kontakt", "Kontakt"];

  return (
    <header className="w-full h-[80px] sm:h-[100px] bg-light fixed z-[100] shadow-md">
      <div className="w-full h-[80px] sm:h-[100px] display flex items-center justify-between ">
        <Logo pathLang={pathLang} />
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
            <Link
              href={pathLang}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {home[lang]}
            </Link>
            <Link
              href={`/about${pathLang}`}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {about[lang]}
            </Link>
            <Link
              href={`/business${pathLang}`}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {business[lang]}
            </Link>
            <Link
              href={`/contact${pathLang}`}
              className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              {contact[lang]}
            </Link>
            {/* <div className="flex items-center justify-center py-2">
            <Link href={pathPage + "/"}>
              <Image
                src={enFlag}
                alt="langFlg"
                className="px-2 h-[30px] w-auto"
              ></Image>
            </Link>
            <Link href={pathPage + "sk"}>
              <Image
                src={skFlag}
                alt="langFlg"
                className="px-2 h-[30px] w-auto"
              ></Image>
            </Link>
            <Link href={pathPage + "sr"}>
              <Image
                src={srFlag}
                alt="langFlg"
                className="px-2 h-[30px] w-auto"
              ></Image>
            </Link>
          </div> */}{" "}
            <div
              className="group flex items-center justify-center py-3 relative cursor-pointer"
              onClick={toggleLangClick}
            >
              <Image
                src={lang === 2 ? srFlag : lang === 1 ? skFlag : enFlag}
                alt="langFlg"
                className="w-[40px]"
              />
              <div
                className="absolute top-0 flex-col text-sm text-dark  bg-primary/10 ring-1 ring-primary/20 py-3 shadow-md z-10 "
                style={{ display: langClick ? "flex" : "none" }}
              >
                <div className="px-3">
                  <Image
                    src={lang === 2 ? srFlag : lang === 1 ? skFlag : enFlag}
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
                  <Link href={pathPage + "sk"} className="p-3 pb-0 block">
                    <Image src={skFlag} alt="langFlg" className="w-[40px]" />
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
          <Link
            href={pathLang}
            className="mr-2 md:mr-3 lg:mr-4 hover:text-primary  tranisition-all ease duration-200"
          >
            {home[lang]}
          </Link>
          <Link
            href={`/about${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {about[lang]}
          </Link>

          <Link
            href={`/business${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {business[lang]}
          </Link>
          <Link
            href={`/contact${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {contact[lang]}
          </Link>
          <div className="group inline-block ml-2 ml:mx-3 lg:ml-4 relative cursor-pointer h-full ">
            <Image
              src={lang === 2 ? srFlag : lang === 1 ? skFlag : enFlag}
              alt="langFlg"
              className="w-[20px] md:w-[25px] tranisition-all ease duration-200 shadow-2xl"
            />

            <div className="absolute  top-[-12px] left-[-12px] right-[-12px] hidden flex-col text-sm text-dark bg-gradient-to-b bg-[#EFF0F4] ring-primary/10 ring-1  group-hover:flex shadow-md z-10 ">
              <div className="p-3">
                <Image
                  src={lang === 2 ? srFlag : lang === 1 ? skFlag : enFlag}
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
                <Link href={pathPage + "sk"} className="p-3 ">
                  <Image
                    src={skFlag}
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
