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
              "absolute left-1/2 bottom-6 z-30 flex -translate-x-1/2 items-center justify-center gap-3 whitespace-nowrap text-sm uppercase text-white transition-all duration-[800ms] hover:gap-4 lg:bottom-10"
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
              "absolute left-1/2 z-20 h-[475px] w-full max-w-[330px] -translate-x-1/2 overflow-hidden rounded-lg transition-all duration-[800ms] lg:h-[660px] lg:w-[1000px] lg:max-w-none lg:px-0",
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
            <div className="text-sm uppercase text-white">
              Handmade queer tailoring
              <br />
              in providence
            </div>

            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83417 8C5.83417 6.5273 7.02737 5.33312 8.49964 5.33312C9.97192 5.33312 11.1658 6.5273 11.1658 8C11.1658 9.4727 9.97192 10.6669 8.49964 10.6669C7.02737 10.6669 5.83417 9.4727 5.83417 8ZM4.39293 8C4.39293 10.2688 6.2315 12.1079 8.49964 12.1079C10.7678 12.1079 12.6064 10.2688 12.6064 8C12.6064 5.7312 10.7678 3.8921 8.49964 3.8921C6.2315 3.8921 4.39293 5.7312 4.39293 8ZM11.8092 3.72922C11.8091 3.91909 11.8654 4.10471 11.9707 4.26263C12.0761 4.42054 12.226 4.54365 12.4013 4.61638C12.5767 4.68911 12.7696 4.7082 12.9558 4.67123C13.142 4.63426 13.313 4.5429 13.4473 4.40869C13.5816 4.27449 13.673 4.10347 13.7101 3.91726C13.7473 3.73106 13.7283 3.53802 13.6558 3.36258C13.5832 3.18713 13.4602 3.03715 13.3025 2.9316C13.1447 2.82605 12.9591 2.76968 12.7693 2.7696H12.7689C12.5145 2.76972 12.2705 2.87085 12.0906 3.05077C11.9106 3.2307 11.8094 3.47471 11.8092 3.72922ZM5.26858 14.5118C4.48883 14.4763 4.06502 14.3464 3.78337 14.2366C3.40998 14.0912 3.14356 13.918 2.86345 13.6382C2.58334 13.3584 2.40995 13.0922 2.26522 12.7187C2.15543 12.4371 2.02555 12.013 1.9901 11.233C1.95133 10.3898 1.94359 10.1364 1.94359 8.00006C1.94359 5.86368 1.95197 5.61107 1.9901 4.7671C2.02561 3.98714 2.15645 3.5639 2.26522 3.28147C2.41059 2.90797 2.58372 2.64147 2.86345 2.36128C3.14317 2.08109 3.40934 1.90765 3.78337 1.76288C4.06489 1.65306 4.48883 1.52314 5.26858 1.48768C6.1116 1.4489 6.36484 1.44115 8.49964 1.44115C10.6345 1.44115 10.8879 1.44954 11.7317 1.48768C12.5114 1.5232 12.9345 1.65408 13.2169 1.76288C13.5903 1.90765 13.8567 2.08147 14.1368 2.36128C14.4169 2.64109 14.5897 2.90797 14.735 3.28147C14.8448 3.56307 14.9747 3.98714 15.0101 4.7671C15.0489 5.61107 15.0567 5.86368 15.0567 8.00006C15.0567 10.1364 15.0489 10.3891 15.0101 11.233C14.9746 12.013 14.8441 12.4369 14.735 12.7187C14.5897 13.0922 14.4165 13.3587 14.1368 13.6382C13.8571 13.9178 13.5903 14.0912 13.2169 14.2366C12.9354 14.3464 12.5114 14.4764 11.7317 14.5118C10.8887 14.5506 10.6354 14.5583 8.49964 14.5583C6.36388 14.5583 6.11134 14.5506 5.26858 14.5118ZM5.20236 0.048448C4.35095 0.087232 3.76917 0.222272 3.26109 0.420032C2.73491 0.624256 2.28947 0.89824 1.84435 1.34278C1.39923 1.78733 1.12603 2.2336 0.921864 2.75994C0.724161 3.26848 0.58916 3.85011 0.550387 4.70176C0.510975 5.55475 0.501953 5.82746 0.501953 8C0.501953 10.1725 0.510975 10.4452 0.550387 11.2982C0.58916 12.15 0.724161 12.7315 0.921864 13.2401C1.12603 13.7661 1.39929 14.2129 1.84435 14.6572C2.28941 15.1016 2.73491 15.3752 3.26109 15.58C3.77013 15.7777 4.35095 15.9128 5.20236 15.9516C6.05555 15.9903 6.32773 16 8.49964 16C10.6716 16 10.9442 15.991 11.7969 15.9516C12.6484 15.9128 13.2298 15.7777 13.7382 15.58C14.2641 15.3752 14.7098 15.1018 15.1549 14.6572C15.6001 14.2127 15.8727 13.7661 16.0774 13.2401C16.2751 12.7315 16.4108 12.1499 16.4489 11.2982C16.4877 10.4446 16.4967 10.1725 16.4967 8C16.4967 5.82746 16.4877 5.55475 16.4489 4.70176C16.4101 3.85005 16.2751 3.26816 16.0774 2.75994C15.8727 2.23392 15.5994 1.78803 15.1549 1.34278C14.7105 0.897536 14.2641 0.624256 13.7388 0.420032C13.2298 0.222272 12.6483 0.086592 11.7976 0.048448C10.9448 0.009664 10.6722 0 8.50028 0C6.32837 0 6.05555 0.009024 5.20236 0.048448Z"
                fill="white"
              />
            </svg>
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
