import React from "react";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
function Business() {
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
            Welcome to StarCorp International, where innovation meets
            performance in the world of imaging. As your premier distributor, we
            take pride in presenting an extensive range of FUJIFILM products and
            equipment.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM
          </h2>

          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Explore the forefront of imaging technology with our collection of
            FUJIFILM cameras and solutions. From professional-grade cameras
            capturing the minutest details to user-friendly models perfect for
            everyday use, our selection caters to photographers of all levels.
            Discover the art of visual storytelling with FUJIFILM&#39;s
            cutting-edge imaging solutions.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Business;
