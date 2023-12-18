import React from "react";
import { cx } from "../utils";

export const StarCorpIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 347 193"
    className={cx("w-full h-auto", className)}
    {...props}
  >
    <path
      d="M6539.77 6480.87v-128c5.67 50.5 48.51 89.75 100.52 89.75h454.08c55.82 0 101.07-45.2 101.16-101v-24.59h201.94v163.84c0 90.63-73.47 164.1-164.1 164.1h-732.08c-22.25 0-43.46-4.43-62.81-12.45 59.46-24.66 101.29-83.27 101.29-151.65Zm-101.29-932.66c19.35-8.02 40.56-12.45 62.81-12.45h732.08c90.63 0 164.1 73.47 164.1 164.1v163.84h-201.94v-24.59c-.09-55.8-45.34-101-101.16-101-2.18 0-227.04.2-227.04.2l-112.7-.1-114.34-.1c-52.01 0-94.86 39.25-100.52 89.75v-128c0-68.38-41.83-126.99-101.29-151.65Z"
      fill="#000033"
      transform="matrix(.17386 0 0 .17386 -939.261 -962.44)"
    />
    <path
      d="M11049.1 11952.7H8402.32c-327.66 0-593.28-265.6-593.28-593.3v-592.3h730.08v88.9c.33 201.8 163.95 365.2 365.74 365.2h1641.64c201.8 0 365.4-163.4 365.8-365.2v-177.8c-.4-201.7-164-365.1-365.8-365.1-3.9 0-2144.18.7-2144.18.7-327.66 0-593.28-265.7-593.28-593.32V8535.84c0-327.66 265.62-593.28 593.28-593.28h2646.78c327.6 0 593.2 265.62 593.2 593.28v592.32h-730v-88.9c-.4-201.73-164-365.15-365.8-365.15H8904.86c-201.79 0-365.41 163.42-365.74 365.15v177.8c.33 201.72 163.95 365.15 365.74 365.15 7.88 0 820.83-.74 820.83-.74h1323.41v.06c327.6 0 593.2 265.62 593.2 593.27v1184.6c0 327.7-265.6 593.3-593.2 593.3Z"
      fill="#5f6a95"
      transform="matrix(.04809 0 0 .04809 -375.51 -381.944)"
    />
  </svg>
);