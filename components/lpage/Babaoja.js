import React from "react";
import styles from "./Babaoja.module.css";
import Image from "next/image";

export default function Babaoja() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative grid grid-cols-1 md:grid-cols-2 content-center align-items-center justify-items-center bg-white sm:h-[1000px] md:h-[296px] shadow-green-200 shadow-2xl sm:w-11/12 md:w-9/12 rounded-3xl">
        <div>
          <div>
            <Image
              src="/Group 695.svg"
              alt="About Image"
              width={70}
              height={70}
            />
          </div>
          <div className="sm:absolute md:relative  sm:top-10 sm:left-[30px]">
            <span className=" font-body   sm:text-l md:text-3xl font-medium">
              Free!
            </span>
            <br />
            <span className=" font-body  font-semibold sm:text-3xl md:text-3xl ">
              Business Consultation
            </span>
            <br />
            <div className=" font-body font-medium  sm:text-sm md:text-sm tracking-tight leading-tight">
              Plus free on-boarding training to help you get started smoothly.
            </div>
            <div>
              <button className="rounded-md my-4  bg-[#00A85A] text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] px-8 py-2">
                GET STARTED NOW {">"}
              </button>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div
            className={`sm:rotate-90 md:rotate-0 relative sm:top-[196px] sm:left-[-75px] md:top-[3.2px] md:left-[1px] ml-auto sm:mb-2  lg:mb-0`}
          >
            <Image
              src="/bggg.png"
              alt="BabaOja Image"
              width={1240}
              height={750}
            />
          </div>
          <div
            className={`absolute  md:ml-0 sm:top-[650px] sm:right-[40px] md:top-[-57px] md:right-[290px]  sm:mb-2  lg:mb-0`}
          >
            <Image
              src="/baba_oja.png"
              alt="BabaOja Image"
              width={308}
              height={353}
            />
          </div>
          <div
            className={`absolute sm:top-[455px] sm:right-[100px] md:top-[87px] md:right-[60px]  sm:mb-2  lg:mb-0`}
          >
            <Image
              src="/babaoja_text.png"
              alt="BabaOja Image"
              width={208}
              height={153}
            />
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className={` relative w-96 place-content-center  rounded-sm  md:mb-10  mt-3 mb-3 lg:rounded-[1.5rem] lg:flex bg-white shadow-2xl`}
    // >
    //   <div className={`  ${styles.div_top}`}>
    //     <div className={`flex  w-[fit-content] md:mt-11`}>
    //       <div>
    //         <Image
    //           src="/Group 695.svg"
    //           alt="About Image"
    //           width={70}
    //           height={70}
    //         />
    //       </div>
    //       <div className="my-auto">
    //         <h1
    //           className={`text-[#00A85A] font-body tracking-wider font-semibold sm:text-[15px]  ${styles.bonusheader}`}
    //         >
    //           BONUS
    //         </h1>
    //       </div>
    //       <div className="my-auto">
    //         <h1
    //           className={`text-[#00A85A] font-body tracking-wider font-semibold sm:text-[15px]  ${styles.bonusheader}`}
    //         >
    //           BONUS
    //         </h1>
    //       </div>
    //     </div>

    //     <div className="md:flex md:flex-row  md:mb-0 items-center sm:p-4">
    //       <div className={` text-[#163828] font-body tracking-[1.8px] mb-2 `}>
    //         <div className="">
    //           <h1 className="">
    //             <span className=" font-body   sm:text-l md:text-3xl font-medium">
    //               Free!
    //             </span>
    //             <br />
    //             <span className=" font-body  font-semibold sm:text-3xl md:text-3xl ">
    //               Business Consultation
    //             </span>
    //             <br />
    //             <div className=" font-body font-medium  sm:text-sm md:text-sm tracking-tight leading-tight">
    //               Plus free on-boarding training to help you get started
    //               smoothly.
    //             </div>
    //           </h1>
    //         </div>
    //         <div
    //           className={`grid grid-cols-12  ${styles.button_div} lg:mb-5 md:hidden lg:block sm:hidden`}
    //         >
    //           <button
    //             className={` bg-[#00A85A] col-span-8 w-[45%] text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
    //           >
    //             GET STARTED NOW {">"}
    //           </button>
    //         </div>
    //       </div>
    //       <div className={`  ml-auto sm:mb-2  lg:mb-0`}>
    //         <Image
    //           className={` w-1/2`}
    //           src="/greenbg.png"
    //           alt="BabaOja Image"
    //           width={540}
    //           height={350}
    //         />
    //       </div>
    //       <div className={`absolute top-4 right-0 ml-auto sm:mb-2  lg:mb-0`}>
    //         <Image
    //           className={` w-1/2`}
    //           src="/baba-oja.png"
    //           alt="BabaOja Image"
    //           width={540}
    //           height={350}
    //         />
    //       </div>
    //     </div>

    //     <div
    //       className={`grid grid-cols-12  md:grid lg:hidden sm:grid   ${styles.button_div}`}
    //     >
    //       <button
    //         className={`sm:mt-3 sm:mb-9 md:my-4 bg-[#00A85A] col-span-6 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
    //       >
    //         GET STARTED NOW {">"}
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
