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

  const toggleAppointment = () => {
    setIsAppointmentOpen((prev) => !prev);
  };

  return (
    <main
      className={
        "relative h-screen overflow-hidden bg-cover bg-top bg-no-repeat [background-image:url('/background-homepage-compressed.jpg')]"
      }
    >
      {/* logo */}
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-500",
          {
            "top-0 w-[350px] translate-y-8": isAppointmentOpen,
            "w-[620px]": !isAppointmentOpen,
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
      </div>

      {/* open appointment */}
      <button
        onClick={toggleAppointment}
        className={clsx(
          "absolute left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-sm uppercase text-white transition-all duration-500 hover:gap-4",
          {
            "bottom-[20px]": !isAppointmentOpen,
            "bottom-[560px]": isAppointmentOpen,
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
          "relative top-full left-1/2 z-20 h-[520px] w-[600px] origin-bottom -translate-x-1/2 rounded-lg bg-white transition-all duration-500",
          {
            "-mt-4 -translate-y-full": isAppointmentOpen,
            "": !isAppointmentOpen,
          }
        )}
      ></div>

      {/* dim background */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-300",
          { "opacity-0": isAppointmentOpen }
        )}
      ></div>
      <div
        className={clsx(
          "absolute inset-0 bg-black/30 transition-all duration-500",
          {
            "opacity-0": !isAppointmentOpen,
          }
        )}
      ></div>

      {/* circle links */}
      {!isAppointmentOpen ? (
        <>
          <Link
            href="#"
            className="group absolute top-[140px] left-[40vw] flex items-center"
          >
            <Image src={circle} alt="" />
            <div className="absolute left-full whitespace-nowrap pl-2 text-xs uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Handmade something tailoring in providence
            </div>
          </Link>
          <Link
            href="#"
            className="group absolute top-[600px] left-[120px] flex items-center"
          >
            <Image src={circle} alt="" />
            <div className="absolute left-full whitespace-nowrap pl-2 text-xs uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              New website coming soon
            </div>
          </Link>
          <Link
            href="#"
            className="group absolute top-[725px] right-[30vw] flex items-center"
          >
            <Image src={circle} alt="" />
            <div className="absolute left-full whitespace-nowrap pl-2 text-xs uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              @K__ZAO
            </div>
          </Link>
        </>
      ) : null}
    </main>
  );
}
