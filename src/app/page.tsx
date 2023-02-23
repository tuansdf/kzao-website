"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import circle from "/public/circle.svg";
import curveFlowDown from "/public/curve-flow-down.svg";
import curveFlowRight from "/public/curve-flow-right.svg";
import logoMark from "/public/logo-mark.svg";
import logoType from "/public/logo-type.svg";

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const closeAppointment = () => {
    setIsAppointmentOpen(false);
  };
  const toggleAppointment = () => {
    setIsAppointmentOpen((prev) => !prev);
  };

  return (
    <main
      className={
        "flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-top bg-no-repeat [background-image:url('/background-homepage-compressed.jpg')] md:bg-[0_20%]"
      }
    >
      <div className="relative z-10 h-full max-h-[900px] w-full max-w-[1440px]">
        {/* logo */}
        <button
          onClick={closeAppointment}
          className={clsx(
            "absolute left-1/2 z-20 flex -translate-x-1/2 items-center justify-center transition-all duration-500",
            {
              "top-0 w-[350px] translate-y-12": isAppointmentOpen,
              "top-1/2 w-[620px] -translate-y-1/2 cursor-default":
                !isAppointmentOpen,
            }
          )}
        >
          <Image
            src={logoType}
            alt=""
            className={clsx("absolute transition-all", {
              "p-6": isAppointmentOpen,
            })}
          />
          <Image src={logoMark} alt="" className="transition-all" />
        </button>

        {/* open appointment */}
        <button
          onClick={toggleAppointment}
          className={clsx(
            "absolute left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-sm uppercase text-white transition-all duration-500 hover:gap-4",
            {
              "bottom-[26px]": !isAppointmentOpen,
              "bottom-[615px]": isAppointmentOpen,
            }
          )}
        >
          <Image src={curveFlowDown} alt="" />
          <span>Schedule an appointment</span>
          <Image src={curveFlowRight} alt="" />
        </button>

        {/* appointment */}
        <div
          className={clsx(
            "relative top-full left-1/2 z-20 h-[525px] w-[600px] origin-bottom -translate-x-1/2 rounded-lg bg-white transition-all duration-500",
            {
              "-mt-16 -translate-y-full": isAppointmentOpen,
              "opacity-0": !isAppointmentOpen,
            }
          )}
        ></div>

        {/* circle links */}
        {!isAppointmentOpen ? (
          <>
            {/* topo */}
            <Link
              href="https://www.instagram.com/k__zao/"
              target="_blank"
              className="group absolute top-[145px] left-[615px] flex items-center"
            >
              <Image src={circle} alt="" />
              <div className="absolute left-full whitespace-nowrap pl-2 text-xs uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Handmade something tailoring in providence
              </div>
            </Link>

            {/* bottom right */}
            <Link
              href="https://www.instagram.com/k__zao/"
              target="_blank"
              className="group absolute left-[125px] bottom-[280px] flex items-center"
            >
              <Image src={circle} alt="" />
              <div className="absolute left-full whitespace-nowrap pl-2 text-xs uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                New website coming soon
              </div>
            </Link>

            {/* bottom left */}
            <Link
              href="https://www.instagram.com/k__zao/"
              target="_blank"
              className="group absolute bottom-[150px] right-[450px] flex items-center"
            >
              <Image src={circle} alt="" />
              <div className="absolute left-full whitespace-nowrap pl-2 text-xs uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                @K__ZAO
              </div>
            </Link>
          </>
        ) : null}
      </div>

      {/* dim background */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent transition-all duration-300",
          { "opacity-0": isAppointmentOpen }
        )}
      ></div>
      <div
        className={clsx(
          "absolute inset-0 bg-black/50 transition-all duration-500",
          {
            "opacity-0": !isAppointmentOpen,
          }
        )}
      ></div>
    </main>
  );
}
