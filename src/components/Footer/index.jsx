"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "@/public/logo.svg";
function Footer() {
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

  const adress = ["Address", "Adresa", "Adresa"];
  const regNum = [
    "Company Registration Number",
    "Číslo Registrácie firmy",
    "Registracioni Broj Kompanije",
  ];
  const taxId = [
    "Company Tax ID",
    "Identifikačné číslo dane firmy",
    "Poreski Broj Kompanije",
  ];

  return (
    <footer className="w-full  bg-light shadow-md">
      <div className="display flex flex-col-reverse sm:flex-row justify-between ">
        <div className=" lg:text-lg font-semibold flex flex-col justify-center text-left pr-[1rem]">
          <p className="text-left pt-[1rem] text-2xl font-semibold pb-[1rem]">
            <span className="font-orb text-primary font-bold">
              Star<span className="text-secondary">Corp</span>
            </span>{" "}
            INTERNATIONAL s.r.o
          </p>
          <p>
            {adress[lang]}: Kozácká 276/18, Prague 10 - Vršovice, 101 00, Czech
            Republic
          </p>
          <p>{regNum[lang]}: 28866878</p>
          <p>{taxId[lang]}: CZ28866878</p>
          <p>Email: office@starcorpinternational.com</p>
        </div>
        <div className="flex justify-center sm:justify-end items-center">
          <Image src={logoImg} className="w-[85%] sm:h-[85%]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
