import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function BusinessCZ() {
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
            Vítejte u StarCorp International, kde se inovace setkává s výkonem
            ve světě fotografie. Jako váš přední distributor s hrdostí
            představujeme široký sortiment produktů a vybavení FUJIFILM.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM
          </h2>

          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Prozkoumejte špičkovou technologii fotografování s naší kolekcí
            kamer a řešení FUJIFILM. Od profesionálních fotoaparátů, které
            zachycují nejmenší detaily, po modely vhodné pro každodenní použití,
            naše selekce uspokojí potřeby fotografů na všech úrovních. Objevte
            umění vizuálního vyprávění s nejmodernějšími řešeními FUJIFILM pro
            fotografování.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BusinessCZ;
