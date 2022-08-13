import React from "react";
import styles from "./Babaoja.module.css";
import Image from "next/image";

export default function Babaoja() {
  return (
    <div className="w-full">
      <div
        className={`container w-80 place-content-center  rounded-sm md:px-7mt-3 mb-3 lg:rounded-[1.5rem] lg:flex ${styles.container}`}
      >
        <div className={`  ${styles.div_top}`}>
          <div className="md:flex md:flex-row  md:mb-0 items-center sm:p-4">
            <div className={`md:flex md:flex-col justify-start  mb-2 `}>
              <div className={`flex  w-[fit-content] `}>
                <div>
                  <Image
                    src="/Group 695.svg"
                    alt="About Image"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="my-auto">
                  <h1
                    className={`text-[#00A85A] font-body tracking-wider font-semibold sm:text-[15px]  ${styles.bonusheader}`}
                  >
                    BONUS
                  </h1>
                </div>
              </div>
              <div className="md:flex md:flex-col pl-1">
                <div className="">
                  <h1 className="">
                    <span className=" font-body   sm:text-l md:text-3xl font-medium">
                      Free!
                    </span>
                    <br />
                    <span className=" font-body  font-semibold sm:text-3xl md:text-3xl ">
                      Business Consultation
                    </span>
                    <br />
                    <div className=" font-body font-medium  sm:text-sm md:text-sm tracking-tight leading-tight">
                      Plus free on-boarding training to help you get started
                      smoothly.
                    </div>
                  </h1>
                </div>

                <div
                  className={`grid grid-cols-12   lg:mb-5 md:hidden lg:block sm:hidden`}
                >
                  <button
                    className={`px-1 bg-[#00A85A] col-span-8 w-[50%] text-white font-regular tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-2xl font-body text-sm`}
                  >
                    GET STARTED NOW {">"}
                  </button>
                </div>
              </div>
            </div>
            <div className={` ml-auto sm:mb-2  lg:mb-0`}>
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
