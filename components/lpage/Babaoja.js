import React from "react";
import styles from "./Babaoja.module.css";
import Image from "next/image";

export default function Babaoja() {
  return (
    <>
      <div className="container mt-3 mb-3 rounded bg-red-400 lg:flex shadow-[0_30px_50px_#18A75D26]">
        <div className={`  ${styles.div_top}`}>
          <div className={`flex  w-[fit-content]`}>
            <div>
              <Image
                src="/Group 695.svg"
                alt="About Image"
                // placeholder="blur"
                // blurDataURL="/about-us.svg"  box-shadow: 0px 30px 50px ;
                // quality={75}
                width={70}
                height={70}
                // width={472}
                // height={356}
                // loading="lazy"
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

          <div
            className={` text-[#163828] text-body tracking-[1.8px] ${styles.content}`}
          >
            <h1 className={styles.content_h1}>
              Free! <br />
              <span className="font-bold">Business Consultation</span>
            </h1>
            <span>
              Plus free on-boarding training to help you get started smoothly.
            </span>
          </div>
          <div className={`grid grid-cols-12 ${styles.button_div}`}>
            {/* <button
              className={` w-25 bg-[#00A85A] md:col-span-8 md:col-start-3 md:p-1 ml-8   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)]  py-3 px-4 rounded-md `}
            >
              GET STARTED NOW {">"}
            </button> */}
            <button
              className={` bg-[#00A85A] col-span-6  text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
            >
              GET STARTED NOW {">"}
            </button>
          </div>
          {/* <div className="grid grid-cols-3 w-25  sm:mb-3 lg:mb-6">

            </div> */}
        </div>
        <div>
          <Image
            src="/BabaOja.svg"
            alt="BabaOja Image"
            // width={540}
            height={600}
            width={750}
            // height={350}
          />
        </div>
      </div>

      <div
        className={`container mt-3 mb-3 rounded lg:flex ${styles.container}`}
      >
        <div className={`  ${styles.div_top}`}>
          <div className={`flex  w-[fit-content]`}>
            <div>
              <Image
                src="/Group 695.svg"
                alt="About Image"
                // placeholder="blur"
                // blurDataURL="/about-us.svg"  box-shadow: 0px 30px 50px ;
                // quality={75}
                width={70}
                height={70}
                // width={472}
                // height={356}
                // loading="lazy"
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

          <div
            className={` text-[#163828] font-body tracking-[1.8px] mb-2 ${styles.content}`}
          >
            <h1 className={styles.content_h1}>
              Free! <br />
              <span className="font-semibold sm:font-bold">
                Business Consultation
              </span>
            </h1>
            <span className=" sm:font-[15px]">
              Plus free on-boarding training to help you get started smoothly.
            </span>
          </div>
          <div
            className={`grid grid-cols-12 ${styles.button_div} md:hidden lg:block sm:hidden`}
          >
            {/* <button
              className={` w-25 bg-[#00A85A] md:col-span-8 md:col-start-3 md:p-1 ml-8   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)]  py-3 px-4 rounded-md `}
            >
              GET STARTED NOW {">"}
            </button> */}
            <button
              className={` bg-[#00A85A] col-span-6  text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
            >
              GET STARTED NOWW {">"}
            </button>
          </div>
          {/* <div className="grid grid-cols-3 w-25  sm:mb-3 lg:mb-6">

            </div> */}
        </div>
        <div className={` ml-auto sm:mb-2 md:mb-3`}>
          <div>
            <img
              src="/Group 698.svg"
              alt="BabaOja Image"
              width={200}
              className={` sm:block md:block lg:hidden xxlg:hidden ml-9 ${styles.img}`}
            />
          </div>
          {/* <img
          className={` sm:block md:block lg:hidden xxlg:hidden ${styles.img}`}
            src="/Group 698.svg"
            alt="BabaOja Image"
            // width={540}
            height={850}
            width={620} /> */}

          <img
            className={` ${styles.img}`}
            src="/BabaOja.svg"
            alt="BabaOja Image"
            // width={540}
            height={850}
            width={400}
            // height={350}
          />
        </div>

        <div
          className={`grid grid-cols-12  md:grid lg:hidden sm:grid   ${styles.button_div}`}
        >
          {/* <button
              className={` w-25 bg-[#00A85A] md:col-span-8 md:col-start-3 md:p-1 ml-8   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)]  py-3 px-4 rounded-md `}
            >
              GET STARTED NOW {">"}
            </button> */}
          <button
            className={`sm:mt-3 sm:mb-9 md:my-4 bg-[#00A85A] col-span-6 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
          >
            GET STARTED NOW {">"}
          </button>
        </div>
      </div>
    </>
  );
}
