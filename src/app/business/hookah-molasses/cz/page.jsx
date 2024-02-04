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
            Vítejte ve světě společnosti Starcorp International sro - vašeho
            spolehlivého partnera v distribuci prvotřídních tabákových výrobků
            určených pro vodní dýmky. Naše závazky poskytovat výjimečné zážitky
            uživatelům po celém světě nás činí vedoucí volbou v odvětví.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Co je to nargila?
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Nargila, známá také jako vodní dýmka nebo shisha, je tradiční
            kouřící zařízení pocházející z Orientu. Skládá se z skleněné nádoby
            naplněné vodou, trubky, která prochází vodou, tabákových mís a hadic
            nebo kouřících trubek. V procesu kouření je kouř filtrován skrze
            vodu, poskytujíc hladší zážitek než konvenční kouření. Nargile může
            mít různé tvary, velikosti a materiály, přizpůsobujíc se různým
            chutím a preferencím uživatele.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Co je to nargila melasa?
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Nargila melasa je ochucená směs vyrobená kombinací tabáku, melasy
            (cukrového sirupu) a různých příchutí. Tato směs umožňuje uživatelům
            vychutnat si bohaté a různorodé chutě během kouření nargile. Melasa
            přidávají sladkost a vůni tabáku, vytvářeje jedinečné zážitky pro
            každého uživatele.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Kvalitní příchutě na nargile
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Paleta příchutí na nargile je proplétána pečlivě vybranými chutěmi,
            poskytující nezapomenutelné zážitky všem milovníkům vodní dýmky. S
            vysokými standardy kvality jsou produkty pečlivě formulovány tak,
            aby uspokojily chuťové pohárky a požadavky nejnáročnějších
            uživatelů.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Nargila melasa
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Zvláště zdůrazňujeme prvotřídní nargilové melasy, které jsou
            synonymem pro kvalitu a autentičnost. S bohatými a různorodými
            chutěmi melasy nabízí harmonickou směs tradičních a inovativních
            not, vytvářeje nezaměnitelné okamžiky potěšení. Tento produkt
            představuje dokonalý doplněk pro milovníky nargile, kteří oceňují
            prvotřídní kvalitu.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BusinessCZ;
