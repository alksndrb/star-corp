import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function About() {
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
            Welcome to StarCorp International
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Step into a world of technological sophistication and athletic
            excellence with StarCorp International, your premier distributor for
            FUJIFILM and FAIRTEX products and equipment. Our journey began in
            2009, and since then, we've established ourselves as a reliable
            source for cutting-edge imaging solutions and top-tier sports gear.{" "}
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Established as a leading distributor in the industry, StarCorp
            International has been a key player in providing top-tier FUJIFILM
            and FAIRTEX products and equipment. With a commitment to quality and
            customer satisfaction, we have built a strong reputation over the
            years. Our experienced team ensures that every product meets the
            highest standards, making us the go-to choice for businesses and
            individuals seeking excellence in imaging and sports equipment. Our
            commitment to quality and customer satisfaction has fueled our
            success, making us a trusted name in the industry.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
