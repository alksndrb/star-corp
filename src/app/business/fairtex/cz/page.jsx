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
            Vítejte ve StarCorp International, kde se inovace setkává s výkonem
            ve světě sportu. Jako váš přední distributor s hrdostí představujeme
            široký sortiment produktů a vybavení FAIRTEX.
          </p>

          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FAIRTEX
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Zvýšte své sportovní zážitky s FAIRTEX-em, známým svým
            vysokovýkonným sportovním vybavením. Bez ohledu na to, zda jste
            profesionální sportovec nebo fitness nadšenec, naše pečlivě vybraná
            kolekce zahrnuje vybavení, které splňuje nejvyšší standardy kvality
            a odolnosti. Od boxerských rukavic po trenérské vybavení, FAIRTEX je
            vaším spolehlivým průvodcem k dosažení vrcholových sportovních
            výsledků.
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            V StarCorp International si uvědomujeme důležitost poskytování našim
            zákazníkům výrobků vrcholné kvality, které ladí s jejich vášněmi.
            Prozkoumejte náš katalog produktů a zažijte spojení inovací,
            spolehlivosti a excelence v každém výrobku FAIRTEX.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BusinessCZ;
