import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function BusinessSR() {
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
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem] pt-[110px]">
            Dobrodošli u svet Starcorp International sro - vašeg pouzdanog
            partnera u distribuciji vrhunskih duvanskih proizvoda za vodenu
            lulu. Naša posvećenost pružanju vrhunskog iskustva korisnicima širom
            sveta čini nas vodećim izborom u industriji.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Šta je Nargila?
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Nargila, takođe poznata kao vodena lula ili shisha, tradicionalni je
            uređaj za pušenje koji potiče iz Orijenta. Sastoji se od staklene
            posude ispunjene vodom, cevi koja prolazi kroz vodu, posude za
            duvan, i creva ili creva za pušenje. U procesu pušenja, dim se
            filtrira kroz vodu, pružajući glađe iskustvo od konvencionalnog
            pušenja. Šiša može imati različite oblike, veličine i materijale,
            prilagođavajući se različitim ukusima i preferencijama korisnika.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Šta je Nargila Melasa?
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Nargila melasa predstavlja aromatizovanu smešu napravljenu od
            kombinacije duvana, melase (šećerni sirup) i raznih aroma. Ova
            mešavina omogućava korisnicima da uživaju u bogatim i raznovrsnim
            ukusima tokom pušenja nargile. Melase dodaju slatkoću i aromu
            duvanu, stvarajući jedinstvena iskustva za svakog korisnika.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Kvalitetne Arome za Nargilu
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Paleta aroma za nargilu prožeta je pažljivo odabranim ukusima,
            pružajući nezaboravna iskustva svim ljubiteljima vodene lule. Sa
            visokim standardima kvaliteta, proizvodi su pažljivo formulisani
            kako bi zadovoljili ukuse i zahteve najistančanijih korisnika.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Nargila Melase
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Posebno ističemo vrhunske nargila melase, koje su sinonim za
            kvalitet i autentičnost. Sa bogatim i raznolikim ukusima, melase
            pružaju harmoničan spoj tradicionalnih i inovativnih nota,
            stvarajući neprolazne trenutke uživanja. Ovaj proizvod predstavlja
            savršen dodatak za ljubitelje nargile koji cene vrhunski kvalitet.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BusinessSR;
