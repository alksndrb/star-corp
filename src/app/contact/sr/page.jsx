import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function ContactSR() {
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
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem] pt-[100px] block w-full text-start">
            Stupite u Kontakt sa StarCorp International
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            STARCORP INTERNATIONAL s.r.o
          </h2>
          <div className="w-full text-left">
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              ČEŠKA Kancelarija – Adresa: Kozácká 276/18 Praha 10 - Vršovice,
              101 00 Češka
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Skladište u Češkoj – Adresa: Super Storage Za Papirnou, 170 00
              Praha, Češka
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              MAĐARSKA Kacelarija – Adresa: Budapesti út 34, 6728 Segedin,
              Mađarska
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              SRBIJA Kancelarija – Adresa: Slobodna Zona Novi Sad, Bajci
              Zilinskog 51, 21000 Novi Sad, Srbija
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Registracioni br. kompanije: 28866878,
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Poreski br. kompanije: CZ28866878,
            </p>

            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              <span className="text-top inline-block contactMailLarge">
                Email: &nbsp;
                <br /> <br /> <br />
              </span>
              <span className="inline-block contactMailSmall">
                Email: &nbsp;
              </span>
              <span className="inline-block ">
                <a
                  href={"mailto:office@starcorpinternational.com"}
                  className="contactLink"
                >
                  office@starcorpinternational.com
                </a>
                <br />
                <a
                  href={"mailto:starcorp.internationalsro@gmail.com"}
                  className="contactLink"
                >
                  starcorp.internationalsro@gmail.com
                </a>
                <br />
                <a
                  href={"mailto:business@starcorpinternational.com"}
                  className="contactLink"
                >
                  business@starcorpinternational.com
                </a>
              </span>
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
              Kontakt Telefon:{" "}
              <a href={`tel:+420 739 533 251`} className="contactLink">
                +420 739 533 251
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactSR;
