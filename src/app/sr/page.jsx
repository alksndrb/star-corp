import React from "react";
import logoImg from "@/public/logo.svg";
import { GravityUiArrowRight } from "../../components/Icons/ArrowRight";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
import Pic2 from "@/public/pic2.jpg";
import Pic3 from "@/public/pic3.jpg";
import Pic0 from "@/public/pic0.jpg";
import Pic4 from "@/public/pic4.jpg";
import Hookah from "@/public/hookah.jpg";
import Fujifilm from "@/public/Fujifilm.png";
import Fairtex from "@/public/Fairtex.png";
import Link from "next/link";
function HomeSR() {
  return (
    <main className="flex flex-col items-center justify-center pt-[80px] sm:pt-[100px] bg-dark">
      <div className="display">
        <div className="top h-[350px] sm:h-[500px] object-fill w-full bg-light shadow-2xl flex relative flex-col-reverse justify-end sm:flex-row ">
          <div className="w-full h-full absolute z-[-5]">
            <Image src={Pic} alt="" className="h-full object-cover" />
          </div>
          <div className="w-full h-full absolute z-[-1] bg-gradient-to-t sm:bg-gradient-to-r from-30% sm:from-0% from-dark/70 to-light/20" />
          <div className="sm:w-[50%] flex justify-center items-center">
            <h1 className="text-light font-semibold text-2xl text-center sm:mt-[-100px] lg:text-3xl sm:text-left p-[1rem] sm:pl-[3rem]">
              Vaš vodeći distributer za FUJIFILM i FAIRTEX proizvode i opremu
            </h1>
          </div>
          <div className="p-[1rem] flex h-[30%] sm:h-auto sm:w-[50%] justify-center ">
            <Image src={logoImg} alt="" className="sm:mt-[-100px]" />
          </div>
        </div>
        {/* Welcome */}
        <div className="left h-auto  sm:h-[500px] w-full bg-light flex flex-col-reverse justify-end sm:flex-row">
          <div className="sm:w-[60%] sm:mt-[100px] mb-[70px] flex flex-col items-center">
            <h2 className="font-semibold p-[1rem] text-2xl text-center lg:text-3xl md:pb-[30px]">
              Dobro došli{" "}
              <span className="font-orb text-primary font-bold">
                Star<span className="text-secondary">Corp</span>
              </span>{" "}
              International
            </h2>
            <h3 className="text-base px-[1rem] lg:text-xl sm:px-[2rem]">
              Kao vodeći distributer u industriji, StarCorp International je
              ključni igrač u pružanju vrhunskih FUJIFILM i FAIRTEX proizvoda i
              opreme. Posvećeni kvalitetu i zadovoljstvu kupaca, stvorili smo
              snažnu reputaciju tokom godina.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-start ">
              <Link
                href={`/about/sr`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Saznajte više o nama <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image src={Pic0} alt="" className="h-full object-cover" />
          </div>
        </div>
        {/* Hookah */}
        <div className="right sm:h-[500px] w-full bg-light flex flex-col sm:flex-row">
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image
              src={Hookah}
              alt=""
              className="h-full object-cover object-bottom"
            />
          </div>
          <div className="mb-[85px] flex flex-col items-center sm:w-[60%] sm:mt-[100px] ">
            <h2 className="text-2xl font-semibold p-[1rem] text-center lg:text-3xl md:pb-[30px]">
              Nargila Melasa
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              Sa visokim standardima kvaliteta, proizvodi su pažljivo
              formulisani kako bi zadovoljili ukuse i zahteve najistančanijih
              korisnika.
            </h3>
            <div className="p-[1rem] w-full flex sm:p-[2rem] justify-end">
              <Link
                href={`/business/hookah-molasses/sr`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Saznajte više
                <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </div>
        {/* FujiFilm */}
        <div className="left h-auto  sm:h-[500px] w-full bg-light flex flex-col-reverse justify-end sm:flex-row">
          <div className="sm:w-[60%] sm:mt-[100px] mb-[70px] flex flex-col items-center">
            <h2 className="font-semibold p-[1rem] text-2xl text-center lg:text-3xl md:pb-[30px]">
              FUJIFILM
            </h2>
            <h3 className="text-base px-[1rem] lg:text-xl sm:px-[2rem]">
              Otkrijte umetnost vizuelnog pripovedanja uz najmodernija FUJIFILM
              rešenja za slikanje.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-start ">
              <Link
                href={`/business/fujifilm/sr`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Saznajte više
                <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image
              src={Pic2}
              alt=""
              className="h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Fairtex */}
        <div className="right sm:h-[500px] w-full bg-light flex flex-col sm:flex-row">
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image
              src={Pic3}
              alt=""
              className="h-full object-cover object-top"
            />
          </div>
          <div className="mb-[85px] flex flex-col items-center sm:w-[60%] sm:mt-[100px] ">
            <h2 className="text-2xl font-semibold p-[1rem] text-center lg:text-3xl md:pb-[30px]">
              FAIRTEX Sports Gear
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              Od rukavica do trenerske opreme, FAIRTEX je vaš pouzdani saputnik
              ka postizanju vrhunskih sportskih rezultata.
            </h3>
            <div className="p-[1rem] w-full flex sm:p-[2rem] justify-end">
              <Link
                href={`/business/fairtex/sr`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Saznajte više
                <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </div>
        {/* Partners */}
        <div className="left lg:h-[500px] w-full bg-light flex flex-col-reverse justify-end sm:flex-row">
          <div className="w-full mt-[100px] flex flex-col items-center">
            <h2 className="font-semibold text-2xl lg:text-3xl">
              Naši partneri
            </h2>
            <div className="px-[2rem] grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 sm:gap-10 mb-[100px] ">
              <Image
                src={Fujifilm}
                alt=""
                className="sm:h-[80%] object-contain"
              />
              <Image
                src={Fairtex}
                alt=""
                className="sm:h-[80%] object-contain"
              />
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="bottom sm:h-[400px] w-full bg-light flex flex-col sm:flex-row">
          <div className=" sm:h-full sm:w-[40%] ">
            <Image src={Pic4} alt="" className="h-full object-cover " />
          </div>
          <div className="sm:w-[60%] sm:mt-[100px] flex flex-col items-center">
            <h2 className="font-semibold text-2xl p-[1rem] text-center font-semi lg:text-3xl md:pb-[30px]">
              Stupite u Kontakt sa StarCorp International{" "}
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              Imate pitanja ili vam je potrebna pomoć? Slobodno se obratite
              našem posvećenom timu u StarCorp International.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-end">
              <Link
                href={`/contact/sr`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Kontaktirajte nas <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeSR;
