"use client";

import clsx from "clsx";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

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
          <svg
            viewBox="0 0 620 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closeAppointment}
            width="800"
            height="400"
            className={clsx(
              "absolute left-1/2 z-30 -translate-x-1/2 transition-all duration-[800ms]",
              {
                "top-1/2 -translate-y-1/2 scale-[0.4] cursor-default sm:scale-50 md:scale-75 lg:scale-100":
                  !isAppointmentOpen,
                "top-0 origin-top translate-y-6 scale-[0.3375] cursor-pointer lg:translate-y-10 lg:scale-[0.4375]":
                  isAppointmentOpen,
              }
            )}
          >
            <path
              d="M1 13.6054C93.9571 81.0582 114.632 211.096 47.1796 304.053M5.07315 118.613C109.129 119.266 192.954 204.151 192.3 308.207M184.469 0.61377C175.285 89.6847 95.6329 154.445 6.56201 145.261M300.918 131.455C218.733 142.216 143.385 84.314 132.625 2.12848M101.444 268.4C172.965 214.334 274.773 228.483 328.84 300.004M274.472 308.704C259.932 229.025 312.738 152.645 392.417 138.104M425.963 308.967C354.142 261.664 334.267 165.094 381.571 93.2734M469.512 283.905C389.328 209.606 384.557 84.3731 458.856 4.18885M367.88 56.1297C471.284 20.668 583.856 75.7459 619.318 179.15M604.506 47.0929C605.312 156.405 517.349 245.673 408.037 246.479M464.752 190.952C403.243 242.133 311.89 233.761 260.71 172.252M127.485 279.818C130.101 185.147 208.968 110.522 303.639 113.139M519.355 86.7929V228.101M392.598 86.7929V198.39M42.0752 289.191H95.6808V175.822H96.7674L112.342 289.191H168.483L146.751 149.019L168.483 21.1627H112.704L96.7674 124.752H95.6808V21.1627H42.0752V289.191ZM325.913 246.089H286.433L325.551 57.0205V21.1627H226.308V64.2645H266.512L226.67 254.782V289.191H325.913V246.089ZM360.336 21.1627L329.187 289.191H383.155L385.69 239.207H399.454L402.351 289.191H457.768L426.257 21.1627H360.336ZM578.256 79.1147C578.256 39.2727 555.8 18.2651 518.493 18.2651C480.824 18.2651 458.73 39.2727 458.73 79.1147V231.239C458.73 271.081 480.824 292.088 518.493 292.088C555.8 292.088 578.256 271.081 578.256 231.239V79.1147Z"
              stroke="#FFFCF4"
            />
          </svg>

          {/* open appointment */}
          <button
            onClick={toggleAppointment}
            className={clsx(
              "absolute left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-3 whitespace-nowrap text-sm uppercase text-white transition-all duration-[800ms] hover:gap-4 lg:bottom-10",
              {
                "bottom-6": isAppointmentOpen,
                "bottom-10": !isAppointmentOpen,
              }
            )}
          >
            <svg
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.34375 1C10.3847 2.50795 17.302 11.8702 15.7941 21.9111"
                stroke="#FFFCF4"
                strokeWidth="0.65"
              />
            </svg>

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

            <svg
              width="17"
              height="23"
              viewBox="0 0 17 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6567 21.9111C6.61578 20.4031 -0.301564 11.0409 1.20639 1"
                stroke="#FFFCF4"
                strokeWidth="0.65"
              />
            </svg>
          </button>

          {/* appointment */}
          <div
            className={clsx(
              "absolute left-1/2 z-20 h-[450px] w-full max-w-[320px] -translate-x-1/2 overflow-hidden rounded-lg transition-all duration-[800ms] lg:h-[660px] lg:w-[1000px] lg:max-w-none lg:px-0",
              {
                "bottom-1/2 translate-y-[calc(50%+4rem)]": isAppointmentOpen,
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
          {/* top */}
          <Link
            href="https://www.instagram.com/k__zao/"
            target="_blank"
            className={clsx(
              "group absolute top-10 left-1/2 flex -translate-x-1/2 flex-col-reverse items-center gap-4 transition-opacity duration-500 lg:top-[145px] lg:left-[615px] lg:flex-row lg:gap-0",
              { "opacity-0": isAppointmentOpen }
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_126_1231)">
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  stroke="#FFFCF4"
                  strokeDasharray="2 2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_126_1231"
                  x="-10"
                  y="-10"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_126_1231"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_126_1231"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="whitespace-nowrap text-center text-sm uppercase text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100 lg:absolute lg:left-full lg:pl-2 lg:opacity-0">
              exceptionally queer,
              <br className="lg:hidden" /> handcrafted bespoke tailoring
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_126_1231)">
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  stroke="#FFFCF4"
                  strokeDasharray="2 2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_126_1231"
                  x="-10"
                  y="-10"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_126_1231"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_126_1231"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_126_1231)">
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  stroke="#FFFCF4"
                  strokeDasharray="2 2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_126_1231"
                  x="-10"
                  y="-10"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_126_1231"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_126_1231"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
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
