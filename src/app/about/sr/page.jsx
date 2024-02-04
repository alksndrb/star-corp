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
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem] pt-[110px] text-start">
            Dobrodošli u StarCorp International - Vašeg vodećeg distributera za
            FUJIFILM i FAIRTEX proizvode i opremu.
            <br />
            <br /> Dobrodošli u svet Starcorp International sro - vašeg
            pouzdanog partnera u distribuciji vrhunskih duvanskih proizvoda za
            vodenu lulu. Naša posvećenost pružanju vrhunskog iskustva
            korisnicima širom sveta čini nas vodećim izborom u industriji.
          </p>

          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM i FAIRTEX
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Istražite svet najsavremenije tehnologije i performansi uz StarCorp
            International. Kao pouzdani distributer FUJIFILM i FAIRTEX proizvoda
            i opreme, donosimo inovacije i kvalitet direktno do vaših ruku. Sa
            uspešnim radom koji traje godinama, posvećeni smo isporuci
            izvrsnosti u svakom proizvodu koji nudimo. Otkrijte savršenu
            kombinaciju pouzdanosti i napretka uz StarCorp International.
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Kao vodeći distributer u industriji, StarCorp International je
            ključni igrač u pružanju vrhunskih FUJIFILM i FAIRTEX proizvoda i
            opreme. S posvećenošću kvalitetu i zadovoljstvu kupaca, stvorili smo
            snažnu reputaciju tokom godina. Naš iskusni tim osigurava da svaki
            proizvod zadovoljava najviše standarde, čineći nas prvim izborom za
            poslovne subjekte i pojedince koji traže izvrsnost u oblasti opreme
            za fotografisanje i sportske opreme.
          </p>

          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            MELASA
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Naša kompanija se ponosi pružanjem visokokvalitetnih proizvoda,
            težimo inovacijama i unapređenju korisničkog iskustva. Sa fokusom na
            vrhunske brendove i proizvode, StarCorp International predstavlja
            siguran izbor za ljubitelje vodene lule širom sveta.
            <br />
            <br /> Zahvaljujući dugogodišnjem iskustvu i stručnosti, StarCorp
            International posvećen je unapređenju svakog aspekta industrije
            duvana za vodenu lulu. Očekujte najviši standard kvaliteta, širok
            asortiman proizvoda i posvećenost pružanju izuzetnih proizvoda koji
            će zadovoljiti i najistančanije ukuse. Postanite deo našeg sveta
            vrhunskih duvanskih proizvoda i doživite neponovljivo iskustvo sa
            StarCorp International sro.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutSR;
