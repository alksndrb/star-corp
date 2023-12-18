import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/public/logo.svg";

function Logo({ pathLang }) {
  return (
    <Link href={pathLang} className="flex items-start justify-start">
      <div className="flex items-start justify-start">
        <Image
          src={logo}
          className="h-[70px] w-auto hidden sm:inline lg:hidden"
          alt="logo"
        />
        <p
          className="font-orb text-primary text-5xl lg:text-7xl font-bold sm:hidden
          lg:inline"
        >
          Star<span className="text-secondary">Corp</span>
        </p>
      </div>
    </Link>
  );
}

export default Logo;
