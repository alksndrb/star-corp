import React from "react";

import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function ContactSK() {
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
            Spojte sa s firmou StarCorp International
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Máte otázky alebo potrebujete pomoc? Neváhajte kontaktovať náš
            oddaný tím v spoločnosti StarCorp International. Ako váš spoľahlivý
            distribútor pre produkty od spoločností FUJIFILM a FAIRTEX sme tu,
            aby sme vám poskytli podporu a informácie. Kontaktujte nás ešte
            dnes, aby ste objavili možnosti a preskúmali excelentnosť, ktorá
            definuje spoločnosť StarCorp International.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            STARCORP INTERNATIONAL s.r.o
          </h2>
          <div className="w-full text-left">
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Adresa: Kozácká 276/18, Praha 10 - Vršovice, 101 00, Česká
              republika
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Číslo registrácie firmy: 28866878
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Identifikačné číslo dane firmy: CZ28866878
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
              E-mail: office@starcorpinternational.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactSK;
