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
            Welcome to the world of Starcorp International sro - your reliable
            partner in distributing premium tobacco products for hookahs. Our
            commitment to providing an excellent experience to users worldwide
            makes us a leading choice in the industry.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            What is Hookah?
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Hookah, also known as a water pipe or shisha, is a traditional
            smoking device originating from the Orient. It consists of a glass
            container filled with water, a pipe passing through the water,
            tobacco bowls, and hoses or smoking pipes. In the smoking process,
            smoke is filtered through water, providing a smoother experience
            than conventional smoking. Hookahs can come in various shapes,
            sizes, and materials, adapting to different tastes and user
            preferences.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            What is Hookah Molasses?
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Hookah molasses represent a flavored mixture made from a combination
            of tobacco, molasses (sugar syrup), and various flavors. This blend
            allows users to enjoy rich and diverse tastes during hookah smoking.
            Molasses add sweetness and aroma to the tobacco, creating unique
            experiences for each user.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Quality Hookah Flavors
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            The palette of hookah flavors is infused with carefully selected
            tastes, providing unforgettable experiences for all hookah
            enthusiasts. With high-quality standards, the products are
            meticulously formulated to satisfy the tastes and demands of the
            most discerning users.
          </p>
          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            Hookah Molasses
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            We especially highlight premium hookah molasses, synonymous with
            quality and authenticity. With rich and diverse flavors, molasses
            offer a harmonious blend of traditional and innovative notes,
            creating timeless moments of enjoyment. This product represents the
            perfect addition for hookah lovers who appreciate top-notch quality.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Business;
