import React, { startTransition } from "react";
import logoImg from "@/public/logo.svg";
import { GravityUiArrowRight } from "../components/Icons/ArrowRight";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
import Pic2 from "@/public/pic2.jpg";
import Pic3 from "@/public/pic3.jpg";
import Pic0 from "@/public/pic0.jpg";
import Pic4 from "@/public/pic4.jpg";
import Fujifilm from "@/public/Fujifilm.png";
import Fairtex from "@/public/fairtex.png";
function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px] bg-dark">
      <div className="display">
        <div className="top h-[500px] object-fill w-full bg-lightgray shadow-2xl flex relative flex-col-reverse justify-end sm:flex-row ">
          <div className="w-full h-full absolute z-[-5]">
            <Image src={Pic} alt="" className="h-full object-cover" />
          </div>
          <div className="w-full h-full absolute z-[-1] bg-gradient-to-t sm:bg-gradient-to-r from-30% sm:from-0% from-dark/70 to-light/10" />
          <div className="sm:w-[50%] flex justify-center items-center">
            <h1 className="text-light font-semibold text-2xl text-center sm:mt-[-100px] lg:text-3xl sm:text-left p-[1rem] sm:pl-[3rem]">
              Your premier distributor for FUJIFILM and FAIRTEX products and
              equipment
            </h1>
          </div>
          <div className="p-[1rem] flex h-[50%] sm:h-auto sm:w-[50%] justify-center ">
            <Image src={logoImg} alt="" className="sm:mt-[-100px]" />
          </div>
        </div>

        <div className="left h-auto  sm:h-[500px] w-full bg-lightgray flex flex-col-reverse justify-end sm:flex-row">
          <div className="sm:w-[60%] sm:mt-[100px] mb-[70px] flex flex-col items-center">
            <h2 className="font-semibold p-[1rem] text-2xl text-center lg:text-3xl md:pb-[30px]">
              Welcome to{" "}
              <span className="font-orb text-primary font-bold">
                Star<span className="text-secondary">Corp</span>
              </span>{" "}
              International
            </h2>
            <h3 className="text-base px-[1rem] lg:text-xl sm:px-[2rem]">
              Established as a leading distributor in the industry, StarCorp
              International has been a key player in providing top-tier FUJIFILM
              and FAIRTEX products and equipment. With a commitment to quality
              and customer satisfaction, we have built a strong reputation over
              the years.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-start ">
              <button className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200">
                Learn more about us <GravityUiArrowRight className="inline" />
              </button>
            </div>
          </div>
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image src={Pic0} alt="" className="h-full object-cover" />
          </div>
        </div>

        <div className="right sm:h-[500px] w-full bg-lightgray flex flex-col sm:flex-row">
          <div className="h-[300px] sm:h-full sm:w-[40%] flex sm:block">
            <div className="w-[50%] sm:w-full sm:h-[50%]">
              <Image src={Pic2} className="h-full object-cover" />
            </div>
            <div className="w-[50%] sm:w-full sm:h-[50%]">
              <Image src={Pic3} className="h-full object-cover" />
            </div>
          </div>
          <div className="mb-[85px] flex flex-col items-center sm:w-[60%] sm:mt-[100px] ">
            <h2 className="text-2xl font-semibold p-[1rem] text-center lg:text-3xl md:pb-[30px]">
              Discover Quality Equipment
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              We're proud to offer a wide selection of FUJIFILM and FAIRTEX
              products and equipment. Explore our range and discover quality and
              innovation seamlessly combined.
            </h3>
            <div className="p-[1rem] w-full flex sm:p-[2rem] justify-end">
              <button className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200">
                Learn more about our business{" "}
                <GravityUiArrowRight className="inline" />
              </button>
            </div>
          </div>
        </div>

        <div className="left lg:h-[500px] w-full bg-lightgray flex flex-col-reverse justify-end sm:flex-row">
          <div className="w-full mt-[100px] flex flex-col items-center">
            <h2 className="font-semibold text-2xl lg:text-3xl">Our Partners</h2>
            <div className="px-[2rem] grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 sm:gap-10 mb-[100px] ">
              <Image
                src={Fujifilm}
                alt=""
                className="sm:h-[80%] object-contain"
              />
              <Image
                src={Fairtex}
                alt=""
                className="sm:h-[80%] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bottom sm:h-[400px] w-full bg-lightgray flex flex-col sm:flex-row">
          <div className="h-[300px] sm:h-auto sm:w-[40%] ">
            <Image src={Pic4} alt="" className="object-cover " />
          </div>
          <div className="sm:w-[60%] sm:mt-[100px] flex flex-col items-center">
            <h2 className="text-2xl p-[1rem] text-center font-semi lg:text-3xl md:pb-[30px]">
              Get in Touch with StarCorp International{" "}
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              Have questions or need assistance? Feel free to reach out to our
              dedicated team at StarCorp International.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-end">
              <button className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200">
                Contact Us <GravityUiArrowRight className="inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;