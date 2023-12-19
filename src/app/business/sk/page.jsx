import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function BusinessSK() {
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
            Vitajte v StarCorp International LLC, kde sa inovácie stretávajú s
            výkonom vo svete obrazov a športu. Ako váš hlavný distribútor, s
            hrdosťou vám predstavujeme široký sortiment FUJIFILM a FAIRTEX
            produktov a výbavy.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Preskúmajte špičkovú technológiu obrazu s našou kolekciou FUJIFILM
            kamier a riešení. Od profesionálnych fotoaparátov, ktoré zachytávajú
            najmenšie detaily, po jednoduchšie modely ideálne na každodenné
            používanie, naša selekcia uspokojuje potreby fotografov na každej
            úrovni. Objavte umenie vizuálneho vyprávania s najmodernejšími
            riešeniami pre fotografie od FUJIFILM.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FAIRTEX Športové Vybavenie
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Zvýšte svoje športové skúsenosti s FAIRTEX-om, známym svojím
            vysokovýkonným športovým vybavením. Či už ste profesionálny
            športovec alebo nadšenec do fitnesu, naša starostlivo vybraná
            selekcia zahŕňa vybavenie, ktoré spĺňa najvyššie štandardy kvality a
            odolnosti. Od rukavíc po tréningové vybavenie, FAIRTEX je vaším
            spoľahlivým spoločníkom na dosahovanie vrcholových športových
            výkonov.
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            V StarCorp International chápeme dôležitosť poskytovania našim
            zákazníkom produktov najvyššej kvality, ktoré sú v súlade s ich
            vášňami. Preskúmajte náš katalóg produktov a zažite spojenie
            inovácií, spoľahlivosti a výnimočnosti v každom FUJIFILM a FAIRTEX
            produkte.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BusinessSK;
