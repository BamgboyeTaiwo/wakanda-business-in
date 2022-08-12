import React from "react";
import Image from "next/image";
import styles from "./ebook.module.css";

export default function Ebook() {
  return (
    // <div
    //   className={`lg:flex md:flex sm:h-[fit-content] md:px-8  h-[100vh] bg-[#EFF7F0]  sm:mb-[30vh] sm:w-[100vw]  md:mb-0`}
    // >
    <div className="md:flex md:flex-row sm:grid">
      <div>
        <Image
          src="/e_book.svg"
          alt="E-book"
          placeholder="blur"
          blurDataURL="/e_book.svg"
          quality={75}
          width={928}
          height={720}
          // resizeMode="cover"
          loading="lazy"
        />
      </div>

      <div className={`col-span-6 py-44  ${styles.content_div}`}>
        <h1
          className={` text-[50px] tracking-wide  text-[#00A85A] font-semibold`}
        >
          FREE! EBOOK
        </h1>
        <p
          className={` text-[#163828]  tracking-wide leading-9 font-medium sm:text-[x-large]`}
        >
          7 Reasons You Need To Turn <br /> Your Business To A Mobile
          <br /> Business
        </p>
        <p className="text-normal ">
          Create Internal communication channel with your staff, enhanced with
          the ability to create different categories of chat with your company
          community, and also anonymous voices chats for staffs to communicate
          with the managent.
        </p>

        <button
          className={` mt-4 bg-[#00A85A] font-body text-center text-white md:rounded lg:rounded
                    sm:py-7 sm:text-xl sm:rounded-[10px] sm:w-[70%] md:w-[40%]
                     md:py-3 md:px-3 md:text-[15px]
                     lg:py-3 lg:px-3  `}
        >
          GET IT NOW
        </button>
      </div>
    </div>
  );
}




import React from "react";
import styles from "./Babaoja.module.css";
import Image from "next/image";

export default function Babaoja() {
  return (
    <div
      className={`container mt-3 mb-3 lg:rounded-[1.5rem] lg:flex ${styles.container}`}
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
          <div>
            <h1 className={styles.content_h1}>
              Free! <br />
              <span className="md:font-semibold sm:font-bold">
                Business Consultation
              </span>
              <span className=" sm:font-[15px]">
                Plus free on-boarding training to{" "}
                <br className="sm:block md:block lg:hidden" />
                help you get started smoothly.
              </span>
            </h1>
            <span className=" sm:font-[15px]">
              Plus free on-boarding training to{" "}
              <br className="sm:block md:block lg:hidden" />
              help you get started smoothly.
            </span>
          </div>
          <div
            className={`grid grid-cols-12 ${styles.button_div} lg:mb-5 md:hidden lg:block sm:hidden`}
          >
            {/* <button
              className={` w-25 bg-[#00A85A] md:col-span-8 md:col-start-3 md:p-1 ml-8   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)]  py-3 px-4 rounded-md `}
            >
              GET STARTED NOW {">"}
            </button> */}
            <button
              className={` bg-[#00A85A] col-span-8 w-[45%]  text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
            >
              GET STARTED NOW {">"}
            </button>
          </div>
          {/* <div className="grid grid-cols-3 w-25  sm:mb-3 lg:mb-6">
            </div> */}
        </div>
        <div className={` ml-auto sm:mb-2 md:mb-3 lg:mb-0`}>
          <div>
            {/* <Image
              src="/Group 698.svg"
              alt="BabaOja Image"
              width={200}
              height={100}
              className={` sm:block md:block lg:hidden xxlg:hidden ml-9 ${styles.img}`}
            /> */}
          </div>
          {/* <img
          className={` sm:block md:block lg:hidden xxlg:hidden ${styles.img}`}
            src="/Group 698.svg"
            alt="BabaOja Image"
            // width={540}
            height={850}
            width={620} /> */}

          <Image
            className={` ${styles.img}`}
            src="/BabaOja.svg"
            alt="BabaOja Image"
            // width={540}
            height={250}
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
    </div>
  );
}

