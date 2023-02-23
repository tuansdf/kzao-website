"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

import circle from "/public/circle.svg";
import curveFlowDown from "/public/curve-flow-down.svg";
import curveFlowRight from "/public/curve-flow-right.svg";
import logo from "/public/logo.svg";

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const closeAppointment = () => {
    setIsAppointmentOpen(false);
  };
  const toggleAppointment = () => {
    setIsAppointmentOpen((prev) => !prev);
  };

  return (
    <>
      {/* calendly script */}
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>

      <main
        className={
          "flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-top bg-no-repeat [background-image:url('/background-homepage-compressed.jpg')] md:bg-[0_20%]"
        }
      >
        <div className="relative z-10 h-full w-full max-w-[1440px]">
          {/* logo */}
          <button
            onClick={closeAppointment}
            className={clsx(
              "absolute left-1/2 z-30 -translate-x-1/2 transition-all duration-500",
              {
                "top-0 w-[350px] translate-y-6": isAppointmentOpen,
                "top-1/2 w-[620px] -translate-y-1/2 cursor-default":
                  !isAppointmentOpen,
              }
            )}
          >
            <Image
              src={logo}
              alt=""
              className={"transition-all duration-300"}
            />
          </button>

          {/* open appointment */}
          <button
            onClick={toggleAppointment}
            className={clsx(
              "absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 text-sm uppercase text-white transition-all duration-500 hover:gap-4"
            )}
          >
            <Image src={curveFlowDown} alt="" />
            <span>
              {isAppointmentOpen ? "Close" : "Schedule an appointment"}
            </span>
            <Image src={curveFlowRight} alt="" />
          </button>

          {/* appointment */}
          <div
            className={clsx(
              "absolute left-1/2 z-20 h-[660px] w-[1000px] -translate-x-1/2 overflow-hidden rounded-lg transition-all duration-500",
              {
                "bottom-1/2 translate-y-[calc(50%+4rem)] ": isAppointmentOpen,
                "bottom-0 translate-y-full": !isAppointmentOpen,
              }
            )}
          >
            <div
              data-url={process.env.NEXT_PUBLIC_CALENDLY_LINK}
              className="calendly-inline-widget h-full w-full"
            ></div>
          </div>

          {/* circle links */}
          {!isAppointmentOpen ? (
            <>
              {/* top */}
              <Link
                href="https://www.instagram.com/k__zao/"
                target="_blank"
                className="group absolute top-[145px] left-[615px] flex items-center"
              >
                <Image src={circle} alt="" />
                <div className="absolute left-full whitespace-nowrap pl-2 text-sm uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
                <div className="absolute left-full whitespace-nowrap pl-2 text-sm uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
                <div className="absolute left-full whitespace-nowrap pl-2 text-sm uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
    </>
  );
}
