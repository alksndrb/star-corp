import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function AboutSR() {
  return (
    <main className="flex flex-col items-center justify-center pt-[80px] sm:pt-[100px] bg-dark">
      <div className="display minH">
        <div className="top h-[200px] w-full bg-light shadow-2xl relative">
          <div className="w-full h-full absolute z-[-5]">
            <Image src={Pic} alt="" className="h-full object-cover" />
          </div>
          <div className="w-full h-full absolute z-[-1] bg-gradient-to-t sm:bg-gradient-to-r from-30% sm:from-0% from-dark/70 to-light/20" />
        </div>
        <div className="bottom-alt w-full bg-light shadow-2xl flex flex-col items-center">
          <h2 className="font-semibold p-[1rem] sm:pb-[2rem] text-2xl text-center lg:text-3xl pt-[100px] sm:w-[70%]">
            Dobrodošli u StarCorp International
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Istražite svet najsavremenije tehnologije i performansi uz StarCorp
            International. Kao pouzdani distributer FUJIFILM i FAIRTEX proizvoda
            i opreme, donosimo inovacije i kvalitet direktno do vaših ruku. Sa
            uspešnim radom koji traje godinama, posvećeni smo isporuci
            izvrsnosti u svakom proizvodu koji nudimo. Otkrijte savršenu
            kombinaciju pouzdanosti i napretka uz StarCorp International.
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Kao vodeći distributer u industriji, StarCorp International je
            ključni igrač u pružanju vrhunskih FUJIFILM i FAIRTEX proizvoda i
            opreme. S posvećenošću kvalitetu i zadovoljstvu kupaca, stvorili smo
            snažnu reputaciju tokom godina. Naš iskusni tim osigurava da svaki
            proizvod zadovoljava najviše standarde,
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutSR;
