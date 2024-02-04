import React from "react";
import logoImg from "@/public/logo.svg";
import { GravityUiArrowRight } from "../components/Icons/ArrowRight";
import Image from "next/image";
import Pic from "@/public/pic1.jpg";
import Pic2 from "@/public/pic2.jpg";
import Pic3 from "@/public/pic3.jpg";
import Pic0 from "@/public/pic0.jpg";
import Pic4 from "@/public/pic4.jpg";
import Hookah from "@/public/hookah.jpg";
import Fujifilm from "@/public/Fujifilm.png";
import Fairtex from "@/public/Fairtex.png";
import Link from "next/link";
function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[80px] sm:pt-[100px] bg-dark">
      <div className="display">
        {/* banner */}
        <div className="top h-[350px] sm:h-[500px] object-fill w-full bg-light shadow-2xl flex relative flex-col-reverse justify-end sm:flex-row ">
          <div className="w-full h-full absolute z-[-5]">
            <Image src={Pic} alt="" className="h-full object-cover" />
          </div>
          <div className="w-full h-full absolute z-[-1] bg-gradient-to-t sm:bg-gradient-to-r from-30% sm:from-0% from-dark/70 to-light/20" />
          <div className="sm:w-[50%] flex justify-center items-center">
            <h1 className="text-light font-semibold text-2xl text-center sm:mt-[-100px] lg:text-3xl sm:text-left p-[1rem] sm:pl-[3rem]">
              Your premier distributor for FUJIFILM and FAIRTEX products and
              equipment
            </h1>
          </div>
          <div className="p-[1rem] flex h-[30%] sm:h-auto sm:w-[50%] justify-center ">
            <Image src={logoImg} alt="" className="sm:mt-[-100px]" />
          </div>
        </div>
        {/* Welcome to starcorp */}
        <div className="left h-auto  sm:h-[500px] w-full bg-light flex flex-col-reverse justify-end sm:flex-row">
          <div className="sm:w-[60%] sm:mt-[100px] mb-[70px] flex flex-col items-center">
            <h2 className="font-semibold p-[1rem] text-2xl text-center lg:text-3xl md:pb-[30px]">
              Welcome to{" "}
              <span className="font-orb text-primary font-bold">
                Star<span className="text-secondary">Corp</span>
              </span>{" "}
              International
            </h2>
            <h3 className="text-base px-[1rem] lg:text-xl sm:px-[2rem]">
              Your reliable partner in distributing top-quality tobacco products
              for water pipes and FUJIFILM and FAIRTEX products and
              equipment.Our dedication to providing an exceptional experience to
              users worldwide makes us the industry&apos;s top choice.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-start ">
              <Link
                href={`/about`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Learn more about us <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image src={Pic0} alt="" className="h-full object-cover" />
          </div>
        </div>
        {/* Hookah */}
        <div className="right sm:h-[500px] w-full bg-light flex flex-col sm:flex-row">
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image
              src={Hookah}
              alt=""
              className="h-full object-cover object-bottom"
            />
          </div>
          <div className="mb-[85px] flex flex-col items-center sm:w-[60%] sm:mt-[100px] ">
            <h2 className="text-2xl font-semibold p-[1rem] text-center lg:text-3xl md:pb-[30px]">
              Hookah Molasses
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              With high-quality standards, the products are meticulously
              formulated to satisfy the tastes and demands of the most
              discerning users.
            </h3>
            <div className="p-[1rem] w-full flex sm:p-[2rem] justify-end">
              <Link
                href={`/business/hookah-molasses`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Learn more
                <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </div>
        {/* FujiFilm */}
        <div className="left h-auto  sm:h-[500px] w-full bg-light flex flex-col-reverse justify-end sm:flex-row">
          <div className="sm:w-[60%] sm:mt-[100px] mb-[70px] flex flex-col items-center">
            <h2 className="font-semibold p-[1rem] text-2xl text-center lg:text-3xl md:pb-[30px]">
              FUJIFILM
            </h2>
            <h3 className="text-base px-[1rem] lg:text-xl sm:px-[2rem]">
              Discover the art of visual storytelling with FUJIFILM&apos;s
              cutting-edge imaging solutions.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-start ">
              <Link
                href={`/business/fujifilm`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Learn more
                <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image
              src={Pic2}
              alt=""
              className="h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Fairtex */}
        <div className="right sm:h-[500px] w-full bg-light flex flex-col sm:flex-row">
          <div className="h-[300px] sm:h-auto sm:w-[40%]">
            <Image
              src={Pic3}
              alt=""
              className="h-full object-cover object-top"
            />
          </div>
          <div className="mb-[85px] flex flex-col items-center sm:w-[60%] sm:mt-[100px] ">
            <h2 className="text-2xl font-semibold p-[1rem] text-center lg:text-3xl md:pb-[30px]">
              FAIRTEX Sports Gear
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              From gloves to training equipment, FAIRTEX is your trusted
              companion in achieving peak athletic performance.
            </h3>
            <div className="p-[1rem] w-full flex sm:p-[2rem] justify-end">
              <Link
                href={`/business/fairtex`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Learn more
                <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </div>
        {/* Partners */}
        <div className="left lg:h-[500px] w-full bg-light flex flex-col-reverse justify-end sm:flex-row">
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
        {/* Contact */}
        <div className="bottom sm:h-[400px] w-full bg-light flex flex-col sm:flex-row">
          <div className=" sm:h-full sm:w-[40%] ">
            <Image src={Pic4} alt="" className="h-full object-cover " />
          </div>
          <div className="sm:w-[60%] sm:mt-[100px] flex flex-col items-center">
            <h2 className="font-semibold text-2xl p-[1rem] text-center font-semi lg:text-3xl md:pb-[30px]">
              Get in Touch with StarCorp International{" "}
            </h2>
            <h3 className="px-[1rem] lg:text-xl sm:px-[2rem]">
              Have questions or need assistance? Feel free to reach out to our
              dedicated team at StarCorp International.
            </h3>
            <div className="p-[1rem] sm:p-[2rem] w-full flex justify-end">
              <Link
                href={`/contact`}
                className="border-[1px] border-dark border-solid px-[10px] lg:px-[15px] text-lg lg:text-xl py-[5px] bg-dark text-light hover:bg-primary hover:border-dark ease-in duration-200"
              >
                Contact Us <GravityUiArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
