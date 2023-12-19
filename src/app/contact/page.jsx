import React from "react";
import Pic from "@/public/pic1.jpg";
import Image from "next/image";
function Contact() {
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
            Get in Touch with StarCorp International
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Have questions or need assistance? Feel free to reach out to our
            dedicated team at StarCorp International. As your reliable
            distributor for FUJIFILM and FAIRTEX products, we are here to
            provide support and information. Contact us today to explore the
            possibilities and discover the excellence that defines StarCorp
            International.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            STARCORP INTERNATIONAL s.r.o
          </h2>
          <div className="w-full text-left">
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Address: Kozácká 276/18, Prague 10 - Vršovice, 101 00, Czech
              Republic
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Company Registration Number: 28866878
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
              Company Tax ID: CZ28866878
            </p>
            <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
              Email: office@starcorpinternational.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
