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
            Dobrodošli u StarCorp International, gde se inovacija susreće s
            performansama u svetu fotografije. Kao vaš vodeći distributer, s
            ponosom vam predstavljamo širok asortiman FUJIFILM proizvoda i
            opreme.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM
          </h2>

          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Istražite vrhunsku tehnologiju slikanja sa našom kolekcijom FUJIFILM
            kamera i rešenja. Od profesionalnih kamera koje beleže najmanje
            detalje do modela pogodnih za svakodnevnu upotrebu, naša selekcija
            zadovoljava potrebe fotografa svih nivoa. Otkrijte umetnost
            vizuelnog pripovedanja uz najmodernija FUJIFILM rešenja za slikanje.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BusinessSR;
