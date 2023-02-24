"use client";

import clsx from "clsx";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

import CircleDashBorder from "@/components/icons/circle-dash-border";
import CurveFlowDown from "@/components/icons/curve-flow-down";
import CurveFlowRight from "@/components/icons/curve-flow-right";
import InstagramIcon from "@/components/icons/instagram-icon";
import KzaoLogo from "@/components/icons/kzao-logo";

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const closeAppointment = () => {
    setIsAppointmentOpen(false);
  };
  const toggleAppointment = () => {
    setIsAppointmentOpen((prev) => !prev);
  };

  const updateVhOnResize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", updateVhOnResize);

    return () => removeEventListener("resize", updateVhOnResize);
  }, []);

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
          "dh-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-[50%_0] bg-no-repeat [background-image:url('/background-homepage-compressed.jpg')] md:bg-[50%_20%]"
        }
      >
        <div className="relative z-10 flex h-full w-full max-w-[1440px] flex-col items-center justify-center">
          {/* logo */}
          <KzaoLogo
            onClick={closeAppointment}
            className={clsx(
              "absolute left-1/2 z-30 h-[400px] w-[800px] -translate-x-1/2 transition-all duration-[800ms]",
              {
                "top-1/2 -translate-y-1/2 scale-[0.4] cursor-default sm:scale-50 md:scale-75 lg:scale-100":
                  !isAppointmentOpen,
                "top-0 origin-top translate-y-6 scale-[0.3375] cursor-pointer lg:translate-y-10 lg:scale-[0.4375]":
                  isAppointmentOpen,
              }
            )}
          />

          {/* open appointment */}
          <button
            onClick={toggleAppointment}
            className={clsx(
              "absolute left-1/2 bottom-6 z-30 flex -translate-x-1/2 items-center justify-center gap-3 whitespace-nowrap text-sm uppercase text-white transition-all duration-[800ms] hover:gap-4 lg:bottom-10"
            )}
          >
            <CurveFlowDown />

            <span
              className={clsx("transition-opacity duration-300", {
                "absolute -z-50 opacity-0": !isAppointmentOpen,
              })}
            >
              Close
            </span>
            <span
              className={clsx("transition-opacity duration-300", {
                "absolute -z-50 opacity-0": isAppointmentOpen,
              })}
            >
              Schedule an appointment
            </span>

            <CurveFlowRight />
          </button>

          {/* appointment */}
          <div
            className={clsx(
              "absolute left-1/2 z-20 h-[500px] w-full max-w-[350px] -translate-x-1/2 overflow-hidden rounded-lg transition-all duration-[800ms] lg:h-[660px] lg:w-[1000px] lg:max-w-none lg:px-0",
              {
                "bottom-1/2 translate-y-[calc(50%+3.5rem)] lg:translate-y-[calc(50%+3.75rem)]":
                  isAppointmentOpen, // 50% container height + (logo height - open button height) / 2
                "bottom-0 translate-y-full opacity-0": !isAppointmentOpen,
              }
            )}
          >
            <div
              data-url={process.env.NEXT_PUBLIC_CALENDLY_LINK}
              className="calendly-inline-widget h-full w-full"
            ></div>
          </div>

          {/* circle links */}
          {/* mobile only */}
          <Link
            href="https://www.instagram.com/k__zao/"
            target="_blank"
            className={clsx(
              "absolute top-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 text-center transition-opacity duration-300 hover:opacity-90 lg:hidden",
              {
                "opacity-0": isAppointmentOpen,
              }
            )}
          >
            <div className="whitespace-nowrap text-sm uppercase text-white">
              exceptionally queer,
              <br />
              handcrafted bespoke tailoring
            </div>

            <InstagramIcon />
          </Link>

          {/* top */}
          <Link
            href="https://www.instagram.com/k__zao/"
            target="_blank"
            className={clsx(
              "group absolute top-[145px] left-[615px] hidden items-center transition-opacity duration-500 lg:flex",
              { "opacity-0": isAppointmentOpen }
            )}
          >
            <CircleDashBorder />

            <div className="whitespace-nowrap text-center text-sm uppercase text-white transition-opacity duration-300 group-hover:opacity-100 lg:absolute lg:left-full lg:pl-2 lg:opacity-0">
              exceptionally queer, handcrafted bespoke tailoring
            </div>
          </Link>

          {/* bottom left */}
          <Link
            href="https://www.instagram.com/k__zao/"
            target="_blank"
            className={clsx(
              "group absolute left-[125px] bottom-[280px] hidden items-center transition-opacity duration-500 lg:flex",
              { "opacity-0": isAppointmentOpen }
            )}
          >
            <CircleDashBorder />

            <div className="absolute left-full whitespace-nowrap pl-2 text-sm uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              new website coming soon
            </div>
          </Link>

          {/* bottom right */}
          <Link
            href="https://www.instagram.com/k__zao/"
            target="_blank"
            className={clsx(
              "group absolute hidden items-center transition-opacity duration-500 lg:bottom-[150px] lg:right-[450px] lg:flex",
              { "opacity-0": isAppointmentOpen }
            )}
          >
            <CircleDashBorder />

            <div className="absolute left-full whitespace-nowrap pl-2 text-sm uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              follow K-zao on Instagram
            </div>
          </Link>
        </div>

        {/* dim background */}
        <div
          className={clsx(
            "absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent transition-opacity duration-[800ms]",
            { "opacity-0": isAppointmentOpen }
          )}
        ></div>
        <div
          className={clsx(
            "absolute inset-0 bg-black/50 transition-opacity duration-[800ms]",
            {
              "opacity-0": !isAppointmentOpen,
            }
          )}
        ></div>
      </main>
    </>
  );
}
