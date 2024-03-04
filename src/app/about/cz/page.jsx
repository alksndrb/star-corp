import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function AboutCZ() {
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
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem] pt-[110px] text-start w-full">
            Vítejte ve společnosti StarCorp International - Vašem předním
            distributoru pro produkty a vybavení FUJIFILM a FAIRTEX.
          </p>

          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM a FAIRTEX
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Objevte svět špičkové technologie a výkonu s firmou StarCorp
            International. Jako spolehlivý distributor produktů a vybavení
            FUJIFILM a FAIRTEX přinášíme inovace a kvalitu přímo do vašich
            rukou. S úspěšnou historií sahající několik let se zavazujeme k
            poskytování excelence ve všech našich produktech. Objevte dokonalou
            kombinaci spolehlivosti a pokroku s firmou StarCorp International.
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Jako přední distributor v odvětví je StarCorp International klíčovým
            hráčem v poskytování prvotřídních produktů a vybavení FUJIFILM a
            FAIRTEX. S oddaností kvalitě a spokojenosti zákazníků jsme si
            vybudovali silnou reputaci během let. Náš zkušený tým zajistí, že
            každý produkt splňuje nejvyšší standardy, čímž se stáváme první
            volbou pro podniky a jednotlivce hledající excelenci v oblasti
            vybavení pro fotografii a sport.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutCZ;
