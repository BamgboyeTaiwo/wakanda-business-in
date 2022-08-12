import React from "react";
import Image from "next/image";
import styles from "./staffManagement.module.css";

export default function staffManagement() {
  return (
    <section className="bg-[#EFF7F0] pt-4 text-[#163828] font-['Raleway']">
      <div className={`container px-3 ${styles.containerst}`}>
        <div
          className={`grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12  ${styles}`}
        >
          <div className="col-span-4 sm:col-span-12 md:col-span-6 lg:col-span-5">
            <h1
              className={`text-[#00A85A] font-['Raleway'] text-bold sm:text-[15px] mb-4 lg:mb-5 ${styles.businessheader}`}
            >
              STAFF MANAGEMENT
            </h1>

            <div className="grid grid-cols-12 sm:mb-3 lg:mb-6">
              <div className="col-span-3 mx-2 ">
                <img
                  className="sm:block md:hidden lg:hidden"
                  src="/images/Group -10.png"
                  alt=""
                />
                <Image
                  className={`sm:hidden ${styles.displaynone} `}
                  src="/communicate-icon.svg"
                  alt="Wakanda"
                  width={472}
                  height={356}
                />
              </div>
              <div className={`col-span-9`}>
                <h3 className="text-lg font-semibold">
                  Better internal Communication
                </h3>
                <p className="text-normal tracking-wider leading-7">
                  Create Internal communication channel with your staff,
                  enhanced with the ability to create different categories of
                  chat with your company community, and also anonymous voices
                  chats for staffs to communicate with the managent.
                </p>
              </div>
            </div>
            {/* dgcusjf */}

            <div className="grid grid-cols-12  sm:mb-3 lg:mb-6">
              <div className="col-span-3 mx-2 ">
                <img
                  className="sm:block md:hidden lg:hidden"
                  src="/images/Group -9.png"
                  alt=""
                />
                <Image
                  className={`sm:hidden ${styles.displaynone} `}
                  src="/performance-icon.svg"
                  alt="Wakanda"
                  width={472}
                  height={356}
                />
              </div>
              <div className={`col-span-9`}>
                <h3 className="text-lg font-semibold">
                  Reports and Documentation
                </h3>
                <p className="text-normal tracking-wider leading-7">
                  Track the performance of your staff members to ensure
                  effectiveness and productivity. Including a centralized
                  storage for your documents which can be easily accessible from
                  anywhere in the world at any time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 sm:mb-3 lg:mb-6">
              <button
                className={` col-span-12 text-center  lg:ml-10 bg-[#00A85A] md:col-span-8 md:col-start-3 md:py-1 md:px-1 } text-white font-semibold  py-3 px-8 rounded`}
              >
                GET STARTED NOW {">"}
              </button>
            </div>
          </div>
          <div
            className={` ${styles.div1} col-span-8 sm:col-span-12 md:col-span-6 lg:col-span-7 lg:pt-2 ${styles.flex2}`}
          >
            <Image
              src="/staff_management.png"
              alt="Wakanda_staff_management"
              width={872}
              height={760}
              layout="responsive"

              // width={250}
              // height={530}
            />
          </div>
          <div
            className={` ${styles.div2} col-span-8 sm:col-span-12 md:col-span-6 lg:col-span-7 lg:pt-2 ${styles.flex2}`}
          ></div>
        </div>
      </div>
    </section>
  );
}
