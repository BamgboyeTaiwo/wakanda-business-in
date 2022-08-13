import React from "react";
import styles from "./Babaoja.module.css";
import Image from "next/image";

export default function Babaoja() {
  return (
    <div className=" w-full md:pb-20">
      <div
        className={`container  sm:place-content-center   rounded-sm md:px-7 mt-3 mb-3 lg:rounded-[1.5rem] lg:flex ${styles.container}`}
      >
        <div className={`  ${styles.div_top}`}>
          <div className="md:flex md:flex-row  md:mb-0 sm:p-4 md:relative md:top-[29px]">
            <div className={`md:flex md:flex-col  mb-2 md:relative  `}>
              <div
                className={`flex  w-[fit-content]  items-center justify-center`}
              >
                <div>
                  <Image
                    src="/Group 695.svg"
                    alt="About Image"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="my-auto">
                  <h1
                    className={`text-[#00A85A] font-body tracking-wider font-semibold sm:text-[15px]   md:text-3xl  ${styles.bonusheader}`}
                  >
                    BONUS
                  </h1>
                </div>
              </div>
              <div className="md:flex md:flex-col  md: ml-10md: pl-10  mt-7">
                <div className="">
                  <h1 className="">
                    <span className=" font-body   sm:text-l md:text-4xl font-normal">
                      Free!
                    </span>
                    <br />
                    <span className=" font-body  font-semibold sm:text-3xl md:text-5xl ">
                      Business Consultation
                    </span>
                    <br />
                    <div className=" font-body font-medium  sm:text-sm md:text-base tracking-tight leading-tight">
                      Plus free on-boarding training to help you get started
                      smoothly.
                    </div>
                  </h1>
                </div>

                <div
                  className={`grid grid-cols-12   lg:mb-5 md:hidden lg:block sm:hidden mt-6`}
                >
                  <button
                    className={`px-1 bg-[#00A85A] col-span-8 w-[50%] text-white font-regular tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-2xl font-body text-sm`}
                  >
                    GET STARTED NOW {">"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={` ml-auto sm:mb-2  lg:mb-0 md:relative left-[100px]`}
            >
              <Image
                className={` w-1/2`}
                src="/BabaOja.svg"
                alt="BabaOja Image"
                width={540}
                height={350}
              />
            </div>
          </div>

          <div
            className={`grid grid-cols-12  md:grid lg:hidden sm:grid   ${styles.button_div}`}
          >
            <button
              className={`sm:mt-3 sm:mb-9 md:my-4 bg-[#00A85A] col-span-6 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2  font-body  text-white font- tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
            >
              GET STARTED NOW {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
