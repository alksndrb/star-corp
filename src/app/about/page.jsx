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
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem] pt-[110px] text-start">
            Welcome to StarCorp International - Your leading distributor for
            FUJIFILM and FAIRTEX products and equipment.
            <br />
            <br /> Welcome to the world of Starcorp International sro - your
            reliable partner in distributing top-quality tobacco products for
            water pipes. Our dedication to providing an exceptional experience
            to users worldwide makes us the industry&#39;s top choice.
          </p>

          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            FUJIFILM and FAIRTEX
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            Explore the world of cutting-edge technology and performance with
            StarCorp International. As a reliable distributor of FUJIFILM and
            FAIRTEX products and equipment, we bring innovations and quality
            directly to your hands. With a successful track record spanning
            years, we are committed to delivering excellence in every product we
            offer. Discover the perfect blend of reliability and progress with
            StarCorp International.
          </p>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[2rem]">
            As an industry-leading distributor, StarCorp International is a key
            player in providing top-notch FUJIFILM and FAIRTEX products and
            equipment. With a dedication to quality and customer satisfaction,
            we have built a strong reputation over the years. Our experienced
            team ensures that each product meets the highest standards, making
            us the first choice for businesses and individuals seeking
            excellence in photography and sports equipment.
          </p>

          <h2 className="font-semibold p-[1rem] pt-0 sm:pb-[2rem] text-2xl text-center lg:text-3xl sm:w-[70%]">
            HOOKAH MOLASSES
          </h2>
          <p className="text-base px-[1rem] lg:text-xl sm:px-[2rem] pb-[1rem] sm:pb-[6rem]">
            Our company takes pride in delivering high-quality products,
            striving for innovation, and enhancing the user experience. With a
            focus on top brands and products, StarCorp International is a safe
            choice for water pipe enthusiasts worldwide. Thanks to years of
            experience and expertise, StarCorp International is dedicated to
            improving every aspect of the water pipe tobacco industry. Expect
            the highest quality standards, a wide range of products, and a
            commitment to providing exceptional products that satisfy even the
            most refined tastes. Become part of our world of premium tobacco
            products and experience an unparalleled journey with StarCorp
            International.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
