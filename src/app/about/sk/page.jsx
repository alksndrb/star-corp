import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function AboutSK() {
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
            Vitajte v StarCorp International
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Preskúmajte svet špičkovej technológie a výkonu s firmou StarCorp
            International. Ako dôveryhodný distribútor produktov a výbavy od
            spoločností FUJIFILM a FAIRTEX prinášame inovácie a kvalitu priamo k
            vám. S úspešnou históriou, ktorá siaha niekoľko rokov do minulosti,
            sme odhodlaní prinášať excelentnosť v každom produkte, ktorý
            ponúkame. Objavte dokonalú kombináciu spoľahlivosti a pokroku s
            firmou StarCorp International.{" "}
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Ako vedúci distribútor v odvetví sme klúčovým hráčom v poskytovaní
            špičkových produktov a výbavy od spoločností FUJIFILM a FAIRTEX. S
            odhodlaním kvality a spokojnosti zákazníkov sme si vybudovali silnú
            povesť. Náš skúsený tím zabezpečuje, že každý produkt spĺňa
            najvyššie normy, čím sme ideálnou voľbou pre podniky a jednotlivcov,
            ktorí hľadajú vynikajúce produkty v oblasti obrazovej a športovej
            výbavy.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutSK;
